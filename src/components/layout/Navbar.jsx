'use client'

import { ArrowRight, Store, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'How it Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="mx-auto w-full max-w-375 rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md shadow-clothcareSoft transition-all hover:bg-white/90">

        {/* ================= Desktop / Header ================= */}
        <div className="flex items-center justify-between px-8 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-clothcare-primary-gradient rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <circle cx="12" cy="14" r="4" />
              </svg>
            </div>
            <span className="font-display text-2xl font-bold text-text-primary">
              Qlothcare<span className="text-clothcare-teal">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 font-display font-semibold text-base text-text-primary">
            {NAV_LINKS.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="relative transition-colors hover:text-clothcare-teal after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-clothcare-teal after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/login"
              className="px-6 py-2.5 rounded-xl border border-gray-300 font-medium text-sm text-gray-800 hover:border-clothcare-teal hover:text-clothcare-teal transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/franchise-inquiry"
              className="bg-clothcare-navy text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:bg-clothcare-teal transition-all flex items-center gap-2"
            >
              Franchise Inquiry <Store className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ================= Mobile Menu ================= */}
        {open && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg rounded-b-2xl px-6 py-6 space-y-6 animate-in slide-in-from-top-2">
            
            <div className="flex flex-col gap-5 font-display font-semibold text-base text-text-primary">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-clothcare-teal transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-col gap-4">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-full text-center px-6 py-3 rounded-xl border border-gray-300 font-medium hover:border-clothcare-teal hover:text-clothcare-teal transition"
              >
                Get Started
              </Link>

              <Link
                href="/franchise-inquiry"
                onClick={() => setOpen(false)}
                className="w-full text-center bg-clothcare-navy text-white px-6 py-3 rounded-xl font-semibold hover:bg-clothcare-teal transition"
              >
                Franchise Inquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
