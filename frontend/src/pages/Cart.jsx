import React, { useState } from "react";
import axios from "axios";

export default function Cart({ cart, removeFromCart }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryLocation: "",
    paymentMode: "Cash on Delivery",
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    if (!user.name || !user.address || !user.phone) {
      return alert("Please fill all required fields!");
    }

    axios
      .post("http://localhost:5000/api/orders", {
        user,
        items: cart,
        total,
      })
      .then(() => {
        alert("✅ Order placed successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">🛒 Your Cart</h2>

      {/* Cart Items */}
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cart.map((c) => (
            <div
              key={c._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="text-gray-700">
                {c.name} x {c.qty} = ₨{c.price * c.qty}
              </span>
              <button
                onClick={() => removeFromCart(c._id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total */}
      <h3 className="mt-4 font-bold text-lg text-gray-800">
        Total: <span className="text-green-600">₨ {total}</span>
      </h3>

      {/* User Info Form */}
      <div className="mt-6 space-y-3">
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border p-3 w-full rounded-lg"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border p-3 w-full rounded-lg"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={user.phone}
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
          className="border p-3 w-full rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className="border p-3 w-full rounded-lg"
          required
        />
        <input
          type="text"
          placeholder="Delivery Location (e.g. Kathmandu, Pokhara)"
          value={user.deliveryLocation}
          onChange={(e) => setUser({ ...user, deliveryLocation: e.target.value })}
          className="border p-3 w-full rounded-lg"
        />

        {/* Payment Mode Dropdown */}
        <select
          value={user.paymentMode}
          onChange={(e) => setUser({ ...user, paymentMode: e.target.value })}
          className="border p-3 w-full rounded-lg"
        >
          <option>Cash on Delivery</option>
          <option>eSewa</option>
          <option>Khalti</option>
          <option>Bank Transfer</option>
        </select>

        {/* Place Order Button */}
        <button
          onClick={placeOrder}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg w-full font-semibold transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
