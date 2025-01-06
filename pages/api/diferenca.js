import Product from "./models/Product";
import { getAuth } from '@clerk/nextjs/server'
import cors from 'cors';
import dbConnect from "./utils/dbConnect";

const corsOptions = {
  origin: 'https://www.gestaofinanceirapro.com.br', // Permitir o domínio do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware para CORS
const runCors = cors(corsOptions)


export default async function handler(req, res) {
  const { userId } = getAuth(req)
   // Chama o middleware CORS para permitir requisições
   await new Promise((resolve, reject) => runCors(req, res, (result) => {
    if (result instanceof Error) {
      return reject(result);
    }
    resolve(result);
  }));
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
            userId: userId, // Filtra pelo userId
            statusDePagamento: "pago",
            dataCriacao: { $gte: startOfMonth, $lte: endOfMonth },
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
            userId: userId, // Filtra pelo userId

            dataCriacao: { $gte: startOfMonth, $lte: endOfMonth },
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
