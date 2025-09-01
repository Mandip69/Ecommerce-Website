import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-600">Samrat Frame House</h2>
          <p className="text-gray-600 mt-3 text-sm">
            Your trusted partner for premium frames and designs. We craft every
            piece with love, elegance, and durability.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/shop" className="hover:text-blue-600">Shop</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/profile" className="hover:text-blue-600">Our Profile</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center space-x-2">
              <MapPin size={18} className="text-blue-600" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} className="text-blue-600" />
              <span>+977-9841469235</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} className="text-blue-600" />
              <span>samratframehouse197@gmail.com </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 py-4">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Samrat Frame House. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
