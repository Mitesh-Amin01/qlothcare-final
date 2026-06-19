// "use client";

// import React, { useState, useRef } from "react";
// import { ArrowRight, RefreshCcw } from "lucide-react";
// import { motion } from "motion/react";
// import Link from "next/link";
// import Button from "../ui/btn/Button";

// export default function HeroSection() {
//   const [introFinished, setIntroFinished] = useState(false);
//   const videoRef = useRef(null);

//   // Called when video finishes playing
//   const handleVideoEnd = () => {
//     setIntroFinished(true);
//   };

//   // Function to replay the experience
//   const handleReplay = () => {
//     setIntroFinished(false);
//     if (videoRef.current) {
//       videoRef.current.currentTime = 0;
//       videoRef.current.play();
//     }
//   };

//   return (
//     // Changed h-screen to min-h-dvh for better mobile browser support (address bar handling)
//     <section className="relative w-full min-h-dvh bg-clothcare-midnight overflow-hidden selection:bg-clothcare-primary selection:text-text-primary flex flex-col">
//       {/* =======================================
//           LAYER 1: BACKGROUND VIDEO
//           (Stays visible as the base layer)
//       ======================================= */}
//       <div className="absolute inset-0 z-0">
//         <video
//           ref={videoRef}
//           muted
//           autoPlay
//           playsInline
//           onEnded={handleVideoEnd}
//           className="w-full h-full object-cover"
//         >
//           {/* Ensure this path is correct based on your public folder */}
//           <source src="/video/intro.mp4" type="video/mp4" />
//         </video>

//         {/* SMART OVERLAY */}
//         <motion.div
//           className="absolute inset-0 bg-linear-to-r from-clothcare-black/90 via-clothcare-black/60 to-clothcare-black/20"
//           initial={{ opacity: 0 }}
//           animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 1.5 }}
//         />
//       </div>

//       {/* =======================================
//           LAYER 2: HERO CONTENT
//       ======================================= */}
//       <div className="relative z-10 w-full grow flex flex-col justify-center py-12 lg:py-0  ">
//         {/* Adjusted padding and gap for responsiveness */}
//         <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-0 items-center min-h-[calc(100vh-100px)]">
//           {/* --- LEFT SIDE: MASSIVE HEADLINE --- */}
//           <div className="xl:col-span-7 flex flex-col justify-center text-center xl:text-left">
//             {introFinished && (
//               <motion.div
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{
//                   duration: 1,
//                   ease: [0.16, 1, 0.3, 1],
//                   delay: 0.2,
//                 }}
//                 className="text-left"
//               >
//                 {/* Responsive Text Sizes: text-4xl on mobile -> text-8xl on desktop */}
//                 <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-text-primary leading-[1.1] sm:leading-[0.95] tracking-tight drop-shadow-2xl">
//                   Your Clothes
//                   <br />
//                   <span className="block pl-1 lg:pl-0 text-text-primary/90">
//                     Deserve the
//                   </span>
//                   {/* Outline / Stroke Text Effect */}
//                   <span
//                     className="relative block text-transparent bg-clip-text bg-linear-to-r  from-clothcare-graySoft/40
// via-clothcare-white/80
// to-clothcare-graySoft/0 font-bold my-2 sm:my-3 lg:my-5"
//                     style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
//                   >
//                     BEST CARE.
//                   </span>
//                   Delivered.
//                 </h1>
//               </motion.div>
//             )}
//           </div>

//           {/* --- RIGHT SIDE: SUBTEXT & BUTTONS --- */}
//           {/* Added mt-4 for mobile spacing, lg:mt-20 for desktop alignment */}
//           <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-6 sm:space-y-8 mt-4 lg:mt-20">
//             {introFinished && (
//               <>
//                 <motion.p
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{
//                     duration: 1,
//                     ease: [0.16, 1, 0.3, 1],
//                     delay: 0.6,
//                   }}
//                   className="text-base sm:text-lg md:text-xl text-text-primary/80 font-light leading-relaxed max-w-lg drop-shadow-md"
//                 >
//                   Experience India's most trusted laundry & dry cleaning service
//                   with free pickup & delivery at your doorstep.
//                   <br className="hidden md:block" />
//                   Premium care, simplified for you.
//                 </motion.p>

//                 <motion.div
//                   initial={{ x: 50, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.8,
//                     ease: [0.16, 1, 0.3, 1],
//                     delay: 0.9,
//                   }}
//                   // Stack buttons vertically on mobile (flex-col), row on sm+ devices
//                   className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
//                 >
//                   {/* Primary CTA */}
//                   <Link href="/services">
//                     <Button
//                       variant="special"
//                       size="lg"
//                       icon={ArrowRight}
//                       iconSize={22}
//                       iconWrapperClassName="bg-bg-white text-text-accent w-10 h-10 ml-2 transition-all duration-300 group-hover:rotate-45"
//                       className="p-8 "
//                     >
//                       Explore Services
//                     </Button>
//                   </Link>

//                   {/* Secondary CTA */}
//                   <Button
//                     onClick={handleReplay}
//                     variant="outline"
//                     icon={RefreshCcw}
//                     iconPosition="left"
//                     iconWrapperClassName="transition-all duration-700 group-hover:-rotate-180"
//                     className="px-9 py-7 text-text-primary border border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full"
//                   >
//                     Replay Intro
//                   </Button>
//                 </motion.div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Button from "../ui/btn/Button";

export default function HeroSection() {
  const [introFinished, setIntroFinished] = useState(false);
  const videoRef = useRef(null);

  // Called when video finishes playing
  const handleVideoEnd = () => {
    setIntroFinished(true);
  };

  // Function to replay the experience
  const handleReplay = () => {
    setIntroFinished(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    // Changed h-screen to min-h-dvh for better mobile browser support (address bar handling)
    <section className="relative w-full min-h-dvh bg-clothcare-midnight overflow-hidden selection:bg-clothcare-primary selection:text-text-primary flex flex-col">
      {/* =======================================
          LAYER 1: BACKGROUND VIDEO
          (Stays visible as the base layer)
      ======================================= */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        >
          {/* Ensure this path is correct based on your public folder */}
          <source src="/video/intro.mp4" type="video/mp4" />
        </video>

        {/* SMART OVERLAY — deepened slightly for premium contrast/legibility */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-clothcare-black/95 via-clothcare-black/70 to-clothcare-black/30"
          initial={{ opacity: 0 }}
          animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
        />

        {/* Fine grain vignette at the edges — keeps focus centered, reads as considered rather than a flat tint */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_45%,transparent_0%,rgba(11,13,16,0.55)_100%)]"
          initial={{ opacity: 0 }}
          animate={introFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.8 }}
        />
      </div>

      {/* =======================================
          LAYER 2: HERO CONTENT
      ======================================= */}
      <div className="relative z-10 w-full grow flex flex-col justify-center py-12 lg:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 xl:grid-cols-12 gap-0 xl:gap-0 items-center min-h-[calc(100vh-100px)]">
          {/* --- LEFT SIDE: HEADLINE --- */}
          <div className="xl:col-span-7 flex flex-col justify-center text-center xl:text-left">
            {introFinished && (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
                className="text-left"
              >
                {/* Garment-tag eyebrow — signature element, ties to the brand's
                    service marks rather than a decorative numbering device */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="inline-flex items-center gap-2.5 mb-6 sm:mb-8 px-4 py-2 rounded-full border border-clothcare-graySoft/25 bg-white/[0.03] backdrop-blur-sm"
                >
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-clothcare-graySoft/90 uppercase">
                    Pickup &nbsp;·&nbsp; Clean &nbsp;·&nbsp; Press &nbsp;·&nbsp; Deliver
                  </span>
                </motion.div>

                {/* Responsive Text Sizes: text-4xl on mobile -> text-8xl on desktop */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-text-primary leading-[1.08] tracking-tight">
                  Care, pressed
                  <br />
                  <span className="text-text-primary">into every</span>{" "}
                  <span className="relative inline-block">
                    detail
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 -bottom-1 sm:-bottom-2 h-[3px] sm:h-[4px] w-full bg-clothcare-primary origin-left rounded-full"
                    />
                  </span>
                  .
                </h1>
              </motion.div>
            )}
          </div>

          {/* --- RIGHT SIDE: SUBTEXT & BUTTONS --- */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-start space-y-7 sm:space-y-9 mt-6 lg:mt-20">
            {introFinished && (
              <>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.6,
                  }}
                  className="space-y-5"
                >
                  <p className="text-base sm:text-lg md:text-xl text-text-primary/75 font-light leading-relaxed max-w-lg">
                    A dedicated specialist inspects, treats, and presses every
                    garment by hand — picked up and returned to your door,
                    on a schedule you set.
                  </p>

                  {/* Concrete, specific trust line — replaces generic "most trusted" copy */}
                  <div className="flex items-center gap-5 sm:gap-7 pt-1">
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-display font-semibold text-text-primary">
                        24hr
                      </span>
                      <span className="text-[11px] uppercase tracking-widest text-clothcare-graySoft/70 font-medium mt-0.5">
                        Standard turnaround
                      </span>
                    </div>
                    <div className="w-px h-9 bg-clothcare-graySoft/20" />
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-display font-semibold text-text-primary">
                        Free
                      </span>
                      <span className="text-[11px] uppercase tracking-widest text-clothcare-graySoft/70 font-medium mt-0.5">
                        Pickup &amp; delivery
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.9,
                  }}
                  // Stack buttons vertically on mobile (flex-col), row on sm+ devices
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto"
                >
                  {/* Primary CTA */}
                  <Link href="/services">
                    <Button
                      variant="special"
                      size="lg"
                      icon={ArrowRight}
                      iconSize={22}
                      iconWrapperClassName="bg-bg-white text-text-accent w-10 h-10 ml-2 transition-all duration-300 group-hover:rotate-45"
                      className="p-8"
                    >
                      Explore Services
                    </Button>
                  </Link>

                  {/* Secondary CTA */}
                  <Button
                    onClick={handleReplay}
                    variant="outline"
                    icon={RefreshCcw}
                    iconPosition="left"
                    iconWrapperClassName="transition-all duration-700 group-hover:-rotate-180"
                    className="px-9 py-7 text-text-primary border border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full"
                  >
                    Replay Intro
                  </Button>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}