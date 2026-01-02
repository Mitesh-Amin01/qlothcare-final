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

  /* ---------------- COLORS / GLASS TRANSFORMS ---------------- */
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255,255,255,0.55)', 'rgba(11,13,16,0.9)']
  )

  const navBorder = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255,255,255,0.35)', 'rgba(255,255,255,0.15)']
  )

  const navShadow = useTransform(
    scrollY,
    [0, 80],
    ['0 4px 20px rgba(0,0,0,0.08)', '0 16px 40px -12px rgba(0,0,0,0.6)']
  )

  const blur = useTransform(scrollY, [0, 80], ['blur(12px)', 'blur(16px)'])
  const textColor = useTransform(scrollY, [0, 80], ['#0B0F0E', '#FFFFFF'])
  const outlineBorder = useTransform(scrollY, [0, 80], ['rgba(0,0,0,0.2)', 'rgba(255,255,255,0.3)'])
  const toggleColor = useTransform(scrollY, [0, 80], ['#0B0F0E', '#FFFFFF'])

  /* ---------------- ENTRY ANIMATION (ON LOAD) ---------------- */
  const navbarEntry = {
    initial: { y: -100, x: '-50%', opacity: 0 },
    animate: { 
      y: 0, 
      x: '-50%', 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  }

  /* ---------------- MOBILE ANIMATIONS ---------------- */
  const menuVars = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto', transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  }

  const linkVars = {
    initial: { opacity: 0, y: 10 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.05, ease: 'easeOut' },
    }),
  }

  return (
    <motion.nav
      variants={navbarEntry}
      initial="initial"
      animate="animate"
      style={{
        backgroundColor: navBg,
        border: '1px solid',
        borderColor: navBorder,
        boxShadow: navShadow,
        backdropFilter: blur,
      }}
      className="fixed top-4 left-1/2 z-50 w-[96%] max-w-300 rounded-xl overflow-hidden"
    >
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-clothcare-accent-gradient text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <circle cx="12" cy="14" r="4" />
            </svg>
          </div>
          <motion.span style={{ color: textColor }} className="font-display text-2xl font-bold">
            Qlothcare<span className="text-text-accent">.</span>
          </motion.span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10 font-display font-semibold">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="relative group h-6 overflow-hidden">
              <motion.span
                style={{ color: textColor }}
                className="block transition-transform duration-300 group-hover:-translate-y-[150%]"
              >
                {link.name}
              </motion.span>
              <span className="absolute top-0 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 text-clothcare-primary">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="/login">
            <motion.div
              style={{ color: textColor, borderColor: outlineBorder }}
              className="px-6 py-2.5 rounded-xl border font-medium text-sm hover:bg-white/5 transition-colors"
            >
              Get Started <ArrowRight className="inline w-4 h-4 ml-1" />
            </motion.div>
          </Link>
          <Link href="/franchise-inquiry" className="bg-bg-accent px-6 py-2.5 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity">
            Franchise Inquiry <Store className="inline w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          style={{ color: toggleColor }}
          className="md:hidden p-2"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden bg-black/95 text-white border-t border-white/10 backdrop-blur-xl"
          >
            <div className="px-6 pt-6 pb-10 space-y-8">
              {/* Links */}
              <div className="space-y-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.name} custom={i} variants={linkVars}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-lg font-semibold hover:text-text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Buttons - Kept as Buttons */}
              <motion.div variants={linkVars} custom={NAV_LINKS.length} className="flex flex-col gap-4 pt-4 border-t border-white/10">
                <Link href="/login" onClick={() => setOpen(false)}>
                  <div className="w-full text-center px-6 py-4 rounded-xl border border-white/20 font-medium bg-white/5">
                    Get Started <ArrowRight className="inline w-4 h-4 ml-2" />
                  </div>
                </Link>
                <Link href="/franchise-inquiry" onClick={() => setOpen(false)}>
                  <div className="w-full text-center px-6 py-4 rounded-xl bg-bg-accent font-bold text-white shadow-lg">
                    Franchise Inquiry <Store className="inline w-4 h-4 ml-2" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}