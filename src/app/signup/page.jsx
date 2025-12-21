'use client'
import React, { useState } from 'react'
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Chrome,
  Command
} from 'lucide-react'
import Image from 'next/image'
import heroImage from '@/assets/pages/landing_image/heroImage.png'

/* ==========================================
   COMPONENT: SIGNUP PAGE
   ========================================== */
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSignup = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen w-full flex bg-white">

      {/* ==========================================
          LEFT SIDE: VISUAL STORYTELLING
          ========================================== */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-clothcare-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="ClothCare Facility"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clothcare-navy via-clothcare-navy/80 to-transparent"></div>
        </div>

        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-clothcare-teal/20 rounded-full blur-[100px] animate-pulse"></div>

        <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">

          {/* Brand */}
          <div className="flex items-center gap-2 text-2xl font-display font-bold tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-clothcare-teal">
              <Sparkles size={16} fill="currentColor" />
            </div>
            ClothCare.
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-lg font-medium leading-relaxed mb-6">
              "Signup took less than a minute. Managing my laundry has never been this smooth and professional."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <p className="font-bold text-sm">Amit Patel</p>
                <p className="text-xs text-white/60">Premium Member</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ==========================================
          RIGHT SIDE: SIGNUP FORM
          ========================================== */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative bg-white">
        <div className="lg:hidden absolute top-[-10%] right-[-10%] w-64 h-64 bg-clothcare-teal/10 rounded-full blur-[60px]"></div>

        <div className="w-full max-w-[420px] relative z-10">

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-light border border-border-light text-text-muted text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-clothcare-teal"></span>
              Create Account
            </div>
            <h1 className="text-4xl font-display font-bold text-clothcare-navy mb-3">
              Get started
            </h1>
            <p className="text-text-muted">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 py-3 px-4 border border-border-light rounded-xl font-bold text-sm text-clothcare-navy hover:bg-bg-light hover:border-clothcare-teal/50 transition-all group">
              <Chrome size={18} className="text-text-muted group-hover:text-clothcare-navy" />
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 border border-border-light rounded-xl font-bold text-sm text-clothcare-navy hover:bg-bg-light hover:border-clothcare-teal/50 transition-all group">
              <Command size={18} className="text-text-muted group-hover:text-clothcare-navy" />
              Apple
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-light"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-text-muted font-bold tracking-wider">
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">

            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-clothcare-navy uppercase tracking-wider ml-1">
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-clothcare-teal" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-bg-light border border-border-light rounded-xl py-3.5 pl-12 pr-4 font-medium focus:ring-2 focus:ring-clothcare-teal/20 focus:border-clothcare-teal outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-clothcare-navy uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-clothcare-teal" />
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-bg-light border border-border-light rounded-xl py-3.5 pl-12 pr-4 font-medium focus:ring-2 focus:ring-clothcare-teal/20 focus:border-clothcare-teal outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-clothcare-navy uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-clothcare-teal" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-bg-light border border-border-light rounded-xl py-3.5 pl-12 pr-12 font-medium focus:ring-2 focus:ring-clothcare-teal/20 focus:border-clothcare-teal outline-none"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-clothcare-navy text-white font-bold py-4 rounded-xl shadow-clothcare hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Create Account
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center mt-8 text-text-muted text-sm">
            Already have an account?{' '}
            <a href="/login" className="font-bold text-clothcare-teal hover:underline">
              Sign in
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default SignupPage
