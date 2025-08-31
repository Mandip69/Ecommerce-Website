import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Array of products to add
const products = [
  {
    name: "Classic Wooden Frame",
    price: 1200,
    image: "/s1.jpg",
    description: "High quality wooden frame",
  },
  {
    name: "Modern Black Frame",
    price: 1500,
    image: "/s2.jpg",
    description: "Sleek black frame for modern interiors",
  },
  {
    name: "Golden Royal Frame",
    price: 2000,
    image: "/s3.jpg",
    description: "Elegant golden finish frame",
  },
  {
    name: "Minimalist White Frame",
    price: 1300,
    image: "/s4.jpg",
    description: "Simple and clean white frame",
  },
  {
    name: "Vintage Rustic Frame",
    price: 1600,
    image: "/s5.jpg",
    description: "Rustic wooden frame with vintage look",
  },
  {
    name: "Custom Design Frame",
    price: 2500,
    image: "/s6.jpg",
    description: "Personalized custom frame",
  },
  {
    name: "Elegant Bronze Frame",
    price: 2200,
    image: "/s7.jpg",
    description: "Bronze colored elegant frame",
  },
  {
    name: "Luxury Royal Frame",
    price: 3000,
    image: "/s8.jpg",
    description: "High-end luxury royal frame",
  },
];

// Function to insert products
const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Remove existing products
    await Product.insertMany(products); // Insert new products
    console.log("Products added successfully!");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedProducts();
