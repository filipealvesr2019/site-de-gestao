import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  dataDeVencimento: { type: Date, required: true },
  statusDePagamento: { 
    type: String, 
    enum: ['pendente', 'vencido', 'pago'], 
    default: 'pendente' 
  },
  dataCriacao: { type: Date, default: Date.now }, // Data de criação automática
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
