import Product from "../models/Product";
import dbConnect from "../utils/dbConnect";

// A função handler será responsável por lidar com a requisição
export default async function handler(req, res) {
  try {
    // Conectar ao banco de dados uma vez, antes de executar a lógica da requisição
    await dbConnect();

    // Verificar o método da requisição
    if (req.method === 'POST') {
      const { nome, preco, dataDeVencimento, statusDePagamento, tipo } = req.body;
      console.log("Dados recebidos:", req.body);

      // Verificar se todos os campos necessários estão presentes
      if (!nome || !preco || !dataDeVencimento || !tipo) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      // Criar o novo produto
      const newProduct = new Product({
        nome,
        preco,
        dataDeVencimento: dataDeVencimento, // Armazenar como string
        statusDePagamento: statusDePagamento || 'pendente',
        tipo
      });

      // Salvar o produto no banco de dados
      await newProduct.save();
      res.status(201).json({ message: 'Produto criado com sucesso!', product: newProduct });
    } 
    else if (req.method === 'GET') {
      // Buscar todos os produtos e retornar
      const products = await Product.find({}).sort({ dataCriacao: -1 });
      res.status(200).json({ products });
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
