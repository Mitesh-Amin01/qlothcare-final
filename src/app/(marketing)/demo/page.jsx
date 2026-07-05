"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Calendar,
  Mail,
  Phone,
  User,
  Building2,
  Check,
  ArrowRight,
} from "lucide-react";
import Button from "@/components/ui/btn/Button";
import Input from "@/components/ui/input/Input";

/* ==========================================
   VALIDATION HELPERS
   ========================================== */
const NAME_REGEX = /^[A-Za-z][A-Za-z .'-]{1,49}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const digitsOnly = (str) => str.replace(/\D/g, "");

const normalizePhone = (str) => {
  let digits = digitsOnly(str);
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0"))
    digits = digits.slice(1);
  return digits;
};

const isValidName = (str) => NAME_REGEX.test(str.trim());
const isValidPhone = (str) => PHONE_REGEX.test(normalizePhone(str));
const isValidEmail = (str) => EMAIL_REGEX.test(str.trim());

/* ==========================================
   CUSTOM PHONE INPUT WITH LOCKED PREFIX
   ========================================== */
const PhoneInputWithPrefix = ({ value, onChange, error, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const phoneDigits = digitsOnly(value).replace(/^91/, "").slice(0, 10);
  const displayValue = phoneDigits;

  const handlePhoneChange = (e) => {
    let input = e.target.value;
    let digits = digitsOnly(input);

    if (digits.startsWith("91")) {
      digits = digits.slice(2);
    } else if (digits.startsWith("0")) {
      digits = digits.slice(1);
    }

    digits = digits.slice(0, 10);

    if (digits.length > 0) {
      const formatted = "91" + digits;
      onChange(formatted);
    } else {
      onChange("");
    }
  };

  const handleKeyDown = (e) => {
    const currentDigits = digitsOnly(displayValue);
    if (e.key === "Backspace" && currentDigits.length === 0) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="relative">
      <label className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
        <Phone size={14} className="text-text-accent" />
        Phone Number
        <span className="text-status-danger">*</span>
      </label>

      <div
        className={`flex items-center rounded-xl border transition-all duration-300 px-0 overflow-hidden ${
          error
            ? "border-status-danger bg-status-danger/5"
            : isFocused
              ? "border-clothcare-primary bg-clothcare-primary/5"
              : "border-clothcare-graySoft/30 bg-bg-white hover:border-clothcare-graySoft/50"
        }`}
      >
        <div className="flex items-center justify-center px-4 py-3 bg-clothcare-graySoft/10 border-r border-clothcare-graySoft/20 font-bold text-sm text-text-muted shrink-0">
          +91
        </div>

        <input
          type="tel"
          inputMode="numeric"
          value={displayValue}
          onChange={handlePhoneChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder || "98765 43210"}
          maxLength="10"
          className="flex-1 bg-transparent px-4 py-3 text-sm font-medium text-text-dark placeholder-text-muted/50 outline-none"
        />

        {displayValue && (
          <div className="px-3 py-3 text-xs font-bold text-text-muted/60 shrink-0">
            {displayValue.length}/10
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-status-danger font-medium">{error}</p>
      )}

      {!error && displayValue && (
        <p className="mt-2 text-xs text-status-success font-medium">
          ✓ Valid phone number
        </p>
      )}
    </div>
  );
};

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const update = (field) => (e) =>
    setFormData((f) => ({ ...f, [field]: e.target.value }));

  const validateForm = () => {
    const next = {};

    if (!formData.fullName.trim()) next.fullName = "Enter your full name";
    else if (!isValidName(formData.fullName))
      next.fullName = "Enter a valid name";

    if (!formData.email.trim()) next.email = "Enter your email address";
    else if (!isValidEmail(formData.email))
      next.email = "Enter a valid email address";

    if (!formData.phone.trim()) next.phone = "Enter a phone number";
    else if (!isValidPhone(formData.phone))
      next.phone = "Enter a valid 10-digit mobile";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  // ===================================
  // ERP Payload
  // ===================================

  const payload = {
    fullName: formData.fullName.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: normalizePhone(formData.phone),
    company: formData.company.trim() || null,
    preferredDate: formData.preferredDate || null,
    message: formData.message.trim() || null,
    submittedAt: new Date().toISOString(),
  };

  // ===================================
  // Email Payload (Pretty)
  // ===================================

  const emailPayload = {
    "Full Name": payload.fullName,
    Email: payload.email,
    Phone: payload.phone,
    Company: payload.company || "-",
    "Preferred Demo Date": payload.preferredDate || "Not Specified",
    Message: payload.message || "-",
    Submitted: new Date(payload.submittedAt).toLocaleString("en-IN"),
  };

  try {
    // ===================================
    // STEP 1 - Send Email
    // ===================================

    const emailResponse = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Demo Request",
        formData: emailPayload,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResult.success) {
      throw new Error(emailResult.message || "Failed to send email");
    }

    console.log("✅ Email sent successfully");

    // ===================================
    // STEP 2 - Submit to ERP
    // ===================================

    const erpResponse = await fetch(
      "https://erp-qlothcare.vercel.app/api/v1/demo-requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const erpResult = await erpResponse.json();

    console.log("ERP Response:", erpResult);

    if (!erpResponse.ok || !erpResult.success) {
      throw new Error(erpResult.message || "Failed to submit to ERP");
    }

    console.log("✅ Demo request submitted!", erpResult.data);

    setIsSubmitted(true);


    // Optional: Reset form
    // setFormData({
    //   fullName: "",
    //   email: "",
    //   phone: "",
    //   company: "",
    //   preferredDate: "",
    //   message: "",
    // });

  } catch (error) {
    console.error("Submission Error:", error);
    alert(error.message || "Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      preferredDate: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const formVariants = {
    hidden: { scale: 0.95, y: 50 },
    visible: {
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const headerVariants = {
    hidden: { y: 40, scale: 0.95 },
    visible: {
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen bg-bg-white font-sans pt-32 pb-24 relative z-10 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-clothcare-accent-gradient/5 rounded-b-[100px] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(228,111,51,0.07)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(60,66,73,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-clothcare-primary/10 rounded-full mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-text-accent">
            Book Your Session
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.1] tracking-tight mb-6">
            Book Your <span className="text-text-accent">Demo</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            Experience the future of premium fabric care. Schedule a
            personalized demo with our experts to see how Qlothcare can elevate
            your wardrobe management.
          </p>
        </motion.div>

        {/* Form Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="bg-bg-white rounded-3xl sm:rounded-[2.5rem] border border-clothcare-graySoft/30 shadow-clothcare overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-clothcare-accent-gradient" />

            {/* Split Layout */}
            <div className="flex flex-col lg:flex-row">
              {/* Left Side: Info & Benefits */}
              <div className="lg:w-2/5 bg-clothcare-darker text-text-primary p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-clothcare-primary/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-6 tracking-tight">
                    What to Expect
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-bold text-text-accent text-sm">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">
                          Personalized Consultation
                        </h4>
                        <p className="text-sm text-text-primary/70 leading-relaxed">
                          We assess your specific garment care needs and volume.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-bold text-text-accent text-sm">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">
                          Process Walkthrough
                        </h4>
                        <p className="text-sm text-text-primary/70 leading-relaxed">
                          Detailed tour of our 8-step quality control systems.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                        <span className="font-bold text-text-accent text-sm">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary mb-1">
                          Custom Pricing Plan
                        </h4>
                        <p className="text-sm text-text-primary/70 leading-relaxed">
                          Tailored enterprise or personal pricing
                          recommendations.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                  <p className="text-sm text-text-primary/60 mb-2">
                    Need immediate assistance?
                  </p>
                  <p className="font-bold tracking-wider">
                    contact@qlothcare.com
                  </p>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="lg:w-3/5 p-8 sm:p-10 lg:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="w-16 h-16 bg-status-success/10 text-status-success rounded-full flex items-center justify-center mb-6"
                    >
                      <Check size={32} />
                    </motion.div>
                    <h3 className="text-2xl sm:text-3xl font-black text-text-dark mb-3 tracking-tight">
                      Demo Request Sent!
                    </h3>
                    <p className="text-text-muted font-medium leading-relaxed max-w-sm mb-8">
                      Thank you for your interest. One of our specialists will
                      be in touch within 24 hours to confirm your demo time.
                    </p>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleReset}
                      className="rounded-xl"
                    >
                      Submit Another Request
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Input
                        label="Full Name"
                        icon={User}
                        type="text"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={update("fullName")}
                        error={errors.fullName}
                        required
                      />

                      <Input
                        label="Email Address"
                        icon={Mail}
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={update("email")}
                        error={errors.email}
                        required
                      />
                      <Input 
                        label="Phone Number"
                        required="true"
                        type="phone"
                         placeholder="9876543210"
                          value={formData.phone}
                          error={errors.phone}
                          onChange={update("phone")}
                          
                      />

                     
                      

                      <Input
                        label="Company / Organization"
                        icon={Building2}
                        type="text"
                        placeholder="Optional"
                        value={formData.company}
                        onChange={update("company")}
                      />
                    </div>

                    <Input
                      label="Preferred Date"
                      icon={Calendar}
                      type="date"
                      value={formData.preferredDate}
                      onChange={update("preferredDate")}
                    />

                    <div>
                      <label className="mb-2 text-xs font-bold text-text-muted uppercase tracking-wider block">
                        How can we help you?
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={update("message")}
                        placeholder="Tell us a little bit about your garment care needs..."
                        className="w-full px-4 py-3.5 rounded-xl border border-clothcare-graySoft/30 bg-bg-white text-text-dark placeholder-text-muted/50 focus:outline-none focus:ring-2 focus:ring-clothcare-primary/20 focus:border-clothcare-primary transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      icon={!isSubmitting ? ArrowRight : undefined}
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      className="w-full rounded-xl justify-center mt-6"
                    >
                      {isSubmitting ? "Submitting..." : "Request Demo"}
                    </Button>

                    <p className="text-xs text-text-muted text-center">
                      We'll never spam you. See our Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
