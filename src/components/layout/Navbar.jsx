"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Store, Menu, X } from "lucide-react";
import Button from "../ui/btn/Button";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------------- COLORS / GLASS TRANSFORMS ---------------- */
  const navBg = useTransform(scrollY, [0, 80], ["rgba(255, 255, 255, 0.55)", "rgba(11,13,16,0.95)"]);
  const navBorder = useTransform(scrollY, [0, 80], ["rgba(255, 255, 255, 0.35)", "rgba(255,255,255,0.15)"]);
  const navShadow = useTransform(scrollY, [0, 80], ["rgba(0, 0, 0, 0.08) 0px 4px 20px", "0 16px 40px -12px rgba(0,0,0,0.6)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(12px)", "blur(16px)"]);
  const textColor = useTransform(scrollY, [0, 80], ["#2F343A", "#FFFFFF"]);

  /* ---------------- ANIMATIONS ---------------- */
  const navbarEntry = {
    initial: { y: -100, x: "-50%", opacity: 0 },
    animate: { y: 0, x: "-50%", opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const menuVars = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  const linkVars = {
    initial: { opacity: 0, y: 10 },
    animate: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05, ease: "easeOut" } }),
  };

  return (
    <motion.nav
      variants={navbarEntry}
      initial={mounted ? "initial" : false}
      animate="animate"
      style={{
        backgroundColor: navBg,
        border: "1px solid",
        borderColor: navBorder,
        boxShadow: navShadow,
        backdropFilter: blur,
      }}
      className="fixed top-2 left-1/2 z-50 w-[90%] max-w-full rounded-xl overflow-hidden"
    >
      <div className="flex items-center justify-between px-2 md:px-8 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo/logo.png" alt="Qlothcare Logo" width={40} height={40} className="rounded-xl object-contain" priority />
          <motion.span style={{ color: textColor }} className="font-display text-2xl font-bold">
            Qlothcare<span className="text-text-accent">.</span>
          </motion.span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-8 font-display font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.name} href={link.href} className="relative group h-6 overflow-hidden">
                <motion.span
                  style={{ color: isActive ? "#e87722" : textColor }}
                  className="block transition-transform duration-300 group-hover:-translate-y-[150%]"
                >
                  {link.name}
                </motion.span>
                <span className="absolute top-0 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 text-text-accent">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex items-center gap-5">
          <Link href="/contact-us"><Button variant="outline" icon={ArrowRight} iconPosition="right" className="px-6 py-2.5 rounded-xl text-bg-dark">Get Started</Button></Link>
          <Link href="/franchise-inquiry"><Button variant="primary" icon={Store} iconPosition="right" className="p-6 rounded-full">Franchise Inquiry</Button></Link>
        </div>

        {/* Mobile Toggle */}
        <motion.button onClick={() => setOpen(!open)} style={{ color: "#FFFFFF" }} className="xl:hidden p-2">
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div variants={menuVars} initial="initial" animate="animate" exit="exit" className="xl:hidden bg-clothcare-midnight/95 border-t border-white/10">
            <div className="px-6 pt-6 pb-10 space-y-8">
              <div className="space-y-6">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div key={link.name} custom={i} variants={linkVars}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`block text-lg font-semibold transition-colors ${isActive ? "text-[#e87722]" : "text-white hover:text-text-accent"}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div variants={linkVars} custom={NAV_LINKS.length} className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link href="/contact-us" onClick={() => setOpen(false)}><Button variant="outline" className="w-full rounded-xl">Get Started</Button></Link>
                <Link href="/franchise-inquiry" onClick={() => setOpen(false)}><Button variant="primary" className="w-full rounded-xl">Franchise Inquiry</Button></Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}



// "use client";

// import React, { useState, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowRight, Store, Menu, X } from "lucide-react";
// import Button from "../ui/btn/Button";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useMotionValueEvent,
// } from "motion/react";

// const NAV_LINKS = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services" },
//   { name: "Pricing", href: "/pricing" },
//   { name: "About Us", href: "/about-us" },
//   { name: "Contact Us", href: "/contact-us" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [hidden, setHidden] = useState(false);
//   const lastY = useRef(0);

//   const { scrollY } = useScroll();

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   /* ---------------- HIDE ON SCROLL-DOWN, REVEAL ON SCROLL-UP ----------------
//      Always visible near the top of the page (under ~120px), regardless of
//      direction — matches the "always show at top" requirement. */
//   useMotionValueEvent(scrollY, "change", (y) => {
//     const previous = lastY.current;
//     const goingDown = y > previous;

//     if (y < 120) {
//       setHidden(false);
//     } else if (goingDown && y > previous + 2) {
//       setHidden(true);
//       if (open) setOpen(false);
//     } else if (!goingDown && y < previous - 2) {
//       setHidden(false);
//     }
//     lastY.current = y;
//   });

//   /* ---------------- QUIET SCROLL TRANSFORMS ----------------
//      No glass-blur theatrics. Transparent over the hero, a flat hairline
//      border and a near-black fill once the page has scrolled past it —
//      a single, deliberate state change rather than a continuous morph. */
//   const navBg = useTransform(
//     scrollY,
//     [0, 90],
//     ["rgba(11,13,16,0)", "rgba(11,13,16,0.97)"],
//   );
//   const navBorder = useTransform(
//     scrollY,
//     [0, 90],
//     ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"],
//   );

//   /* ---------------- ENTRY / HIDE ANIMATION ---------------- */
//   const navbarVariants = {
//     initial: { y: -80, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//     },
//     hidden: {
//       y: "-100%",
//       opacity: 1,
//       transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
//     },
//   };

//   /* ---------------- MOBILE MENU ---------------- */
//   const menuVars = {
//     initial: { opacity: 0, height: 0 },
//     animate: {
//       opacity: 1,
//       height: "auto",
//       transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
//     },
//     exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
//   };

//   const linkVars = {
//     initial: { opacity: 0, y: 8 },
//     animate: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: 0.08 + i * 0.04, ease: "easeOut" },
//     }),
//   };

//   return (
//     <motion.nav
//       variants={navbarVariants}
//       initial={mounted ? "initial" : false}
//       animate={mounted ? (hidden ? "hidden" : "visible") : "visible"}
//       style={{
//         backgroundColor: navBg,
//         borderBottom: "1px solid",
//         borderColor: navBorder,
//       }}
//       className="fixed top-0 left-0 z-50 w-full"
//     >
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-[68px] sm:h-[76px] max-w-[1600px] mx-auto">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <Image
//             src="/logo/logo.png"
//             alt="Qlothcare Logo"
//             width={34}
//             height={34}
//             className="object-contain"
//             priority
//           />
//           <span className="font-display text-lg sm:text-xl font-medium text-text-primary tracking-tight">
//             Qlothcare<span className="text-clothcare-primary">.</span>
//           </span>
//         </Link>

//         {/* Desktop links — quiet underline-on-hover instead of slide-swap */}
//         <div className="hidden xl:flex items-center gap-9 font-display text-[15px]">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="relative text-text-primary/70 hover:text-text-primary transition-colors duration-300 py-1"
//             >
//               {link.name}
//               <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-clothcare-primary transition-all duration-300 group-hover:w-full hover:w-full" />
//             </Link>
//           ))}
//         </div>

//         <div className="hidden xl:flex items-center gap-6">
//           {/* Quiet text-style link — not competing with the primary CTA */}
//           <Link
//             href="/login"
//             className="text-[15px] font-medium text-text-primary/70 hover:text-text-primary transition-colors duration-300"
//           >
//             Get Started
//           </Link>

//           {/* The one filled, loud element in the bar */}
//           <Link href="/franchise-inquiry">
//             <Button
//               variant="primary"
//               icon={Store}
//               iconPosition="right"
//               iconSize={16}
//               className="px-5 py-2.5 rounded-full text-sm"
//             >
//               Franchise Inquiry
//             </Button>
//           </Link>
//         </div>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="xl:hidden p-2 text-text-primary"
//           aria-label={open ? "Close menu" : "Open menu"}
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             variants={menuVars}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="xl:hidden bg-clothcare-midnight/98 text-text-primary border-t border-white/[0.06] overflow-hidden"
//           >
//             <div className="px-6 pt-6 pb-10 space-y-8">
//               {/* Links */}
//               <div className="space-y-5">
//                 {NAV_LINKS.map((link, i) => (
//                   <motion.div key={link.name} custom={i} variants={linkVars}>
//                     <Link
//                       href={link.href}
//                       onClick={() => setOpen(false)}
//                       className="block text-lg font-medium text-text-primary/80 hover:text-text-primary transition-colors"
//                     >
//                       {link.name}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Mobile actions */}
//               <motion.div
//                 variants={linkVars}
//                 custom={NAV_LINKS.length}
//                 className="flex flex-col gap-4 pt-6 border-t border-white/[0.08]"
//               >
//                 <Link
//                   href="/login"
//                   onClick={() => setOpen(false)}
//                   className="text-base font-medium text-text-primary/70"
//                 >
//                   Get Started
//                 </Link>
//                 <Link href="/franchise-inquiry" onClick={() => setOpen(false)}>
//                   <Button
//                     variant="primary"
//                     icon={ArrowRight}
//                     iconPosition="right"
//                     className="px-6 py-3 w-full rounded-xl"
//                   >
//                     Franchise Inquiry
//                   </Button>
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
