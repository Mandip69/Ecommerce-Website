import express from "express";
import Order from "../models/Order.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST a new order (user)
router.post("/", async (req, res) => {
  const { user, items, total } = req.body;

  const order = new Order({ user, items, total });

  try {
    const savedOrder = await order.save();

    // Prepare email content
    const productList = items
      .map((item) => `${item.name} - Rs.${item.price} x ${item.quantity}`)
      .join("\n");

    const mailText = `
New order received!

Customer Name: ${user.name}
Phone: ${user.phone}
Email: ${user.email || "Not provided"}
Address: ${user.address}
Delivery Location: ${user.deliveryLocation || "Not provided"}
Payment Mode: ${user.paymentMode || "Cash on Delivery"}

Products Ordered:
${productList}

Total Amount: Rs.${total}
`;

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // you receive the order
      subject: "New Order Received",
      text: mailText,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json(savedOrder);
  } catch (err) {
    console.error(err);
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
