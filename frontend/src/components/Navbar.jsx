import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);

  return (
    <nav className="bg-blue-600 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-white font-extrabold text-2xl tracking-wide">
            Samrat Frame House
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link to="/shop" className="hover:text-yellow-300 transition">Shop</Link>
            <Link to="/about" className="hover:text-yellow-300 transition">About Us</Link>
            <Link to="/profile" className="hover:text-yellow-300 transition">Our Profile</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
            <Link 
              to="/cart" 
              className="relative flex items-center hover:text-yellow-300 transition"
            >
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs text-white font-bold rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4 space-y-3 text-white font-medium">
          <Link to="/" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/about" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/profile" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Our Profile</Link>
          <Link to="/contact" className="block hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link 
            to="/cart" 
            className="flex items-center hover:text-yellow-300"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
}
