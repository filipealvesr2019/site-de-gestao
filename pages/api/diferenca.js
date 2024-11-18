import Product from "../models/Product";
import dbConnect from "../utils/dbConnect";

export default async function handler(req, res) {
  try {
    await dbConnect();

    const currentDate = new Date();
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    if (req.method === "GET") {
      // Calcular o total de receitas pagas do mês
      const totalPaid = await Product.aggregate([
        {
          $match: {
            statusDePagamento: "pago",
            dataDeVencimento: { $gte: startOfMonth, $lte: endOfMonth },
            tipo: "receita", // Filtra para receitas
          },
        },
        {
          $group: {
            _id: null,
            totalReceitas: { $sum: "$preco" },
          },
        },
      ]);

      const totalReceitasPagas =
        totalPaid.length > 0 ? totalPaid[0].totalReceitas : 0;

      // Calcular o total de despesas do mês
      const totalExpenses = await Product.aggregate([
        {
          $match: {
            dataDeVencimento: { $gte: startOfMonth, $lte: endOfMonth },
            tipo: "despesa", // Filtra para despesas
            statusDePagamento: { $in: ["pendente", "vencido"] }, // Verifica se o status é "pendente" ou "vencido"
          },
        },
        {
          $group: {
            _id: null,
            totalDespesas: { $sum: "$preco" },
          },
        },
      ]);

      const totalDespesas =
        totalExpenses.length > 0 ? totalExpenses[0].totalDespesas : 0;

      // Calcula a diferença
      const diferenca = totalReceitasPagas - totalDespesas;

      res.status(200).json({ diferenca });
    } else {
      res.status(405).json({ error: "Método não permitido." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
}
