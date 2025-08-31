import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      deliveryLocation: { type: String }, // e.g. Kathmandu, Pokhara
      paymentMode: {
        type: String,
        enum: ["Cash on Delivery", "eSewa", "Khalti", "Bank Transfer"],
        default: "Cash on Delivery",
      },
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
