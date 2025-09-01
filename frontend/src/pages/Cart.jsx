import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart({ cart, setCart }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryLocation: "",
    paymentMode: "Cash on Delivery",
  });

  const [success, setSuccess] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      phone: "",
      address: "",
      deliveryLocation: "",
      paymentMode: "Cash on Delivery",
    });
  };

  const updateQty = (id, delta) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const clearCart = () => setCart([]);

  const placeOrder = async () => {
    if (!user.name || !user.phone || !user.address) {
      return alert("⚠️ Please fill all required fields!");
    }

    try {
      await axios.post("http://localhost:5000/api/orders", {
        user,
        items: cart,
        total,
      });

      setSuccess(true);
      resetForm();
      clearCart();

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-20 p-6 max-w-5xl mx-auto bg-gray-50 rounded-3xl shadow-2xl">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
        🛒 Shopping Cart
      </h2>

      {/* Success Toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-10 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg z-50"
          >
            ✅ Order Placed Successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg mb-8">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {cart.map((c) => (
            <motion.div
              key={c._id}
              layout
              className="flex items-center bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
            >
              <img
                src={c.image || "https://via.placeholder.com/100"}
                alt={c.name}
                className="w-24 h-24 object-cover rounded-lg border mr-4"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800">{c.name}</p>
                <p className="text-green-600 font-bold">₨ {c.price * c.qty}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => updateQty(c._id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{c.qty}</span>
                  <button
                    onClick={() => updateQty(c._id, +1)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(c._id)}
                className="text-red-500 font-bold hover:text-red-700 text-xl ml-2"
              >
                ✖
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Total */}
      <div className="flex justify-between items-center border-t pt-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Total:</h3>
        <span className="text-3xl font-extrabold text-green-700">₨ {total}</span>
      </div>

      {/* Delivery / Order Form */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">📝 Delivery Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Phone Number *"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Address *"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Delivery Location"
            value={user.deliveryLocation}
            onChange={(e) =>
              setUser({ ...user, deliveryLocation: e.target.value })
            }
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          />
          <select
            value={user.paymentMode}
            onChange={(e) => setUser({ ...user, paymentMode: e.target.value })}
            className="border p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none w-full"
          >
            <option>Cash on Delivery</option>
            <option>eSewa</option>
            <option>Khalti</option>
            <option>Bank Transfer</option>
          </select>
        </div>

        <button
          onClick={placeOrder}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-bold shadow-lg transition-transform transform hover:scale-105"
        >
          ✅ Place Order
        </button>
      </div>
    </div>
  );
}
