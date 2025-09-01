import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Load environment variables
dotenv.config({ path: path.resolve("./.env") });

const app = express();

// Debug: check Mongo URI
console.log("MongoDB URI:", process.env.MONGO_URL);
if (!process.env.MONGO_URL) {
  console.error("❌ MongoDB URI not found! Set in Render dashboard.");
  process.exit(1);
}

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Simple test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connection + start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });
