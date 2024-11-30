import cron from 'node-cron';
import dbConnect from '../utils/dbConnect';
import Product from '../models/Product';

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

// Agendar cron job para rodar todos os dias à meia-noite
cron.schedule('0 0 * * *', checkAndUpdateProductsStatus);

export default (req, res) => {
  res.status(200).json({ message: 'Cron Job executado!' });
};
