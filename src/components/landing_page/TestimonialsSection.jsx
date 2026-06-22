"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/btn/Button";

// Sample data to populate the floating bento cards
const floatingCards = [
  // Top Row
  {
    type: "image",
    src: "/testimonials/t1.png",
    className:
      "w-24 h-32 md:w-32 md:h-40 rounded-2xl md:rounded-[2rem] object-cover shadow-lg lg:self-end lg:mt-10 lg:md:mt-20",
  },
  {
    type: "text",
    name: "Manish Shah",
    role: "South Bopal, Ahmedabad",
    quote:
      '"Qloth Care has completely changed how I manage my wardrobe. Their precision and door-to-door service is unmatched."',
    className:
      "bg-bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 w-full sm:w-56 lg:self-start",
  },
  {
    type: "image",
    src: "/testimonials/t2.png",
    className:
      "w-20 h-20 md:w-28 md:h-28 rounded-full md:rounded-[2rem] object-cover shadow-lg lg:self-center lg:mb-10",
  },
  {
    type: "empty",
    className:
      "hidden lg:block w-24 h-24 rounded-[2rem] bg-gray-50 border border-orange-100 self-start mt-5",
  },
  {
    type: "image",
    src: "/testimonials/t3.png",
    className:
      "w-32 h-40 md:w-44 md:h-52 rounded-2xl md:rounded-[2rem] object-cover shadow-xl lg:self-end lg:mt-32 lg:-rotate-2",
  },

  // Middle Row
  {
    type: "text",
    name: "Priya Patel",
    role: "Fashion Designer",
    quote:
      '"Finally, a laundry service that understands premium fabrics. My silk collections always return looking brand new!"',
    className:
      "bg-clothcare-primary text-text-primary p-5 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl w-full sm:w-56 lg:translate-y-20 lg:z-10 lg:rotate-1",
  },
  {
    type: "image",
    src: "/testimonials/t4.png",
    className:
      "w-24 h-24 md:w-36 md:h-36 rounded-2xl md:rounded-[2rem] object-cover shadow-lg lg:self-center",
  },
  {
    type: "empty",
    className:
      "hidden lg:block w-32 h-20 rounded-[2rem] bg-gray-50 border border-gray-100 self-end mb-10",
  },

  // Right Side Cluster
  {
    type: "image",
    src: "/testimonials/t5.png",
    className:
      "w-28 h-40 md:w-40 md:h-56 rounded-2xl md:rounded-[2rem] object-cover shadow-xl lg:self-start lg:mt-10 lg:rotate-2",
  },
  {
    type: "text",
    name: "Rajiv Mehta",
    role: "Business Owner",
    quote:
      '"Efficiency and quality at its best. Qloth Care saves me hours every week, giving me more time to focus on my work."',
    className:
      "bg-bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 w-full sm:w-52 lg:mt-16 lg:z-10",
  },
  {
    type: "image",
    src: "/testimonials/t6.png",
    className:
      "w-24 h-32 md:w-32 md:h-40 rounded-2xl md:rounded-[2rem] object-cover shadow-lg lg:self-end lg:-translate-y-20",
  },
];

const containerFade = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const floatUp = {
  hidden: { y: 60, scale: 0.9, rotate: -2 },
  visible: {
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-bg-white overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-linear-to-b from-orange-50 to-transparent -z-10 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Floating Cards Masonry Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center items-stretch lg:items-start gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-24"
          variants={containerFade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {floatingCards.map((card, index) => (
            <motion.div
              key={index}
              variants={floatUp}
              whileHover={{ scale: 1.05, zIndex: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`
                ${card.className}
                relative will-change-transform cursor-default
                ${index > 5 ? "hidden sm:block" : ""}
                ${card.type === "text" ? "col-span-2 sm:col-span-1" : "justify-self-center"}
              `}
            >
              {/* Render based on card type */}
              {card.type === "image" && (
                <div className="w-full h-full overflow-hidden rounded-xl md:rounded-2xl lg:rounded-4xl shadow-lg">
                  <img
                    src={card.src}
                    alt="Testimonial User"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {card.type === "text" && (
                <div
                  className={`flex flex-col h-full justify-between p-4 md:p-6 backdrop-blur-sm rounded-xl md:rounded-2xl lg:rounded-4xl shadow-xl border border-gray-100 ${card.className.includes("bg-clothcare") ? "bg-clothcare-primary/90" : "bg-bg-white/95"}`}
                >
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 md:w-4 md:h-4 fill-current ${card.className.includes("bg-clothcare") ? "text-text-primary" : "text-text-accent"}`}
                      />
                    ))}
                  </div>
                  <p
                    className={`text-xs md:text-sm lg:text-base font-medium mb-3 leading-snug italic line-clamp-4 ${card.className.includes("bg-clothcare") ? "text-text-primary" : "text-text-dark"}`}
                  >
                    {card.quote}
                  </p>
                  <div className="mt-auto">
                    <p
                      className={`font-bold text-[10px] md:text-xs lg:text-sm tracking-tight ${card.className.includes("bg-clothcare") ? "text-text-primary" : "text-text-dark"}`}
                    >
                      {card.name}
                    </p>
                    <p
                      className={`text-[8px] md:text-[10px] lg:text-xs opacity-70 ${card.className.includes("bg-clothcare") ? "text-text-primary/80" : "text-text-muted"}`}
                    >
                      {card.role}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Center Typography & Text */}
        <div className="text-center max-w-4xl mx-auto mt-0 lg:mt-[-80px] relative z-30 px-4">
          <div className="inline-block bg-bg-accent/10 border border-orange-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="text-xs md:text-sm font-bold tracking-wide text-text-accent">
              Testimonials
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-text-dark mb-4 leading-tight lg:leading-[1.05]">
            Loved by hundreds <br className="hidden md:block" />
            <span className="text-text-accent/40 font-medium italic">
              of happy customers
            </span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 font-medium max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
            Join the elite group of professionals who trust our meticulous
            cleaning solutions to manage their wardrobes effortlessly.
          </p>

          <Link href="/about-us">
            <Button
              variant="primary"
              icon={ArrowRight}
              className="p-7 rounded-full"
              iconWrapperClassName="transition-all duration-300 group-hover:translate-x-1"
            >
              Read Success Stories
            </Button>
          </Link>
        </div>

        {/* Faded vertical decorative lines (Optional background detail) */}
        <div className="absolute inset-x-0 h-full top-0 hidden sm:flex justify-evenly pointer-events-none -z-20 opacity-20">
          <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="w-px h-full bg-linear-to-b from-transparent via-clothcare-primary/50 to-transparent"></div>
          <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
          <div className="w-px h-full bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;