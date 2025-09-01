import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar({ cart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);

  // Add scroll listener for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg bg-white" : "shadow-md bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            {/* Logo image placeholder */}
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-blue-600 font-extrabold text-2xl sm:text-3xl tracking-wide">
              Samrat Frame House
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-semibold text-lg">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/shop" className="hover:text-blue-600 transition">
              Shop
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              About Us
            </Link>
            <Link to="/profile" className="hover:text-blue-600 transition">
              Our Profile
            </Link>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative flex items-center hover:text-blue-600 transition"
            >
              <ShoppingCart className="w-6 h-6 mr-1" />
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
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 space-y-4 text-gray-700 font-semibold text-lg">
          <Link
            to="/"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/profile"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Our Profile
          </Link>
          <Link
            to="/contact"
            className="block hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="flex items-center hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart className="w-6 h-6 mr-2" />
            Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
}
