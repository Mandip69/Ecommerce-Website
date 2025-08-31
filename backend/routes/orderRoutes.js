import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST a new order (user)
router.post("/", async (req, res) => {
  const { user, items, total } = req.body;

  const order = new Order({ user, items, total });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all orders (admin)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
