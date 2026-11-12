
import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf8]">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FCE8E9] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#DDEEFF] opacity-80 blur-3xl" />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C8101E]/15 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#C8101E]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C8101E]">
              Celebrate Your Tradition
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.04em] text-[#171717] sm:text-6xl lg:text-7xl">
            Tradition
            <br />
            meets
            <span className="mt-2 block text-[#C8101E]">
              elegance.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
            Discover handcrafted Panjabi essentials designed to honor heritage,
            elevate everyday style, and make every moment feel effortlessly
            refined.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-[#C8101E] px-7 text-white shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 hover:bg-[#A60E1A]"
            >
              <Link href="/shop" className="inline-flex items-center">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-[#0054A5] px-7 text-[#0054A5] hover:bg-[#EAF4FF]"
            >
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
            <div>
              <p className="text-sm font-bold text-slate-900">Traditional Style</p>
              <p className="mt-1 text-xs text-slate-500">Inspired by heritage</p>
            </div>
            <div className="hidden h-8 w-px bg-slate-200 sm:block" />
            <div>
              <p className="text-sm font-bold text-slate-900">Modern Elegance</p>
              <p className="mt-1 text-xs text-slate-500">Made for today</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#C8101E]/20 sm:h-40 sm:w-40" />
          <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-full border border-[#0054A5]/20 sm:h-44 sm:w-44" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#F4D7D9] bg-gradient-to-br from-[#FDE9EA] via-[#FFF6F4] to-[#EAF4FF] shadow-[0_30px_70px_rgba(200,16,30,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,16,30,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(0,84,165,0.16),transparent_30%)]" />

            <div className="absolute left-8 top-8 rounded-2xl border border-white/60 bg-white/75 px-3 py-2 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#C8101E]">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-[0.16em]">Popular</span>
              </div>
            </div>

            <div className="absolute right-7 top-10 flex items-center gap-2 rounded-full border border-[#0054A5]/20 bg-white/80 px-3 py-2 text-sm font-semibold text-[#0054A5] shadow-sm backdrop-blur-sm">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#0054A5]" />
              New arrival
            </div>

            <div className="absolute bottom-7 left-7 right-7">
              <div className="rounded-[1.5rem] border border-white/40 bg-white/20 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  Shodeshi Arong
                </p>
                <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Wear Your Heritage.
                </h2>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-24 flex justify-center">
              <div className="relative h-56 w-44 rounded-[5rem] border-[10px] border-white/70 bg-gradient-to-b from-[#F4D4C2] via-[#C89A7A] to-[#7A4B35] shadow-[0_28px_40px_rgba(58,31,19,0.25)]">
                <div className="absolute -left-7 top-10 h-16 w-16 rounded-full border-[10px] border-white/70 bg-gradient-to-br from-[#F7DCC9] to-[#B57B5A]" />
                <div className="absolute -right-7 top-10 h-16 w-16 rounded-full border-[10px] border-white/70 bg-gradient-to-br from-[#F7DCC9] to-[#B57B5A]" />
                <div className="absolute inset-x-6 top-16 h-28 rounded-t-[3rem] bg-[#F7E9E1]/70" />
              </div>
            </div>
          </div>

          <div className="absolute -left-5 top-12 rounded-2xl border border-red-100 bg-white p-4 shadow-xl sm:-left-10 sm:p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Our Style
            </p>
            <p className="mt-1 text-lg font-black text-[#C8101E]">Tradition</p>
            <p className="text-lg font-black text-[#0054A5]">& Elegance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
