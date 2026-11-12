import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "panjabi-001",
    name: "Classic White Panjabi",
    category: "Heritage Edit",
    price: 1850,
    slug: "classic-white-panjabi",
    tone: "from-[#F5F5F4] via-[#E7E5E4] to-[#D6D3D1]",
    accent: "#C8101E",
    label: "W",
  },
  {
    id: "panjabi-002",
    name: "Elegant Black Panjabi",
    category: "Evening Luxe",
    price: 2200,
    slug: "elegant-black-panjabi",
    tone: "from-[#1F2937] via-[#374151] to-[#111827]",
    accent: "#0054A5",
    label: "B",
  },
  {
    id: "panjabi-003",
    name: "Royal Blue Panjabi",
    category: "Signature",
    price: 1950,
    slug: "royal-blue-panjabi",
    tone: "from-[#DBEAFE] via-[#93C5FD] to-[#2563EB]",
    accent: "#C8101E",
    label: "R",
  },
  {
    id: "panjabi-004",
    name: "Elegant Beige Panjabi",
    category: "Everyday Comfort",
    price: 1750,
    slug: "elegant-beige-panjabi",
    tone: "from-[#F5F5F4] via-[#E7D9C7] to-[#D6B38D]",
    accent: "#0054A5",
    label: "E",
  },
];

const formatPrice = (price) =>
  `৳${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(price)}`;

function ProductCard({ product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-[#F1E2E4] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(15,23,42,0.08)]">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-slate-100"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${product.tone}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),transparent_35%)]" />

        <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700 backdrop-blur-sm">
          {product.category}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 text-lg font-black text-white shadow-lg"
            style={{ backgroundColor: product.accent }}
          >
            {product.label}
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>

      <Link
        href={`/products/${product.slug}`}
        className="flex flex-1 flex-col p-4 outline-none transition-colors hover:bg-[#FFF9F8] focus-visible:ring-2 focus-visible:ring-[#0054A5]/40 sm:p-5"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8101E]">
          {product.category}
        </p>

        <h3 className="mt-2 min-h-[3rem] text-base font-bold leading-snug text-slate-900 sm:text-lg">
          {product.name}
        </h3>

        <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
          <span className="text-base font-extrabold text-slate-900 sm:text-lg">
            {formatPrice(product.price)}
          </span>

          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0054A5]">
            View
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default function FeaturedCollection() {
  return (
    <section className="bg-[#FFFDFD] py-16 sm:py-20 lg:py-24" aria-labelledby="featured-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C8101E]/15 bg-[#FFF1F2] px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#C8101E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8101E]">
                Featured
              </span>
            </div>

            <h2
              id="featured-heading"
              className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Featured Panjabis
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Timeless silhouettes crafted for everyday elegance, celebratory moments, and refined cultural styling.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-fit rounded-full border-[#0054A5]/20 bg-white px-6 text-[#0054A5] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#EAF4FF] hover:text-[#003B78]"
          >
            <Link href="/products" className="inline-flex items-center">
              View Collection
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#F4D7D9] bg-gradient-to-r from-[#FFF4F4] via-[#FFF9F7] to-[#F5F9FF] px-6 py-8 shadow-[0_20px_45px_rgba(200,16,30,0.05)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8101E]">
                Collection highlight
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-slate-900 sm:text-3xl">
                Browse the full collection
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Explore every Panjabi, from everyday comfort to statement pieces made for memorable occasions.
              </p>
            </div>

            <Button
              asChild
              className="rounded-full bg-[#C8101E] px-7 text-white shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 hover:bg-[#A60E1A]"
            >
              <Link href="/products" className="inline-flex items-center">
                Shop the Collection
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}