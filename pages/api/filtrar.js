import Product from "../models/Product";
import dbConnect from "../utils/dbConnect";
import { getAuth } from '@clerk/nextjs/server';

export default async function handler(req, res) {
  const { userId } = getAuth(req);
  await dbConnect(); // Conectar ao banco de dados

  if (req.method === 'GET') {
    const { diaInicio, mesInicio, diaFim, mesFim, type } = req.query;

    // Verifica se os parâmetros foram fornecidos
    if (!diaInicio || !mesInicio || !diaFim || !mesFim || !type) {
      return res.status(400).json({ error: 'Todos os parâmetros de data são necessários.' });
    }

    try {
      // Cria as datas de início e fim com base nos parâmetros fornecidos
      const anoAtual = new Date().getFullYear();
      const dataInicio = new Date(Date.UTC(anoAtual, mesInicio - 1, diaInicio)); // Data de início em UTC
      let dataFim = new Date(Date.UTC(anoAtual, mesFim, 0)); // Último dia do mês 'mesFim' (0 no mês seguinte é o último dia do mês atual)

      // Se mesInicio e mesFim forem iguais, ajusta dataFim para o final do mês
      if (mesInicio === mesFim) {
        dataFim.setUTCHours(23, 59, 59, 999); // Ajusta para o último momento do dia em UTC
      }

      // Filtra os produtos com base na data de vencimento
      const query = {
        userId,
        [type]: {
          $gte: dataInicio,  // Maior ou igual a data de início
          $lte: dataFim,     // Menor ou igual a data de fim
        },
      };

      const produtosFiltrados = await Product.find(query);

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
