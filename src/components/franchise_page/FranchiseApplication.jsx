"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Shirt,
  User,
  MapPin,
  Sparkles,
  Phone,
  Mail,
  Briefcase,
  Lock,
  Wallet,
  Calendar,
  Smartphone,
  Home,
  GraduationCap,
  Building2,
  Hash,
  Zap,
  ShieldCheck,
  Crown,
} from "lucide-react";
import Input from "@/components/ui/input/Input";
import Button from "@/components/ui/btn/Button";

const STEPS = [
  { id: 1, label: "Owner Details", icon: User },
  { id: 2, label: "About You", icon: Sparkles },
  { id: 3, label: "Your Investment Plan", icon: MapPin },
];

const EXPERIENCE_OPTIONS = [
  { value: "no Experience", label: "First business venture" },
  { value: "1-3 Years", label: "1–3 years running a business" },
  { value: "3-5 Years", label: "3–5 years running a business" },
  { value: "5+ Years", label: "5+ years running a business" },
];

const HEAR_ABOUT_OPTIONS = [
  { value: "From search", label: "Google / Online Search" },
  { value: "From social Media", label: "Social Media" },
  { value: "From referral", label: "Referral / Word of Mouth" },
  { value: "other", label: "Other" },
];

const INCOME_OPTIONS = [
  { value: "below-5 Lakhs/year", label: "Under ₹5L / year" },
  { value: "5-10 Lakhs/year", label: "₹5L – ₹10L / year" },
  { value: "10-20 Lakhs/year", label: "₹10L – ₹20L / year" },
  { value: "20+ Lakhs/year", label: "₹20L+ / year" },
];

const TIMELINE_OPTIONS = [
  { value: "immediate", label: "Immediately" },
  { value: "1-3 months", label: "1 – 3 Months" },
  { value: "3-6 months", label: "3 – 6 Months" },
  { value: "just exploring", label: "Just exploring" },
];

// Updated plans to match your pricing page (10L, 15L, 20L, 25L)
const PLAN_OPTIONS = [
  {
    value: "starter",
    label: "Starter Franchise",
    price: 1000000,
    discount: 0,
    icon: Zap,
  },
  {
    value: "growth",
    label: "Growth Franchise",
    price: 1500000,
    discount: 0,
    icon: ShieldCheck,
  },
  {
    value: "premium",
    label: "Premium Franchise",
    price: 2000000,
    discount: 0,
    icon: Crown,
  },
  {
    value: "master",
    label: "Master Franchise",
    price: 2500000,
    discount: 0,
    icon: Crown,
  },
];

const initialState = {
  fullName: "",
  dob: "",
  whatsapp: "",
  phone: "",
  email: "",
  address: "",
  hearAboutUs: "",
  occupation: "",
  qualification: "",
  orgName: "",
  experience: "",
  incomeRange: "",
  timeline: "",
  city: "",
  pincode: "",
  plan: "",
};

/* ==========================================
   VALIDATION HELPERS
   ========================================== */
const NAME_REGEX = /^[A-Za-z][A-Za-z .'-]{1,49}$/; // letters/spaces/.'- , 2-50 chars
const PHONE_REGEX = /^[6-9]\d{9}$/; // Indian mobile: 10 digits, starts 6-9
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PINCODE_REGEX = /^[1-9]\d{5}$/; // 6-digit Indian PIN, never starts with 0

const digitsOnly = (str) => str.replace(/\D/g, "");

// Strips a leading "91" (country code) or leading "0" (trunk prefix) so
// "+91 98765 43210" and "098765 43210" both validate as the same number.
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
const isValidPincode = (str) => PINCODE_REGEX.test(str.trim());

// Returns age in years, or null if dobStr isn't a real, past date.
const getAge = (dobStr) => {
  const dob = new Date(dobStr);
  if (Number.isNaN(dob.getTime())) return null;
  const today = new Date();
  if (dob > today) return null;
  let age = today.getFullYear() - dob.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
  if (!hadBirthdayThisYear) age -= 1;
  return age;
};

// Tile-select used for experience, income, timeline, "how did you hear" —
// same selected/unselected language as Button's "outline" / "primary"
// variants, just laid out as a grid.
function OptionTile({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between text-left px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-300 cursor-pointer ${
        selected
          ? "border-clothcare-primary bg-clothcare-primary/5 text-text-accent"
          : "border-clothcare-graySoft/30 text-text-muted hover:border-clothcare-gray"
      }`}
    >
      {label}
      {selected && <Check size={16} className="shrink-0" />}
    </button>
  );
}

// Compact plan card for the free-selection 2x2 grid — icon + name on top
// row, price + discount badge on the bottom row. Only rendered when no
// plan has been locked in via the URL.
function PlanTile({ label, price, discount, icon: Icon, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col gap-2.5 px-4 py-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
        selected
          ? "border-clothcare-primary bg-clothcare-primary/5"
          : "border-clothcare-graySoft/30 hover:border-clothcare-gray"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
              selected
                ? "bg-clothcare-primary/10 text-text-accent"
                : "bg-clothcare-graySoft/15 text-text-muted"
            }`}
          >
            <Icon size={14} />
          </span>
          <span
            className={`text-sm font-bold leading-tight ${
              selected ? "text-text-accent" : "text-text-dark"
            }`}
          >
            {label}
          </span>
        </div>
        {selected && (
          <span className="w-5 h-5 rounded-full bg-clothcare-primary text-white flex items-center justify-center shrink-0">
            <Check size={12} />
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1.5">
        <span className="text-lg font-black text-text-dark tracking-tight">
          {price === 0 ? "₹0" : `₹${price.toLocaleString("en-IN")}`}
        </span>
        {discount > 0 && (
          <span className="text-[10px] font-bold uppercase tracking-wide text-text-accent">
            {discount}% off
          </span>
        )}
      </div>
    </button>
  );
}

// Small uppercase divider used to group related fields — encodes which
// fields belong together rather than just decorating the form.
function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-accent whitespace-nowrap">
        {children}
      </span>
      <span className="flex-1 h-px bg-clothcare-graySoft/40" />
    </div>
  );
}

function RequiredLabel({ children }) {
  return (
    <p className="mb-2 text-xs font-bold text-text-muted uppercase tracking-wider">
      {children}
      <span className="ml-1 text-status-danger">*</span>
    </p>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-lg font-black text-white tracking-tight">{value}</p>
      <p className="text-[9px] font-bold uppercase tracking-wider text-white/40 mt-1 leading-tight">
        {label}
      </p>
    </div>
  );
}

// Read the plan a pricing-card click attached to the URL, e.g.
// /coming-soon?plan=classic&name=Classic%20Investor&price=5000&discount=10&label=Investment%20Plan
// If absent (or malformed), the form falls back to letting the person
// pick a plan freely — that's what makes this one component work for
// both the standalone application page and the pricing-page handoff.
function usePlanFromQuery() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  if (!planId) return null;

  const name = searchParams.get("name") || planId;
  const priceRaw = searchParams.get("price");
  const discountRaw = searchParams.get("discount");
  const label = searchParams.get("label") || "Investment Plan";

  const price = priceRaw !== null ? Number(priceRaw) : null;
  const discount = discountRaw !== null ? Number(discountRaw) : null;

  if (price === null || Number.isNaN(price)) return null;

  return { id: planId, name, price, discount, label };
}

// Read-only summary of a plan that arrived locked from the pricing page.
function LockedPlanCard({ plan }) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-1.5 text-xs font-bold text-text-muted uppercase tracking-wider">
        Your investment plan
        <Lock size={12} className="text-text-muted/70" />
      </label>

      <div className="relative rounded-2xl border-2 border-clothcare-primary bg-clothcare-primary/5 px-4 sm:px-5 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-clothcare-primary/10 text-text-accent flex items-center justify-center shrink-0">
            <Wallet size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-text-dark truncate">
              {plan.name}
            </p>
            {!!plan.discount && (
              <p className="text-xs font-bold text-text-accent">
                {plan.discount}% OFF Every Item
              </p>
            )}
          </div>
        </div>

        <div className="text-right shrink-0">
          <p className="text-xl sm:text-2xl font-black text-text-dark tracking-tight">
            ₹{plan.price.toLocaleString("en-IN")}
          </p>
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
            {plan.label}
          </p>
        </div>
      </div>

      <p className="mt-2 text-xs text-text-muted font-medium">
        This plan is locked from the pricing page. Go back there if you'd like
        to choose a different one.
      </p>
    </div>
  );
}

export default function FranchiseApplication() {
  // null when there's no ?plan=... in the URL — that's the signal this
  // form is being used standalone and should let the person pick freely.
  const lockedPlan = usePlanFromQuery();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const select = (field, value) => () =>
    setForm((f) => ({ ...f, [field]: value }));

  const selectedPlanName = lockedPlan
    ? lockedPlan.name
    : PLAN_OPTIONS.find((p) => p.value === form.plan)?.label;

  const validateStep = (s) => {
    const next = {};

    if (s === 1) {
      if (!form.fullName.trim()) next.fullName = "Enter your full name";
      else if (!isValidName(form.fullName))
        next.fullName = "Enter a valid name (letters only)";

      if (form.dob) {
        const age = getAge(form.dob);
        if (age === null) next.dob = "Enter a valid date of birth";
        else if (age < 18) next.dob = "You must be at least 18 years old";
      }

      if (form.whatsapp.trim() && !isValidPhone(form.whatsapp)) {
        next.whatsapp = "Enter a valid 10-digit mobile number";
      }

      if (!form.phone.trim()) next.phone = "Enter a phone number";
      else if (!isValidPhone(form.phone))
        next.phone = "Enter a valid 10-digit mobile number";

      if (!form.email.trim()) next.email = "Enter an email address";
      else if (!isValidEmail(form.email))
        next.email = "Enter a valid email address";

      if (!form.address.trim()) next.address = "Enter your residential address";
      else if (form.address.trim().length < 10)
        next.address = "Please add a more complete address";

      if (!form.hearAboutUs) next.hearAboutUs = "Select an option";
    }

    if (s === 2) {
      if (!form.occupation.trim()) next.occupation = "Tell us what you do";
      else if (form.occupation.trim().length < 2)
        next.occupation = "Enter a valid occupation";

      if (!form.experience) next.experience = "Select an option";
      if (!form.incomeRange) next.incomeRange = "Select an income range";
      if (!form.timeline) next.timeline = "Select your timeline";
    }

    if (s === 3) {
      if (!form.city.trim()) next.city = "Enter your preferred city";
      else if (!isValidName(form.city)) next.city = "Enter a valid city name";

      if (!form.pincode.trim()) {
        next.pincode = "Enter your pincode";
      } else if (!isValidPincode(form.pincode)) {
        next.pincode = "Enter a valid 6-digit pincode";
      }

      // Only require an in-form selection when no plan arrived locked
      // from the pricing page.
      if (!lockedPlan && !form.plan) next.plan = "Select a plan";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 1));

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateStep(3)) return;

  setIsSubmitting(true);

  const plan = lockedPlan
    ? {
        id: lockedPlan.id,
        name: lockedPlan.name,
        price: lockedPlan.price,
        discount: lockedPlan.discount,
        source: "locked-from-pricing",
      }
    : (() => {
        const opt = PLAN_OPTIONS.find((p) => p.value === form.plan);
        return opt
          ? {
              id: opt.value,
              name: opt.label,
              price: opt.price,
              discount: opt.discount,
              source: "selected-in-form",
            }
          : null;
      })();

  // ==========================
  // ERP Payload (DO NOT CHANGE)
  // ==========================

  const payload = {
    fullName: form.fullName.trim(),
    dob: form.dob || null,
    whatsapp: form.whatsapp.trim()
      ? normalizePhone(form.whatsapp)
      : null,
    phone: normalizePhone(form.phone),
    email: form.email.trim().toLowerCase(),
    address: form.address.trim(),
    hearAboutUs: form.hearAboutUs,
    occupation: form.occupation.trim(),
    qualification: form.qualification.trim() || null,
    orgName: form.orgName.trim() || null,
    experience: form.experience,
    incomeRange: form.incomeRange,
    timeline: form.timeline,
    city: form.city.trim(),
    pincode: form.pincode.trim(),
    plan,
    submittedAt: new Date().toISOString(),
  };

  // ==========================
  // EMAIL Payload (Pretty)
  // ==========================

  const emailPayload = {
    "Full Name": payload.fullName,
    "Date of Birth": payload.dob || "-",
    WhatsApp: payload.whatsapp || "-",
    Phone: payload.phone,
    Email: payload.email,
    Address: payload.address,
    City: payload.city,
    Pincode: payload.pincode,

    Occupation: payload.occupation,
    Qualification: payload.qualification || "-",
    Organization: payload.orgName || "-",

    "Work Experience":
      payload.experience === "0"
        ? "No Experience"
        : payload.experience === "1-3"
        ? "1 - 3 Years"
        : payload.experience === "3-5"
        ? "3 - 5 Years"
        : payload.experience === "5+"
        ? "5+ Years"
        : payload.experience,

    "Investment Capacity":
      payload.incomeRange === "10"
        ? "₹10 Lakh"
        : payload.incomeRange === "15"
        ? "₹15 Lakh"
        : payload.incomeRange === "20+"
        ? "₹20+ Lakh"
        : payload.incomeRange,

    Timeline:
      payload.timeline === "immediate"
        ? "Immediately"
        : payload.timeline,

    "Heard About Us":
      payload.hearAboutUs.charAt(0).toUpperCase() +
      payload.hearAboutUs.slice(1),

    "Selected Plan": plan
      ? `${plan.name}
Price : ₹${plan.price}
Discount : ${plan.discount}%`
      : "Not Selected",

    Submitted: new Date(payload.submittedAt).toLocaleString("en-IN"),
  };

  try {
    // ==========================
    // STEP 1 - Send Email
    // ==========================

    const emailResponse = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Franchise Application",
        formData: emailPayload,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResult.success) {
      throw new Error(emailResult.message || "Failed to send email");
    }

    console.log("✅ Email Sent");

    // ==========================
    // STEP 2 - Send ERP
    // ==========================

    const erpResponse = await fetch(
      "https://erp-qlothcare.vercel.app/api/v1/franchise-inquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // ORIGINAL payload
      }
    );

    const erpResult = await erpResponse.json();

    console.log("ERP Response:", erpResult);

    if (!erpResponse.ok || !erpResult.success) {
      throw new Error(erpResult.message || "ERP Submission Failed");
    }

    console.log("✅ ERP Submitted");

    setIsSuccess(true);


  } catch (error) {
    console.error(error);
    alert(error.message || "Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="application"
      className="bg-bg-white py-10 sm:py-16 lg:py-32 relative z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(228,111,51,0.07)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(60,66,73,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex justify-center">
        <div className="w-full max-w-7xl bg-bg-white border border-clothcare-graySoft/30 rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] shadow-clothcare relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-clothcare-accent-gradient" />

          <div className="grid lg:grid-cols-5">
            {/* Left rail — garment-tag step tracker.
                On phone: compact horizontal stepper only, hero copy/stats hidden.
                On lg+: full hero + vertical step list + stats, unchanged. */}
            <div className="lg:col-span-2 bg-clothcare-darker p-5 sm:p-6 lg:p-14 flex flex-col">
              {/* Hero content — desktop/tablet only */}
              <div className="hidden lg:block">
                <div className="w-14 h-14 rounded-2xl bg-clothcare-accent-gradient text-white flex items-center justify-center mb-8 shadow-clothcareSoft">
                  <Shirt size={26} />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-clothcare-primary mb-4 block">
                  Franchise Application
                </span>

                <h2 className="text-3xl lg:text-5xl font-black text-text-primary mb-4 tracking-tight leading-[1.05] font-display">
                  Bring Qlothcare to your city.
                </h2>
                <p className="text-clothcare-graySoft/80 font-medium text-sm lg:text-base leading-relaxed">
                  Tell us a bit about yourself and where you'd like to open. Our
                  franchise team reviews every application personally.
                </p>

                <div className="h-px w-16 bg-clothcare-primary/60 my-8" />
              </div>

              {/* Compact mobile header — icon + title only, no paragraph */}
              <div className="flex items-center gap-3 mb-15 lg:hidden">
                <div className="w-10 h-10 rounded-xl bg-clothcare-accent-gradient text-white flex items-center justify-center shrink-0 shadow-clothcareSoft">
                  <Shirt size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-clothcare-primary/70 block">
                    Franchise Application
                  </span>
                  <h2 className="text-base font-black text-text-primary tracking-tight leading-tight font-display">
                    Bring Qlothcare to your city.
                  </h2>
                </div>
              </div>

              {/* Horizontal stepper — phone/tablet only */}
              <div className="flex items-center justify-between gap-2 lg:hidden">
                {STEPS.map((s, idx) => {
                  const isActive = s.id === step;
                  const isDone = s.id < step || isSuccess;
                  const Icon = s.icon;
                  return (
                    <React.Fragment key={s.id}>
                      <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
                        <div
                          className={`relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                            isDone
                              ? "bg-clothcare-primary border-clothcare-primary"
                              : isActive
                                ? "border-clothcare-primary text-clothcare-primary"
                                : "border-white/20 text-white/40"
                          }`}
                        >
                          <span className="absolute inset-[3px] rounded-full border border-dashed border-current opacity-30" />
                          {isDone ? (
                            <Check size={15} className="text-white" />
                          ) : (
                            <Icon size={14} />
                          )}
                        </div>
                        <span
                          className={`text-[9px] font-bold uppercase tracking-wide text-center leading-tight truncate w-full ${
                            isActive
                              ? "text-clothcare-primary"
                              : "text-white/40"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      {idx < STEPS.length - 1 && (
                        <div
                          className={`h-0.5 flex-1 mb-4 rounded-full transition-all duration-300 ${
                            s.id < step || isSuccess
                              ? "bg-clothcare-primary"
                              : "bg-white/10"
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Vertical step list + stats — desktop/tablet only, unchanged */}
              <div className="hidden lg:flex flex-col gap-3 mt-auto">
                {STEPS.map((s) => {
                  const isActive = s.id === step;
                  const isDone = s.id < step || isSuccess;
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.id}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 border transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 border-clothcare-primary/50"
                          : "bg-transparent border-white/10"
                      }`}
                    >
                      <div
                        className={`relative w-9 h-9 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                          isDone
                            ? "bg-clothcare-primary border-clothcare-primary"
                            : isActive
                              ? "border-clothcare-primary text-clothcare-primary"
                              : "border-white/20 text-white/40"
                        }`}
                      >
                        {/* punch-hole detail, like a fabric care tag */}
                        <span className="absolute inset-[3px] rounded-full border border-dashed border-current opacity-30" />
                        {isDone ? (
                          <Check size={16} className="text-white" />
                        ) : (
                          <Icon size={15} />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest ${
                            isActive
                              ? "text-clothcare-primary"
                              : "text-white/40"
                          }`}
                        >
                          Step {s.id} of 3
                        </span>
                        <span
                          className={`text-sm font-bold ${
                            isActive || isDone ? "text-white" : "text-white/50"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                    </div>
                  );
                })}

                <div className="grid grid-cols-3 gap-4 pt-6 mt-3 border-t border-white/10">
                  <Stat value="120+" label="Outlets Live" />
                  <Stat value="₹0" label="Hidden Fees" />
                  <Stat value="48h" label="Response Time" />
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3 p-5 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:border-l lg:border-dashed lg:border-clothcare-graySoft/40">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col justify-center items-center text-center py-10 sm:py-16"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-status-success/10 text-status-success rounded-full flex items-center justify-center mb-6">
                    <Check size={32} className="sm:w-9 sm:h-9" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-text-dark mb-3 tracking-tight font-display">
                    Application received.
                  </h3>
                  <p className="text-text-muted font-medium text-sm sm:text-base leading-relaxed max-w-sm">
                    Thanks, {form.fullName.split(" ")[0] || "there"}. A member
                    of our franchise team will call you within 48 hours to talk
                    next steps
                    {selectedPlanName
                      ? ` for the ${selectedPlanName} plan`
                      : ""}
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full">
                  <div className="flex-1">
                    {/* initial={false} — skips the slide-in animation on the
                        very first paint. Without it, Step 1 also runs an
                        "enter" transition on page load while the rest of
                        the layout (left rail, stepper) appears instantly,
                        which reads as a flicker/late-pop on first render. */}
                    <AnimatePresence mode="wait" initial={false}>
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -24 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="space-y-6 sm:space-y-8"
                        >
                          <div>
                            <SectionEyebrow>
                              Personal Information
                            </SectionEyebrow>
                            <div className="grid md:grid-cols-2 gap-5">
                              <div className="md:col-span-2">
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
                              </div>
                              <Input
                                label="Date of Birth"
                                icon={Calendar}
                                type="date"
                                value={form.dob}
                                onChange={update("dob")}
                                error={errors.dob}
                              />
                              <Input
                                label="WhatsApp Number"
                                type="phone"
                                placeholder="9876543210"
                                value={form.whatsapp}
                                onChange={update("whatsapp")}
                                error={errors.whatsapp}
                              />
                            </div>
                          </div>

                          <div>
                            <SectionEyebrow>Contact Details</SectionEyebrow>
                            <div className="grid md:grid-cols-2 gap-5">
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
                                label="Email Address"
                                icon={Mail}
                                type="email"
                                placeholder="john@email.com"
                                value={form.email}
                                onChange={update("email")}
                                error={errors.email}
                                required
                              />
                              <div className="md:col-span-2">
                                <Input
                                  label="Residential Address"
                                  icon={Home}
                                  type="text"
                                  placeholder="House no, street, area, state"
                                  value={form.address}
                                  onChange={update("address")}
                                  error={errors.address}
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <SectionEyebrow>
                              How Did You Find Us?
                            </SectionEyebrow>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {HEAR_ABOUT_OPTIONS.map((opt) => (
                                <OptionTile
                                  key={opt.value}
                                  label={opt.label}
                                  selected={form.hearAboutUs === opt.value}
                                  onClick={select("hearAboutUs", opt.value)}
                                />
                              ))}
                            </div>
                            {errors.hearAboutUs && (
                              <p className="mt-2 text-sm text-status-danger">
                                {errors.hearAboutUs}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -24 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="space-y-6 sm:space-y-8"
                        >
                          <div>
                            <SectionEyebrow>
                              Professional Background
                            </SectionEyebrow>
                            <div className="grid md:grid-cols-2 gap-5">
                              <div className="md:col-span-2">
                                <Input
                                  label="Current Occupation"
                                  icon={Briefcase}
                                  type="text"
                                  placeholder="e.g. Retail store owner, Salaried professional"
                                  value={form.occupation}
                                  onChange={update("occupation")}
                                  error={errors.occupation}
                                  required
                                />
                              </div>
                              <Input
                                label="Highest Qualification"
                                icon={GraduationCap}
                                type="text"
                                placeholder="e.g. B.Com, MBA"
                                value={form.qualification}
                                onChange={update("qualification")}
                              />
                              <Input
                                label="Current Organization / Business"
                                icon={Building2}
                                type="text"
                                placeholder="Optional"
                                value={form.orgName}
                                onChange={update("orgName")}
                              />
                            </div>
                          </div>

                          <div>
                            <SectionEyebrow>Experience & Income</SectionEyebrow>
                            <div className="space-y-5">
                              <div>
                                <RequiredLabel>
                                  Business experience
                                </RequiredLabel>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {EXPERIENCE_OPTIONS.map((opt) => (
                                    <OptionTile
                                      key={opt.value}
                                      label={opt.label}
                                      selected={form.experience === opt.value}
                                      onClick={select("experience", opt.value)}
                                    />
                                  ))}
                                </div>
                                {errors.experience && (
                                  <p className="mt-2 text-sm text-status-danger">
                                    {errors.experience}
                                  </p>
                                )}
                              </div>

                              <div>
                                <RequiredLabel>
                                  Annual income range
                                </RequiredLabel>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {INCOME_OPTIONS.map((opt) => (
                                    <OptionTile
                                      key={opt.value}
                                      label={opt.label}
                                      selected={form.incomeRange === opt.value}
                                      onClick={select("incomeRange", opt.value)}
                                    />
                                  ))}
                                </div>
                                {errors.incomeRange && (
                                  <p className="mt-2 text-sm text-status-danger">
                                    {errors.incomeRange}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div>
                            <SectionEyebrow>
                              Your Franchise Goals
                            </SectionEyebrow>
                            <div>
                              <RequiredLabel>
                                When are you looking to start?
                              </RequiredLabel>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {TIMELINE_OPTIONS.map((opt) => (
                                  <OptionTile
                                    key={opt.value}
                                    label={opt.label}
                                    selected={form.timeline === opt.value}
                                    onClick={select("timeline", opt.value)}
                                  />
                                ))}
                              </div>
                              {errors.timeline && (
                                <p className="mt-2 text-sm text-status-danger">
                                  {errors.timeline}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -24 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="space-y-6 sm:space-y-8"
                        >
                          <div>
                            <SectionEyebrow>Outlet Location</SectionEyebrow>
                            <div className="grid md:grid-cols-2 gap-5">
                              <Input
                                label="Preferred city for your outlet"
                                icon={MapPin}
                                type="text"
                                placeholder="Navi Mumbai"
                                value={form.city}
                                onChange={update("city")}
                                error={errors.city}
                                required
                              />
                              <Input
                                label="Pincode"
                                icon={Hash}
                                type="text"
                                placeholder="382007"
                                value={form.pincode}
                                onChange={update("pincode")}
                                error={errors.pincode}
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <SectionEyebrow>Investment Plan</SectionEyebrow>

                            {lockedPlan ? (
                              <LockedPlanCard plan={lockedPlan} />
                            ) : (
                              <div>
                                <RequiredLabel>Choose your plan</RequiredLabel>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {PLAN_OPTIONS.map((opt) => (
                                    <PlanTile
                                      key={opt.value}
                                      label={opt.label}
                                      price={opt.price}
                                      discount={opt.discount}
                                      icon={opt.icon}
                                      selected={form.plan === opt.value}
                                      onClick={select("plan", opt.value)}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}

                            {errors.plan && (
                              <p className="mt-2 text-sm text-status-danger">
                                {errors.plan}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-3 pt-6 sm:pt-8 mt-2 border-t border-clothcare-graySoft/30">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        icon={ArrowLeft}
                        iconPosition="left"
                        onClick={goBack}
                        className="rounded-xl"
                      >
                        Back
                      </Button>
                    )}

                    <div className="flex-1" />

                    {step < 3 ? (
                      <Button
                        type="button"
                        variant="primary"
                        icon={ArrowRight}
                        onClick={goNext}
                        className="rounded-xl"
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        variant="primary"
                        icon={!isSubmitting ? ArrowRight : undefined}
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        className="rounded-xl"
                      >
                        {isSubmitting ? "Submitting" : "Submit Application"}
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
