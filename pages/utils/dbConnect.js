import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Por favor, defina a variável de ambiente MONGODB_URI');
}

let cached = global.mongoose;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {}).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;

  // Atrasar a chamada ao cron job para garantir que a conexão esteja pronta
  setImmediate(() => {
    const { default: checkAndUpdateProductsStatus } = require('../api/cronJobs');
    checkAndUpdateProductsStatus();
  });

  return cached.conn;
}

export default dbConnect;
