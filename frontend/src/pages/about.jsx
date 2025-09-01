import React from "react";
import { motion } from "framer-motion";
import { Target, Gem, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0066cc] to-[#004c99] text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-4"
        >
          About Samrat Frame House
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl mx-auto text-lg opacity-90"
        >
          Located in the heart of Samakhusi, Kathmandu – we craft frames that
          bring your memories to life.
        </motion.p>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="/a1.png"
            alt="Our Workshop"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="mb-4 text-lg leading-relaxed">
              Samrat Frame House started with a simple vision – to make photo
              frames more than just decorations. We believe every picture tells
              a story, and the right frame enhances that story.
            </p>
            <p className="text-lg leading-relaxed">
              For over a decade, we’ve been serving families, artists, and
              businesses across Kathmandu with handcrafted, custom-designed
              frames that match every style and occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Target className="mx-auto mb-4 text-[#0066cc]" size={40} />
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p>
              To preserve your memories with premium quality frames that
              combine tradition with modern design.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Gem className="mx-auto mb-4 text-[#0066cc]" size={40} />
            <h3 className="text-2xl font-bold mb-3">Our Values</h3>
            <p>
              Craftsmanship, authenticity, and customer satisfaction drive
              everything we do at Samrat Frame House.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <Handshake className="mx-auto mb-4 text-[#0066cc]" size={40} />
            <h3 className="text-2xl font-bold mb-3">Our Promise</h3>
            <p>
              Whether it’s a family portrait, certificate, or art piece, we
              ensure every frame is built to last.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#0066cc] to-[#004c99] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Frame Your Memories</h2>
        <p className="mb-6 max-w-2xl mx-auto text-lg opacity-95">
          Visit us at Samakhusi, Kathmandu or contact us to create a frame that
          perfectly matches your moments.
        </p>
        <a
          href="/shop"
          className="bg-[#d2a679] hover:bg-[#b58a5a] px-8 py-3 rounded-lg font-semibold text-white shadow-lg transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
