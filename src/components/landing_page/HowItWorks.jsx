"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function TetonLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How It Works
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We've streamlined the entire process so you can spend less time worrying
          about laundry and more time doing what you love.
        </p>
      </motion.header>

      {/* Cards Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 pb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src="/howitswork/pickup.webp"
                alt="Pickup"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="p-6 relative">
              <span className="absolute -top-80 bg-white p-5 rounded-full text-2xl">1</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Schedule Pickup
              </h2>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded mb-4">
                Hassle Free
              </span>
              <p className="text-gray-600 leading-relaxed">
                Doorstep laundry pickup with fast, reliable, and hygienic cleaning service.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src="/howitswork/laundry.jpg"
                alt="Expert Care"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="p-6 relative">
              <span className="absolute -top-80 bg-white p-5 rounded-full text-2xl">2</span>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Care & Cleaning
              </h2>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded mb-4">
                Heartly Care
              </span>
              <p className="text-gray-600 leading-relaxed">
                Expert care and cleaning ensuring freshness, fabric safety, and durability.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src="/howitswork/delivery.jpg"
                alt="Fresh Delivery"
                className="w-full h-full object-cover"
              />
            </motion.div>
           <div className="p-6 relative">
              <span className="absolute -top-80 bg-white p-5 rounded-full text-2xl">3</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Fresh Delivery
              </h2>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded mb-4">
                Delivery
              </span>
              <p className="text-gray-600 leading-relaxed">
                Professionally cleaned garments delivered fresh to your doorstep.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
