import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Envelope,
  LogoFacebook,
  MapPin,
  Smartphone,
  Text,
} from "@gravity-ui/icons";

const contactMethods = [
  {
    icon: Smartphone,
    title: "Call us",
    value: "+880 1712-345678",
    href: "tel:+8801712345678",
    detail: "Available from 10:00 AM to 8:00 PM",
  },
  {
    icon: Text,
    title: "WhatsApp",
    value: "+880 1712-345678",
    href: "https://wa.me/8801712345678",
    detail: "Fast replies for product and order questions",
  },
  {
    icon: Envelope,
    title: "Email",
    value: "hello@shodeshiarong.com",
    href: "mailto:hello@shodeshiarong.com",
    detail: "Send us your questions and sizing queries",
  },
  {
    icon: MapPin,
    title: "Visit us",
    value: "Sylhet, Bangladesh",
    href: "https://maps.google.com/?q=Dhaka+Bangladesh",
    detail: "Find the latest Panjabi arrivals in store",
  },
];

const highlights = [
  "Product and sizing guidance",
  "Order updates and delivery support",
  "Store hours and collection enquiries",
];

const faqItems = [
  {
    question: "Do you offer custom fitting advice?",
    answer:
      "Yes. Our team can help you choose the right size, fabric, and fit for your occasion.",
  },
  {
    question: "Can I order online from anywhere in Bangladesh?",
    answer:
      "Absolutely. Customers can browse the collection online and contact us for order details and delivery support.",
  },
  {
    question: "How quickly do you respond?",
    answer:
      "Most messages are answered within the same business day during our working hours.",
  },
];

export const metadata = {
  title: "Contact",
  description:
    "Contact Shodeshi Arong for product, sizing, and order support.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#fffdfd] text-[#111827]">
      <section className="border-b border-[#C8101E]/10 bg-[linear-gradient(135deg,#fff8f8_0%,#fffdfd_45%,#f7fbff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
              Contact us
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Let&rsquo;s help you find the perfect Panjabi.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#4b5563] sm:text-lg">
              Whether you need sizing help, product information, or support with
              an order, our team is here to guide you with care and clarity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+8801712345678"
                className="inline-flex items-center justify-center rounded-full bg-[#C8101E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a60e1a]"
              >
                Call our team
              </a>
              <a
                href="https://www.facebook.com/shodeshi.arong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0054A5]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0054A5] transition-colors hover:bg-[#f4f9ff]"
              >
                <LogoFacebook className="h-4 w-4" />
                Facebook page
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#C8101E]/10 bg-white px-3 py-2 text-sm text-[#374151] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#C8101E]/10 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF1F2] text-[#C8101E]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#6b7280]">Store hours</p>
                <p className="text-xl font-semibold text-[#111827]">10:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#0054A5]/10 bg-[#f8fbff] p-4">
                <p className="text-sm font-medium text-[#4b5563]">Location</p>
                <p className="mt-2 text-base font-semibold text-[#111827]">
                  Sylhet, Bangladesh
                </p>
              </div>
              <div className="rounded-2xl border border-[#0054A5]/10 bg-[#f8fbff] p-4">
                <p className="text-sm font-medium text-[#4b5563]">Best for</p>
                <p className="mt-2 text-base font-semibold text-[#111827]">
                  Orders, product questions, and collection guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactMethods.map(({ icon: Icon, title, value, href, detail }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-transform hover:-translate-y-0.5 hover:border-[#C8101E]/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#C8101E]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#6b7280]">{title}</p>
                  <p className="mt-1 text-lg font-semibold text-[#111827] group-hover:text-[#C8101E]">
                    {value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#4b5563]">{detail}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#0054A5]">
                  Send a message
                </p>
                <h2 className="mt-2 font-serif text-3xl text-[#111827]">We&rsquo;d love to hear from you</h2>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#eef7ff] text-[#0054A5] sm:flex">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[#374151]">
                  Full name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#0054A5] focus:bg-white"
                  />
                </label>

                <label className="block text-sm font-medium text-[#374151]">
                  Email address
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#0054A5] focus:bg-white"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-[#374151]">
                Phone number
                <input
                  type="tel"
                  placeholder="+880 17xxx xxxxx"
                  className="mt-2 w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#0054A5] focus:bg-white"
                />
              </label>

              <label className="block text-sm font-medium text-[#374151]">
                Message
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help you"
                  className="mt-2 w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-base text-[#111827] outline-none transition focus:border-[#0054A5] focus:bg-white"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-[#C8101E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a60e1a]"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t  border-[#C8101E]/10 bg-[#FFF8F8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
              Frequently asked
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#111827] sm:text-4xl">
              Questions before you reach out?
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {faqItems.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-2xl border border-[#F2D5D8] bg-white p-5 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#111827]">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4b5563]">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
