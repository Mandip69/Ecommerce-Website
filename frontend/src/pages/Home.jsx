import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images
import heroImg from "../assets/hero.png"; // Hero image
import frame1 from "../assets/s1.jpg";
import frame2 from "../assets/s2.jpg";
import frame3 from "../assets/s3.jpg";
import frame4 from "../assets/s4.jpg";

export default function Home() {
  const featuredProducts = [
    { img: frame1, name: "Classic Wooden Frame", price: "Rs. 1200" },
    { img: frame2, name: "Modern Black Frame", price: "Rs. 1500" },
    { img: frame3, name: "Golden Royal Frame", price: "Rs. 2000" },
    { img: frame4, name: "Minimalist White Frame", price: "Rs. 1300" },
  ];

  const categories = [
    { name: "Wooden Frames", img: frame1 },
    { name: "Metal Frames", img: frame2 },
    { name: "Luxury Frames", img: frame3 },
  ];

  const testimonials = [
    {
      name: "Sita Sharma",
      review: "Absolutely love the frames! High quality and fast delivery.",
    },
    {
      name: "Ramesh Thapa",
      review: "Perfect for gifts. The craftsmanship is top-notch.",
    },
    {
      name: "Anita Rai",
      review: "I bought 5 frames, and all are beautifully made. Highly recommend!",
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-yellow-50 to-pink-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 md:px-0 z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Samrat Frame House
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Premium frames for your precious memories. Handcrafted with love.
          </p>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0066cc] text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              Shop Now
            </motion.button>
          </Link>
        </motion.div>

        <motion.img
          src={heroImg}
          alt="Frames Hero"
          className="absolute bottom-0 right-0 w-1/2 md:w-1/3 object-cover rounded-tl-3xl shadow-xl hidden md:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl font-extrabold mb-12 text-center text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Featured Frames
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {featuredProducts.map((prod, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-2xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-gray-900">{prod.name}</h3>
                  <p className="text-[#0066cc] font-semibold">{prod.price}</p>
                  <Link to="/shop">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="mt-2 bg-[#0066cc] hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md"
                    >
                      Buy Now
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{cat.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-900">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-700 mb-4">"{t.review}"</p>
                <h4 className="text-gray-900 font-bold">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#0066cc]">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Stay Updated
          </h2>
          <p className="mb-6">Subscribe to get latest offers and new frames</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg text-gray-900 w-full md:w-1/2"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold text-gray-900">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9848565742" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}
