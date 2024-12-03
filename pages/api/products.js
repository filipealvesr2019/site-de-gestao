import { getAuth } from '@clerk/nextjs/server'
import dbConnect from "./utils/dbConnect";
import Product from './models/Product';
import cors from 'cors';

const corsOptions = {
  origin: 'https://www.gestaofinanceirapro.online', // Permitir o domínio do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware para CORS
const runCors = cors(corsOptions)
// A função handler será responsável por lidar com a requisição
export default async function handler(req, res) {
    // Chama o middleware CORS para permitir requisições
    await new Promise((resolve, reject) => runCors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    }));


    
  const { userId } = getAuth(req)
  console.log("userId", userId)
  try {
    // Conectar ao banco de dados uma vez, antes de executar a lógica da requisição
    await dbConnect();

    // Verificar o método da requisição
    if (req.method === 'POST') {
      
      const { nome, client,  preco, dataDeVencimento, statusDePagamento, tipo } = req.body;
      console.log("Dados recebidos:", req.body);

      // Verificar se todos os campos necessários estão presentes
      if (!nome || !preco || !dataDeVencimento || !tipo) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      // Criar o novo produto
      const newProduct = new Product({
        client,
        nome,
        preco,
        dataDeVencimento: dataDeVencimento, // Armazenar como string
        statusDePagamento: statusDePagamento || 'pendente',
        tipo, 
        userId 
        
      });

      // Salvar o produto no banco de dados
      await newProduct.save();
      res.status(201).json({ message: 'Produto criado com sucesso!', product: newProduct });
    } 
    else if (req.method === 'GET') {
      try {
        console.log("userId", userId)

        const { nome, client } = req.query;
    
        // Cria o filtro com base no usuário logado
        const query = { userId: req.userId }; // O userId deve vir do usuário logado, por exemplo, via JWT ou sessão
    
        // Adiciona os filtros para nome e client, se fornecidos
        if (nome) {
          query.nome = { $regex: nome, $options: 'i' }; // Pesquisa case-insensitive
        }
        if (client) {
          query.client = { $regex: client, $options: 'i' }; // Pesquisa case-insensitiva
          console.log('Filtro para cliente adicionado:', query.client);
        }
    
        // Consultar todos os produtos
        const products = await Product.find({ userId }).sort({ dataCriacao: -1 });
        // Retornar os produtos e o total de receitas pagas
        res.status(200).json({ products });
      } catch (error) {
        // Tratar erro especificamente para a rota GET
        console.error('Erro na rota GET:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos.', details: error.message });
      }
    } 
    else if (req.method === 'DELETE') {
      // Lógica para excluir um produto
      const { id } = req.query; // Obtemos o ID do produto a partir da query
      if (!id) {
        return res.status(400).json({ error: 'ID do produto é obrigatório.' });
      }

      const deletedProduct = await Product.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      res.status(200).json({ message: 'Produto excluído com sucesso!' });
    } else if (req.method === 'PUT') {
      const { id } = req.query; // Obter o ID do produto a partir da query
      const { statusDePagamento } = req.body; // O novo statusDePagamento

      // Verificar se o statusDePagamento é válido
      if (!statusDePagamento || !['pendente', 'pago'].includes(statusDePagamento)) {
        return res.status(400).json({ error: 'Status de pagamento inválido.' });
      }

      // Verificar se o ID do produto foi fornecido
      if (!id) {
        return res.status(400).json({ error: 'ID do produto é obrigatório.' });
      }

      // Atualizar o produto com o novo statusDePagamento
      const updatedProduct = await Product.findByIdAndUpdate(
        id, 
        { statusDePagamento },
        { new: true } // Retorna o produto atualizado
      );

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      res.status(200).json({ message: 'Status de pagamento atualizado com sucesso!', product: updatedProduct });
    }
    else {
      // Retornar erro caso o método não seja permitido
      res.status(405).json({ error: 'Método não permitido.' });
    }
  } catch (error) {
    // Tratar erros gerais
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}