import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div className="font-bold text-xl">Samrat Frame House</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.reduce((a, c) => a + c.qty, 0)})</Link>
      </div>
    </nav>
  );
}
