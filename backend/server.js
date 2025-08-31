import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// After middlewares
app.use("/api/products", productRoutes);

// After product routes
app.use("/api/orders", orderRoutes);

// Simple route test
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch(err => console.log(err));
