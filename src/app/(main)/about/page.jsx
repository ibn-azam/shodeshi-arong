import Image from "next/image";
import Link from "next/link";
import { Banknote, Ruler, ShoppingBag } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Shodeshi Arong is a Bangladeshi retail shop for men's Panjabi, for everyday wear, occasions and festivals.",
  openGraph: {
    title: "About Shodeshi Arong",
    description:
      "A Bangladeshi retail shop for men's Panjabi, for everyday wear, occasions and festivals.",
  },
};

const FACEBOOK_URL = "https://www.facebook.com/shodeshi.arong";
const ABOUT_IMAGE = null;
const STORY_PARAGRAPHS = [];

const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

const primaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-[#C8101E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a60e1a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0054A5]";

const secondaryButton =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[#0054A5]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0054A5] transition-colors hover:bg-[#f4f9ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0054A5]";

const orderingPoints = [
  {
    icon: Banknote,
    title: "Prices in taka",
    text: "Every price is shown in Bangladeshi Taka (৳). A discounted price appears only when a real discount applies.",
  },
  {
    icon: Ruler,
    title: "Size and colour availability",
    text: "Stock is tracked for each size and colour, so unavailable options are marked before you add anything to your cart.",
  },
  {
    icon: ShoppingBag,
    title: "Cash on Delivery",
    text: "Order as a guest without creating an account and pay when your order is delivered.",
  },
];

const highlights = [
  "Everyday Panjabi",
  "Occasion and festival wear",
  "Easy online ordering",
];

function AboutImage() {
  if (ABOUT_IMAGE) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#FFF1F2]">
        <Image
          src={ABOUT_IMAGE.src}
          alt={ABOUT_IMAGE.alt}
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label="Placeholder for a photograph from Shodeshi Arong"
      className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-[#C8101E]/20 bg-[linear-gradient(135deg,#fff1f2_0%,#fffdfd_55%,#f4f9ff_100%)] p-8 text-center"
    >
      <p className="max-w-[30ch] text-sm leading-7 text-[#6b7280]">
        A photograph of the shop or collection can be added here.
      </p>
    </div>
  );
}

function StoryContent() {
  if (STORY_PARAGRAPHS.length > 0) {
    return (
      <div className="space-y-5 text-base leading-8 text-[#374151] sm:text-lg">
        {STORY_PARAGRAPHS.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-[#C8101E]/20 bg-[#fffdfd] p-6 sm:p-8">
      <p className="text-base leading-7 text-[#6b7280]">
        The shop&rsquo;s story, its approach to fabric and finishing, and how it
        began will be shared here once the owner provides those details.
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-[#fffdfd] text-[#111827]">
      <section className="border-b border-[#C8101E]/10 bg-[linear-gradient(135deg,#fff8f8_0%,#fffdfd_45%,#f7fbff_100%)]">
        <div
          className={`${container} grid items-center gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
              About Shodeshi Arong
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Panjabi for everyday wear and special occasions.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#4b5563] sm:text-lg">
              Shodeshi Arong is a Bangladeshi retail shop for men&rsquo;s
              Panjabi. Browse styles for ordinary days, family occasions, and
              festivals, with clear prices and convenient online ordering.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className={primaryButton}>
                Explore the collection
              </Link>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                Visit our Facebook page
                <span className="sr-only"> (opens in a new tab)</span>
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

          <div className="rounded-3xl border border-[#C8101E]/10 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6">
            <AboutImage />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0054A5]/10 bg-[#f8fbff] p-4">
                <p className="text-sm font-medium text-[#6b7280]">Our focus</p>
                <p className="mt-2 text-base font-semibold text-[#111827]">
                  Men&rsquo;s Panjabi
                </p>
              </div>
              <div className="rounded-2xl border border-[#C8101E]/10 bg-[#fff8f8] p-4">
                <p className="text-sm font-medium text-[#6b7280]">Shop online</p>
                <p className="mt-2 text-base font-semibold text-[#111827]">
                  Browse from anywhere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
              The brand
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#111827] sm:text-4xl">
              Our story
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-[#4b5563]">
              We want shopping for Panjabi to feel straightforward, from
              exploring styles to choosing the right size.
            </p>
          </div>
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
            <StoryContent />
          </div>
        </div>
      </section>

      <section className="border-y border-[#C8101E]/10 bg-[#FFF8F8]">
        <div className={`${container} py-16 lg:py-20`}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
              Shopping with us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#111827] sm:text-4xl">
              What to expect when you order
            </h2>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {orderingPoints.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-[#F2D5D8] bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF1F2] text-[#C8101E]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#111827]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4b5563]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${container} py-16 lg:py-20`}>
          <div className="rounded-3xl border border-[#C8101E]/10 bg-[linear-gradient(135deg,#fff1f2_0%,#fffdfd_50%,#f4f9ff_100%)] p-6 shadow-sm sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0054A5]">
                Find your style
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-[#111827] sm:text-4xl">
                Explore the Shodeshi Arong collection.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#4b5563]">
                Browse the latest Panjabi styles or follow us on Facebook for
                updates.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link href="/shop" className={primaryButton}>
                Shop all products
              </Link>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                Follow on Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
