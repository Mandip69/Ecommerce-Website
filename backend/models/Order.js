import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
  total: { type: Number, required: true },
  status: { type: String, default: "Pending" }, // Pending, Shipped, Delivered
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
