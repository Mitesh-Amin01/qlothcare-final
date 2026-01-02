'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Droplets, Wind, Sparkles, Package, Clock } from 'lucide-react';

/* Motion Variants */
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Wash & Fold",
      description:
        "Professional washing and folding service with premium detergents and fabric care for everyday clothing",
      image:
        "/landingservices/fold.jpg",
      iconBg: "bg-clothcare-primaryDark",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Dry Cleaning",
      description:
        "Expert dry cleaning for delicate fabrics, suits, and special garments with eco-friendly solvents",
      image:
        "/landingservices/drycleaning.jpg",
      iconBg: "bg-clothcare-primaryDark",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Press & Iron",
      description:
        "Crisp pressing and ironing to keep your clothes looking sharp and professional every day",
      image:
        "landingservices/pressiron.jpeg",
      iconBg: "bg-clothcare-primaryDark",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Stain Removal",
      description:
        "Advanced stain treatment for tough spots and set-in stains using specialized cleaning techniques",
      image:
        "landingservices/stain.jpg",
      iconBg: "bg-clothcare-primaryDark",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Pickup & Delivery",
      description:
        "Convenient doorstep service where we pick up, clean, and deliver your laundry on schedule",
      image:
        "landingservices/delivery.jpg",
      iconBg: "bg-clothcare-primaryDark",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional laundry care solutions tailored to meet all your cleaning needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
         className="flex flex-wrap justify-center gap-6 mb-8"

        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-80 w-full md:w-[48%] lg:w-[30%]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`w-12 h-12 ${service.iconBg} rounded-lg flex items-center justify-center text-white shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-clothcare-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Express Service Card */}
          {/* <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-2 lg:col-span-1 group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-80"
          >
            <div className="absolute inset-0">
              <img
                src=""
                alt="Express Service"
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredCard === 5 ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
            </div>

            <div className="relative h-full flex flex-col justify-between p-6">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="w-12 h-12 bg-clothcare-primaryDark rounded-lg flex items-center justify-center text-white shadow-lg"
              >
                <Clock className="w-8 h-8" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Express Service
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  Same-day and 24-hour express service available for urgent laundry needs
                </p>
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
