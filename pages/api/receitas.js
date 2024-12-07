
import { getAuth } from '@clerk/nextjs/server'
import dbConnect from './utils/dbConnect';
import Product from './models/Product';
import cors from 'cors';

const corsOptions = {
  origin: ['https://www.gestaofinanceirapro.com.br', 'https://www.gestaofinanceirapro.online'], // Permitir o domínio do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware para CORS
const runCors = cors(corsOptions)

export default async function handler(req, res) {

   // Chama o middleware CORS para permitir requisições
   await new Promise((resolve, reject) => runCors(req, res, (result) => {
    if (result instanceof Error) {
      return reject(result);
    }
    resolve(result);
  }));


  const { userId } = getAuth(req)

  try {
    await dbConnect();

    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    if (req.method === 'GET') {
      // Calcular o total de receitas pagas do mês
      const totalPaid = await Product.aggregate([
        {
          $match: {
            userId: userId, // Filtra pelo userId
            statusDePagamento: 'pago',
            dataDeVencimento: { $gte: startOfMonth, $lte: endOfMonth },
            tipo: 'receita', // Filtra para receitas
          },
        },
        {
          $group: {
            _id: null,
            totalReceitas: { $sum: "$preco" },
          },
        },
      ]);

      const totalReceitasPagas = totalPaid.length > 0 ? totalPaid[0].totalReceitas : 0;
      res.status(200).json({ totalReceitasPagas });
    } else {
      res.status(405).json({ error: 'Método não permitido.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}
