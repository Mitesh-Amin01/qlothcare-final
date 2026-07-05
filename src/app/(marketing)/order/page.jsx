"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { User, Mail, Phone, MapPin, Check, ArrowRight } from "lucide-react";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/btn/Button";
import { useRouter } from "next/navigation";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
};

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

export default function OrderForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validateForm = () => {
    const next = {};

    if (!form.fullName.trim()) next.fullName = "Enter your full name";
    else if (!isValidName(form.fullName)) next.fullName = "Enter a valid name";

    if (!form.phone.trim()) next.phone = "Enter a phone number";
    else if (!isValidPhone(form.phone))
      next.phone = "Enter a valid 10-digit mobile";

    if (form.email.trim() && !isValidEmail(form.email)) {
      next.email = "Enter a valid email address";
    }

    if (!form.city.trim()) next.city = "Enter your city";
    else if (form.city.trim().length < 2) next.city = "Enter a valid city name";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  const payload = {
    fullName: form.fullName.trim(),
    email: form.email.trim() || null,
    phone: normalizePhone(form.phone),
    city: form.city.trim(),
    submittedAt: new Date().toISOString("en-IN"),
  };

  try {
    // ===========================
    // STEP 1: Send Email
    // ===========================
    const emailResponse = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Order Form",
        formData: payload,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResult.success) {
      throw new Error(emailResult.message || "Failed to send email");
    }

    console.log("✅ Email sent successfully");

    // ===========================
    // STEP 2: Send to ERP
    // ===========================
    const erpResponse = await fetch(
      "https://erp-qlothcare.vercel.app/api/v1/order-inquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const erpResult = await erpResponse.json();

    if (!erpResult.success) {
      throw new Error(erpResult.message || "Failed to submit to ERP");
    }

    console.log("✅ ERP submitted successfully");

    setIsSuccess(true);

    // Optional: Reset form after successful submission
    // setForm({
    //   fullName: "",
    //   email: "",
    //   phone: "",
    //   city: "",
    // });

  } catch (error) {
    console.error("Submission Error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="bg-bg-white py-12 sm:py-24 lg:py-32 relative z-10 overflow-hidden mt-10">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex justify-center">
        {isSuccess ? (
          // Success State
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 mx-auto bg-status-success/10 text-status-success rounded-full flex items-center justify-center mb-6"
            >
              <Check size={32} />
            </motion.div>

            <h2 className="text-3xl font-black text-text-dark mb-3 tracking-tight">
              Thank You!
            </h2>

            <p className="text-text-muted font-medium mb-8 text-base leading-relaxed">
              Your order has been received. We'll contact you at{" "}
              <span className="font-bold text-text-dark">{form.phone}</span>{" "}
              soon with details.
            </p>

            <Button
              type="button"
              variant="primary"
              onClick={() => {
                setForm(initialState);
                setIsSuccess(false);
              }}
              className="rounded-xl mx-auto"
            >
              Submit Another Order
            </Button>
          </motion.div>
        ) : (
          // Form State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className=" max-w-lg "
          >
            <div className="bg-bg-white border border-clothcare-graySoft/30 rounded-2xl sm:rounded-3xl shadow-clothcare p-8 sm:p-10 m">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-clothcare-accent-gradient text-white flex items-center justify-center mx-auto mb-4 shadow-clothcareSoft">
                  <Mail size={24} />
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-text-dark mb-2 tracking-tight">
                  Place Your Order
                </h1>

                <p className="text-text-muted font-medium text-sm sm:text-base">
                  Share your details and we'll get back to you shortly
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    icon={User}
                    type="text"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={update("fullName")}
                    error={errors.fullName}
                    required
                  />

                  <Input
                    label="Email Address"
                    icon={Mail}
                    type="email"
                    placeholder="john@email.com"
                    value={form.email}
                    onChange={update("email")}
                    error={errors.email}
                  />

                  <Input
                    label="Phone Number"
                    
                    type="phone"
                    placeholder="9876543210"
                    value={form.phone}
                    onChange={update("phone")}
                    error={errors.phone}
                    required
                  />

                  <Input
                    label="City"
                    icon={MapPin}
                    type="text"
                    placeholder="e.g. Mumbai, Delhi, Bangalore"
                    value={form.city}
                    onChange={update("city")}
                    error={errors.city}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  icon={!isSubmitting ? ArrowRight : undefined}
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full rounded-xl justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Submit Order"}
                </Button>

                <p className="text-xs text-text-muted text-center">
                  We'll never share your information. See our{" "}
                  <span
                    onClick={() => router.push("/privacy-policy")}
                    className="text-text-accent cursor-pointer hover:underline"
                  >
                    Privacy Policy.
                  </span>
                </p>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
