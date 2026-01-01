'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Store, Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  // --- 1. SCROLL ANIMATION VALUES ---
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"])
  const navTop = useTransform(scrollY, [0, 100], ["0px", "24px"])
  const navBorderRadius = useTransform(scrollY, [0, 100], ["0px", "16px"])
  const navBackground = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(11, 13, 16, 0.9)"])
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.15)"])
  const navShadow = useTransform(scrollY, [0, 100], ["none", "0 10px 30px -10px rgba(0,0,0,0.5)"])

  // Colors
  const textColor = useTransform(scrollY, [0, 100], ["#000000", "#FFFFFF"])
  const outlineBorder = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0.2)", "rgba(255, 255, 255, 0.3)"])
  const toggleColor = useTransform(scrollY, [0, 100], ["#000000", "#FFFFFF"])

  // --- 2. MOBILE MENU VARIANTS ---
  const menuVars = {
    initial: { scaleY: 0.95, opacity: 0, height: 0 },
    animate: { 
      scaleY: 1, opacity: 1, height: "auto",
      transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] }
    },
    exit: { 
      scaleY: 0.95, opacity: 0, height: 0,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const linkVars = {
    initial: { opacity: 0, x: -10 },
    animate: (i) => ({
      opacity: 1, x: 0,
      transition: { delay: 0.1 + (i * 0.05) }
    })
  }

  return (
    <>
      <motion.nav
        style={{ 
          width: navWidth, 
          top: navTop, 
          borderRadius: navBorderRadius,
          backgroundColor: navBackground,
          border: `1px solid`, 
          borderColor: navBorder,
          boxShadow: navShadow
        }}
        className="fixed left-1/2 -translate-x-1/2 z-50 max-w-[1200px] backdrop-blur-md overflow-hidden transition-all duration-300"
      >
        
        {/* ================= Desktop Header ================= */}
        <div className="flex items-center justify-between px-6 md:px-8 py-4 relative z-20"> 
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md bg-clothcare-accent-gradient group-hover:scale-105 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <circle cx="12" cy="14" r="4" />
              </svg>
            </div>
            
            <motion.span 
              style={{ color: textColor }}
              className="font-display text-2xl font-bold"
            >
              Qlothcare<span className="text-text-accent">.</span>
            </motion.span>
          </Link>

          {/* ================================================== */}
          {/* MODERN HOVER ANIMATION (Slide-Up Effect)        */}
          {/* ================================================== */}
          <div className="hidden md:flex items-center gap-10 font-display font-semibold text-base">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group h-6 overflow-hidden flex flex-col items-center justify-start"
              >
                {/* 1. Default Text (Moves Up on Hover) */}
                <motion.span 
                  style={{ color: textColor }}
                  className="translate-y-0 group-hover:-translate-y-[150%] transition-transform duration-300 ease-in-out block"
                >
                  {link.name}
                </motion.span>
                
                {/* 2. Hover Text (Moves In from Bottom) */}
                <span 
                  className="absolute top-0 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-clothcare-primary block"
                >
                  {link.name}
                </span>

                {/* Optional: Small Dot Indictator */}
                <span className="absolute bottom-0 w-1 h-1 bg-clothcare-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/login">
              <motion.div
                style={{ 
                  color: textColor, 
                  borderColor: outlineBorder 
                }}
                className="px-6 py-2.5 rounded-xl border font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>

            <Link
              href="/franchise-inquiry"
              className="bg-bg-accent text-white px-6 py-2.5 rounded-xl font-semibold shadow-clothcareSoft hover:bg-clothcare-primaryDark transition-all flex items-center gap-2"
            >
              Franchise Inquiry <Store className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            style={{ color: toggleColor }}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* ================= Mobile Menu ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden border-t border-white/10 bg-clothcare-midnight/95 backdrop-blur-xl origin-top overflow-hidden"
            >
              <div className="px-6 py-6 space-y-6">
                <div className="flex flex-col gap-5 font-display font-semibold text-base text-white">
                  {NAV_LINKS.map((link, i) => (
                    <motion.div
                      key={link.name}
                      custom={i}
                      variants={linkVars}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="hover:text-text-accent transition block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-white/10 flex flex-col gap-4"
                >
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="w-full text-center px-6 py-3 rounded-xl border border-white/30 font-medium text-white hover:bg-white/10 transition"
                  >
                    Get Started
                  </Link>

                  <Link
                    href="/franchise-inquiry"
                    onClick={() => setOpen(false)}
                    className="w-full text-center bg-bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-clothcare-primaryDark transition"
                  >
                    Franchise Inquiry
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}