import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        🛒 Our Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <motion.div
            key={p._id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
                ₨ {p.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 flex-grow">
                {p.description || "High quality product available now."}
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(p)}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium shadow-md transition"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
