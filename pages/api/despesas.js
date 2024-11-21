import Product from "../models/Product";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server'


export default async function handler(req, res) {
  
  const { userId } = getAuth(req)

  try {
    await dbConnect();

    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    if (req.method === 'GET') {
      // Calcular o total de despesas do mês
      const totalExpenses = await Product.aggregate([
        {
          $match: {
            userId: userId, // Filtra pelo userId
            dataDeVencimento: { $gte: startOfMonth, $lte: endOfMonth },
            tipo: 'despesa', // Filtra para despesas
            statusDePagamento: { $in: ['pendente', 'vencido'] }, // Verifica se o status é "pendente" ou "vencido"
          },
        },
        {
          $group: {
            _id: null,
            totalDespesas: { $sum: "$preco" },
          },
        },
        
      ]);

      const totalDespesas = totalExpenses.length > 0 ? totalExpenses[0].totalDespesas : 0;
      res.status(200).json({ totalDespesas });
    } else {
      res.status(405).json({ error: 'Método não permitido.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}
