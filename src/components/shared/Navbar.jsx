"use client";

import { useState } from "react";
import Link from "next/link";
import { Spinner } from "../ui/spinner";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPending = false;
  const user = null;

  const handleSignOut = () => {};

  return (
    <nav className="sticky top-0 z-50 border-b border-[#C8101E]/10 bg-[#FFFDFD]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Shodeshi Arong home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8101E] text-sm font-bold text-white shadow-sm ring-2 ring-[#C8101E]/15">
            SA
          </div>
          <div className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-[#1F2937]">
              Shodeshi
            </span>
            <span className="block text-sm font-semibold text-[#0054A5]">
              Arong
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#C8101E]/15 bg-white text-[#C8101E] shadow-sm transition-colors hover:bg-[#FFF1F2] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[#374151] transition-colors hover:text-[#C8101E]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-[#D1D5DB]" />

          {isPending ? (
            <div className="flex items-center justify-center">
              <Spinner className="text-[#C8101E]" size="6" />
            </div>
          ) : user ? (
            <>
              <span className="text-sm font-medium text-[#374151]">Hi, {user.name}</span>
              <button
                type="button"
                onClick={handleSignOut}
                className="rounded-full border border-[#C8101E]/20 bg-[#C8101E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A60E1A]"
              >
                Sign Out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-medium text-[#374151] transition-colors hover:text-[#C8101E]"
              >
                Login
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#0054A5] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#003B78]"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="border-t border-[#C8101E]/10 bg-[#FFFDFD] px-4 py-4 shadow-sm md:hidden">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-[#374151] transition-colors hover:bg-[#FFF1F2] hover:text-[#C8101E]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-[#C8101E]/10 pt-4">
            {isPending ? (
              <div className="flex justify-center py-2">
                <Spinner className="text-[#C8101E]" size="6" />
              </div>
            ) : user ? (
              <div className="flex flex-col gap-3">
                <p className="px-3 text-sm font-medium text-[#374151]">Hi, {user.name}</p>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="w-full rounded-full bg-[#C8101E] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#C8101E]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#374151]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#0054A5] px-4 py-2.5 text-sm font-semibold text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop Now
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}