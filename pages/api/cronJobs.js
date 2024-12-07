import cron from 'node-cron';

import dbConnect from './utils/dbConnect';
import Product from './models/Product';

const checkAndUpdateProductsStatus = async () => {
  try {
    await dbConnect();
    const currentDate = new Date();
    const productsToUpdate = await Product.find({
      dataDeVencimento: { $lt: currentDate },
      statusDePagamento: { $ne: 'pago' },
    });

    const updatePromises = productsToUpdate.map((product) =>
      Product.updateOne({ _id: product._id }, { $set: { statusDePagamento: 'vencido' } })
    );

    await Promise.all(updatePromises);
    console.log(`Status atualizado para 'vencido' para ${productsToUpdate.length} produto(s).`);
  } catch (error) {
    console.error('Erro ao atualizar status de pagamento:', error);
  }
};

if (typeof window === "undefined") {
  // Este código será executado apenas no lado do servidor

  cron.schedule('0 */5 * * *', checkAndUpdateProductsStatus, {
    timezone: 'America/Sao_Paulo', // Configura para o horário de Brasília
  });
  

}


// Agendar cron job para rodar todos os dias à meia-noite

export default (req, res) => {
    // Verifique se res está definido
    if (!res) {
      console.error('Resposta não definida');
      return;
    }
    
  res.status(200).json({ message: 'Cron Job executado!' });
};
