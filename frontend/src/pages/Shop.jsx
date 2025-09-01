import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";

export default function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // "asc" | "desc" | ""

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Handle sorting
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header + Sort */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
          🛒 Our Products
        </h2>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort by</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sortedProducts.map((p) => (
          <motion.div
            key={p._id}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 shadow-sm rounded-2xl overflow-hidden flex flex-col transition hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                ₨ {p.price}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 truncate">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 flex-grow line-clamp-2">
                {p.description || "High quality product available now."}
              </p>

              {/* Ratings from backend */}
              <div className="flex items-center text-yellow-400 mt-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < (p.rating || 0) ? "currentColor" : "none"}
                    stroke="currentColor"
                  />
                ))}
                <span className="text-gray-500 text-xs ml-2">
                  ({p.reviewCount || 0} reviews)
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => addToCart(p)}
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-medium shadow-md transition"
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
