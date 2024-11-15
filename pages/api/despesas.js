import Product from "../models/Product";
import dbConnect from "../utils/dbConnect";


export default async function handler(req, res) {
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
            dataDeVencimento: { $gte: startOfMonth, $lte: endOfMonth },
            tipo: 'despesa', // Filtra para despesas
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
