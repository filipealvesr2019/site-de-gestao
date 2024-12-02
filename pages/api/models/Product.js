import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  client: { type: String },
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  dataDeVencimento: { type: Date, required: true },
  statusDePagamento: {
    type: String,
    enum: ["pendente", "vencido", "pago"],
    default: "pendente",
  },
  dataCriacao: { type: Date, default: Date.now },
  tipo: { type: String, required: true }, // Campo tipo corretamente definido
  userId: { type: String, required: true }, // Relaciona o produto ao cliente
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
