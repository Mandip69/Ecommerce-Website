import React from "react";
import { motion } from "framer-motion";

export default function UniquePortfolio() {
  const projects = [
    { id: 1, year: "2021", title: "Wooden Frame Collection", img: "/p1.jpg", desc: "Our journey began with handcrafted wooden frames." },
    { id: 2, year: "2022", title: "Modern Black Frames", img: "/p2.jpg", desc: "We moved into sleek, modern designs loved by urban homes." },
    { id: 3, year: "2023", title: "Royal Golden Frames", img: "/p3.jpg", desc: "A luxury golden touch to elevate premium interiors." },
    { id: 4, year: "2024", title: "Custom Art Frames", img: "/p4.jpg", desc: "Tailor-made designs to preserve your unique stories." },
    { id: 5, year: "2025", title: "Rustic Collection", img: "/p7.jpg", desc: "A blend of vintage and rustic vibes for timeless beauty." },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-[#0066cc]">
          Our Creative Journey
        </h2>

        <div className="relative border-l-4 border-[#d2a679] ml-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-16 ml-8 relative"
            >
              {/* Circle marker */}
              <span className="absolute -left-12 top-6 w-6 h-6 rounded-full bg-[#d2a679] border-4 border-white shadow-md"></span>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                {/* Image */}
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full md:w-1/2 h-64 object-cover"
                />

                {/* Text Content */}
                <div className="p-6 flex flex-col justify-center">
                  <span className="text-sm text-gray-500 font-semibold">
                    {project.year}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
