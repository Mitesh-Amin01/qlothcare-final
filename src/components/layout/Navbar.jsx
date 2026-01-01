'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Store, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Mobile Menu Dropdown Variants
  const menuVars = {
    initial: { 
      scaleY: 0.95,
      opacity: 0,
      height: 0 
    },
    animate: { 
      scaleY: 1, 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3, 
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: { 
      scaleY: 0.95,
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  }

  // Staggered animation for links
  const linkVars = {
    initial: { opacity: 0, x: -10 },
    animate: (i) => ({
      opacity: 1, 
      x: 0,
      transition: { delay: 0.1 + (i * 0.05) }
    })
  }

  // Navbar Entrance Animation (Lag-Free)
  const navContainerVars = {
    hidden: { y: -20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 // Slight delay to let the page paint first
      }
    }
  }

  return (
    // 1. Wrapped main fixed container in motion.div
    <motion.div 
      variants={navContainerVars}
      initial="hidden"
      animate="show"
      className="fixed top-6 left-0 right-0 z-50 px-4"
    >
      <nav className="mx-auto w-full max-w-375 rounded-lg border border-white/30 bg-white/80 backdrop-blur-md shadow-clothcare transition-all hover:bg-white/95 overflow-hidden"> 
        
        {/* ================= Desktop Header ================= */}
        <div className="flex items-center justify-between px-8 py-4 relative z-20 bg-transparent"> 
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-clothcare-accent-gradient rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <circle cx="12" cy="14" r="4" />
              </svg>
            </div>
            <span className="font-display text-2xl font-bold text-text-dark">
              Qlothcare<span className="text-text-accent">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 font-display font-semibold text-base text-text-dark">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="relative transition-colors hover:text-text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-text-accent after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/login"
              className="px-6 py-2.5 rounded-xl border border-border-soft font-medium text-sm text-text-dark hover:border-text-accent hover:text-text-accent transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/franchise-inquiry"
              className="bg-bg-accent text-white px-6 py-2.5 rounded-xl font-semibold shadow-clothcareSoft hover:bg-clothcare-primaryDark transition-all flex items-center gap-2"
            >
              Franchise Inquiry <Store className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-bg-soft transition"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="md:hidden border-t border-border-soft bg-white/50 backdrop-blur-lg origin-top overflow-hidden"
            >
              <div className="px-6 py-6 space-y-6">
                <div className="flex flex-col gap-5 font-display font-semibold text-base text-text-dark">
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
                  className="pt-4 border-t border-border-soft flex flex-col gap-4"
                >
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="w-full text-center px-6 py-3 rounded-xl border border-border-soft font-medium text-text-dark hover:border-text-accent hover:text-text-accent transition"
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
      </nav>
    </motion.div>
  )
}