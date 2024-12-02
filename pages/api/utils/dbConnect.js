import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor, defina a variável de ambiente MONGODB_URI');
}

// Check if we are in development mode to cache the connection
let cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (typeof window !== 'undefined') {
    throw new Error('dbConnect foi chamado no lado do cliente!');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
// Atrasar a chamada ao cron job para garantir que a conexão esteja pronta
setImmediate(() => {
  const { default: checkAndUpdateProductsStatus } = require('../cronJobs');
  checkAndUpdateProductsStatus();
  });
  return cached.conn;
}

export default dbConnect;
