import Product from "./models/Product";
import { getAuth } from '@clerk/nextjs/server';
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
     // Chama o middleware CORS para permitir requisições
     await new Promise((resolve, reject) => runCors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve(result);
    }));


  const { userId } = getAuth(req);
  await dbConnect(); // Conectar ao banco de dados
  if (req.method === 'GET') {
    const { diaInicio, mesInicio, anoInicial, diaFim, mesFim, anoFinal, type } = req.query;
    console.log("filter", diaInicio, mesInicio, anoInicial, diaFim, mesFim, anoFinal, type);

    if (!diaInicio || !mesInicio || !anoInicial || !diaFim || !mesFim || !anoFinal || !type) {
      return res.status(400).json({ error: 'Todos os parâmetros de data são necessários.' });
    }

    try {
      // Ajustando para as datas corretas
 // Ajustando para as datas corretas
 const dataInicio = new Date(Date.UTC(anoInicial, mesInicio - 1, diaInicio)); 
 const dataFim = new Date(Date.UTC(anoFinal, mesFim - 1, diaFim, 23, 59, 59, 999));
 
      console.log("Data Início:", dataInicio);
      console.log("Data Fim:", dataFim);

      // A consulta do MongoDB usando o parâmetro `type` dinamicamente
      const query = {
        userId,
        [type]: {
          $gte: dataInicio,
          $lte: dataFim,
        },
      };

      const produtosFiltrados = await Product.find(query);
      console.log("produtosFiltrados", produtosFiltrados);

      if (produtosFiltrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum produto encontrado para o filtro fornecido.' });
      }

      res.status(200).json(produtosFiltrados); 
    } catch (error) {
      console.error(error); // Log de erro para depuração
      res.status(500).json({ error: 'Erro ao buscar produtos.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
