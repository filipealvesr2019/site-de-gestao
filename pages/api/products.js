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
      // Consultar todos os produtos
      const products = await Product.find({}).sort({ dataCriacao: -1 });

      // Calcular o total de receitas pagas do mês
      const currentDate = new Date();
      const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

      const totalPaid = await Product.aggregate([
        {
          $match: {
            statusDePagamento: 'pago',
            dataDeVencimento: { $gte: startOfMonth, $lte: endOfMonth }
          }
        },
        {
          $group: {
            _id: null,
            totalReceitas: { $sum: "$preco" }
          }
        }
      ]);

      const totalReceitasPagas = totalPaid.length > 0 ? totalPaid[0].totalReceitas : 0;

      // Retornar os produtos e o total de receitas pagas
      res.status(200).json({ products, totalReceitasPagas });
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
