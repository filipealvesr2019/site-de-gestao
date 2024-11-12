import mongoose from 'mongoose';
import checkAndUpdateProductsStatus from '../api/cronJobs';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor, defina a variável de ambiente MONGODB_URI');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;

  // Chamar o cron job após a conexão com o banco de dados
  checkAndUpdateProductsStatus();

  return cached.conn;
}

// Iniciar o cron job ao rodar o servidor
export default dbConnect;
