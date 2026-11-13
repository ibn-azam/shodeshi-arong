"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Envelope,
  Eye,
  EyeSlash,
  Lock,
} from "@gravity-ui/icons";

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#0054A5] focus:bg-white focus:ring-4 focus:ring-[#0054A5]/10";

const benefits = [
  "Pick up where you left off while browsing",
  "Keep your shopping details close at hand",
  "Get help with products and order questions",
];

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Login is not available yet. You can still browse and order as a guest.",
    );
  }

  return (
    <div className="bg-[#fffdfd] text-[#111827]">
      <section className="min-h-[calc(100vh-5rem)] border-b border-[#C8101E]/10 bg-[linear-gradient(135deg,#fff8f8_0%,#fffdfd_48%,#f7fbff_100%)]">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-16">
          <div className="mx-auto w-full max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
              Welcome back
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl">
              Good to have you back.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-[#4b5563] sm:text-lg">
              Sign in to continue your Shodeshi Arong shopping experience.
              Looking around? You can always browse and order as a guest.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-6 text-[#374151] sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF1F2] text-[#C8101E]">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#C8101E]/10 bg-white px-3 py-2 text-sm text-[#374151] shadow-sm">
                Made for every occasion
              </span>
              <span className="rounded-full border border-[#0054A5]/10 bg-white px-3 py-2 text-sm text-[#374151] shadow-sm">
                Cash on Delivery
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg rounded-3xl border border-[#C8101E]/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0054A5]">
                Welcome back
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-[#111827]">
                Log in
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                Enter your email and password to continue.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block text-sm font-medium text-[#374151]">
                Email address
                <span className="relative block">
                  <Envelope
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9CA3AF]"
                    aria-hidden="true"
                  />
                  <input
                    autoComplete="email"
                    className={`${fieldClassName} pl-12`}
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                  />
                </span>
              </label>

              <label className="block text-sm font-medium text-[#374151]">
                Password
                <span className="relative block">
                  <Lock
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9CA3AF]"
                    aria-hidden="true"
                  />
                  <input
                    autoComplete="current-password"
                    className={`${fieldClassName} pr-12 pl-12`}
                    name="password"
                    placeholder="Enter your password"
                    required
                    type={passwordVisible ? "text" : "password"}
                  />
                  <button
                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-[#6b7280] hover:bg-[#F3F4F6] focus-visible:outline-2 focus-visible:outline-[#0054A5]"
                    onClick={() => setPasswordVisible((visible) => !visible)}
                    type="button"
                  >
                    {passwordVisible ? (
                      <EyeSlash className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </span>
              </label>

              <div className="flex justify-end">
                <Link
                  className="text-sm font-semibold text-[#0054A5] underline-offset-4 hover:underline"
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>

              {message && (
                <p
                  className="rounded-xl border border-[#0054A5]/15 bg-[#f4f9ff] px-4 py-3 text-sm leading-6 text-[#003B78]"
                  role="status"
                >
                  {message}
                </p>
              )}

              <button
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#C8101E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a60e1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0054A5]"
                type="submit"
              >
                Log in
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[#6b7280]">
              New to Shodeshi Arong?{" "}
              <Link
                className="font-semibold text-[#0054A5] underline-offset-4 hover:underline"
                href="/signup"
              >
                Create an account
              </Link>
            </p>

            <p className="mt-4 text-center text-sm text-[#6b7280]">
              Just browsing?{" "}
              <Link
                className="font-semibold text-[#0054A5] underline-offset-4 hover:underline"
                href="/shop"
              >
                Continue as a guest
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
