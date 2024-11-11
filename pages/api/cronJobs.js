import cron from 'node-cron';
import Product from '../models/Product';
import dbConnect from '../utils/dbConnect';

// Conectar ao banco de dados uma vez ao iniciar o cron job
const connectDb = async () => {
  await dbConnect();
};

// Função para atualizar o status dos produtos
const checkAndUpdateProductsStatus = async () => {
  try {
    // Conectar ao banco de dados
    await connectDb();
  
    // Obter todos os produtos com dataDeVencimento no passado e que não estão pagos
    const currentDate = new Date();
    const productsToUpdate = await Product.find({
      dataDeVencimento: { $lt: currentDate }, // Data de vencimento no passado
      statusDePagamento: { $ne: 'pago' }, // Não está pago
    });

    // Atualizar o status de pagamento para 'vencido'
    const updatePromises = productsToUpdate.map((product) =>
      Product.updateOne(
        { _id: product._id },
        { $set: { statusDePagamento: 'vencido' } }
      )
    );

    // Aguarde todas as atualizações
    await Promise.all(updatePromises);

    console.log(`Status atualizado para 'vencido' para ${productsToUpdate.length} produto(s).`);
  } catch (error) {
    console.error('Erro ao atualizar status de pagamento:', error);
  }
};

// Agendar o cron job para rodar todos os dias às 00:00
cron.schedule('0 0 * * *', checkAndUpdateProductsStatus); // Executa todo dia às 00:00

// Caso queira rodar imediatamente para testar
checkAndUpdateProductsStatus();
