import Product from "./models/Product";
import { getAuth } from '@clerk/nextjs/server';
import dbConnect from "./utils/dbConnect";
import cors from 'cors';

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
  await dbConnect();

  
  if (req.method === 'GET') {
    const { diaInicio, mesInicio, anoInicial, diaFim, mesFim, anoFinal } = req.query;
    // console.log('req.query', diaInicio, mesInicio, diaFim, mesFim)
    if (!diaInicio || !mesInicio || !anoInicial || !diaFim || !mesFim || !anoFinal) {
      return res.status(400).json({ error: 'Todos os parâmetros de data são necessários.' });
    }

    try {

      // Ajustando mesInicio e mesFim para considerar o mês correto (mesInicio é 1 para janeiro)
      const dataInicio = new Date(anoInicial, mesInicio - 1, diaInicio); // mesInicio - 1 para ajustar o mês
      const dataFim = new Date(anoFinal, mesFim - 1, diaFim, 23, 59, 59, 999); // mesFim - 1 para ajustar o mês
      
    

      // Montando a consulta MongoDB
      const query = {
        userId,
        dataCriacao: {
          $gte: dataInicio, // Maior ou igual a dataInicio
          $lte: dataFim,    // Menor ou igual a dataFim
        },
      };

      // Verificando a consulta gerada
      // console.log("Consulta MongoDB:", JSON.stringify(query, null, 2));

      const produtosFiltrados = await Product.find(query);
      console.log("Produtos encontrados:", produtosFiltrados);

      if (produtosFiltrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum produto encontrado para o filtro fornecido.' });
      }

      // Calcular receita e despesa
      const receita = produtosFiltrados
        .filter(produto => produto.tipo === 'receita' && produto.statusDePagamento === 'pago')
        .reduce((total, produto) => total + produto.preco, 0);

      const despesa = produtosFiltrados
        .filter(produto => produto.tipo === 'despesa')
        .reduce((total, produto) => total + produto.preco, 0);

      const diferenca = receita - despesa;

      // Resposta
      res.status(200).json({
        receita,
        despesa,
        diferenca,
        produtos: produtosFiltrados,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar produtos.' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
