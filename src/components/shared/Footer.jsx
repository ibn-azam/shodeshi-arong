import Link from "next/link";
import Image from "next/image";
import { LogoFacebook, MapPin, ArrowUpRight } from "@gravity-ui/icons";

const shopLinks = [
  { name: "All Products", href: "/shop" },
  { name: "New Arrivals", href: "/shop?sort=newest" },
  { name: "About Us", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-red-100 bg-[#FFF8F8]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand information */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-5 inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="h-14 w-14 object-contain"
              />

            </Link>

            <p className="max-w-md text-sm leading-7 text-gray-600">
              Discover traditional Panjabi collections that bring together
              cultural heritage, timeless style, and everyday comfort.
            </p>

            <a
              href="https://www.facebook.com/shodeshi.arong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Shodeshi Arong on Facebook"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0054A5]/20 bg-white px-4 py-2 text-sm font-medium text-[#0054A5] transition-colors hover:bg-blue-50"
            >
              <LogoFacebook className="h-4 w-4" />
              Follow us on Facebook
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-gray-900">
              Explore
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-[#C8101E]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-gray-900">
              Get in Touch
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-600">
              Have a question about our collections or your order? Connect
              with us through our Facebook page.
            </p>

            <a
              href="https://www.facebook.com/shodeshi.arong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#0054A5] transition-colors hover:text-[#003B78]"
            >
              <MapPin className="h-4 w-4" />
              Contact our team
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-red-100 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Shodeshi Arong. All rights reserved.
          </p>

          <p className="text-xs font-medium text-[#0054A5]">
            Tradition with elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}