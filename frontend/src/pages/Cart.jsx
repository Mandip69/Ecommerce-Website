import React, { useState } from "react";
import axios from "axios";

export default function Cart({ cart, removeFromCart }) {
  const [user, setUser] = useState({ name: "", email: "", address: "" });

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    if (!user.name || !user.address) return alert("Enter your info");

    axios
      .post("http://localhost:5000/api/orders", {
        user,
        items: cart,
        total,
      })
      .then(() => {
        alert("Order placed successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Your Cart</h2>
      {cart.map((c) => (
        <div key={c._id} className="flex justify-between mb-1">
          <span>
            {c.name} x {c.qty} - ₨{c.price * c.qty}
          </span>
          <button onClick={() => removeFromCart(c._id)} className="text-red-500">
            Remove
          </button>
        </div>
      ))}
      <h3 className="mt-2 font-bold">Total: ₨ {total}</h3>

      <div className="mt-4 space-y-2">
        <input
          type="text"
          placeholder="Your Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Address"
          value={user.address}
          onChange={(e) => setUser({ ...user, address: e.target.value })}
          className="border p-2 w-full"
        />
        <button
          onClick={placeOrder}
          className="bg-green-500 text-white px-3 py-2 rounded w-full"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
