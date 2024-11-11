"use cliente"
import Product from "../models/Product";
import dbConnect from "../utils/dbConnect";


export default async function handler(req, res) {
  await dbConnect();


    await dbConnect();
  
    if (req.method === 'POST') {
      const { nome, preco, dataDeVencimento, statusDePagamento } = req.body;
  
      if (!nome || !preco || !dataDeVencimento) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }
  
      try {
        console.log("Data recebida: ", dataDeVencimento);  // Verifique a data aqui
  
        const newProduct = new Product({
          nome,
          preco,
          dataDeVencimento: new Date(dataDeVencimento),  // Garantir que a data seja convertida corretamente
          statusDePagamento: statusDePagamento || 'pendente',
        });
  
        await newProduct.save();
        res.status(201).json({ message: 'Produto criado com sucesso!', product: newProduct });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao criar o produto.' });
      }
    } else if (req.method === 'GET') {
      try {
        const products = await Product.find({});
        res.status(200).json({ products });
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos.' });
      }
    } else {
      res.status(405).json({ error: 'Método não permitido.' });
    }
  }

