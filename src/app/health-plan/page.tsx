import type { Metadata } from "next";
import Link from "next/link";
import { locations, practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Pet Health Club",
  description:
    "Four Crosses Pet Health Club — spread the cost of preventive care with a simple monthly direct debit. Vaccinations, flea and worm treatments, 6-monthly health checks and more.",
  alternates: { canonical: "/health-plan" },
};

const inclusions = [
  {
    category: "Dogs",
    items: [
      "Primary annual booster vaccination",
      "Monthly flea treatment (Bravecto or Stronghold)",
      "Quarterly worming treatment (Milbemax)",
      "6-monthly health nurse check",
      "Free home delivery of treatments",
      "10% discount on dental work",
      "10% discount on neutering",
    ],
  },
  {
    category: "Cats",
    items: [
      "Primary annual booster vaccination",
      "Monthly flea treatment (Stronghold)",
      "Quarterly worming treatment (Milbemax)",
      "6-monthly health nurse check",
      "Free home delivery of treatments",
      "10% discount on dental work",
      "10% discount on neutering",
    ],
  },
  {
    category: "Rabbits",
    items: [
      "Annual myxomatosis and RHD vaccination",
      "Flea treatment (Advantage)",
      "6-monthly nurse health check",
      "Free home delivery of treatments",
    ],
  },
];

const faqs = [
  {
    q: "How much does the Health Club cost?",
    a: "Prices vary by pet type, size and the treatments required. Call or visit either surgery to get a personalised quote — there is no sign-up fee and you can cancel with one month's notice.",
  },
  {
    q: "When do the payments come out?",
    a: "By monthly direct debit on a fixed date of your choice. Payments start in the month you join.",
  },
  {
    q: "Can I join for multiple pets?",
    a: "Yes — each pet gets their own Health Club membership. Households with multiple pets are very welcome and it is a great way to keep track of everyone's preventive care.",
  },
  {
    q: "What if my pet needs a treatment that isn't included?",
    a: "Anything outside the Health Club is charged at our standard prices. The plan is designed to cover routine preventive care — it isn't a substitute for pet insurance, which we always recommend in addition.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes — with one calendar month's notice. If treatments have been given that have not yet been covered by payments, the balance is payable at that point.",
  },
  {
    q: "Is this the same as pet insurance?",
    a: "No — the Health Club covers planned preventive care only. Pet insurance covers unexpected illness and injury. We recommend having both.",
  },
];

export default function HealthPlanPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Four Crosses Pet Health Club</p>
          <h1 className="mt-4 max-w-3xl text-white" style={{ fontSize: "3.5rem", lineHeight: "3.75rem" }}>
            Simple, affordable preventive care
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/65">
            One monthly direct debit. Everything your pet needs to stay healthy. No surprises.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={locations[0].phoneHref}
              className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-dark"
            >
              Join at Four Crosses
            </a>
            <a
              href={locations[1].phoneHref}
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join at Llanfyllin
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">How it works</p>
          <h2 className="mt-3 text-navy">Three simple steps</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { num: "01", title: "Call or visit", body: "Speak to us at either surgery. We will explain what is included for your pet and give you a monthly price." },
              { num: "02", title: "Set up your direct debit", body: "Complete a simple form and your direct debit is live the same month. No paperwork, no waiting." },
              { num: "03", title: "Treatments delivered", body: "Treatments are prepared for you each month. Many can be delivered to your door — free of charge." },
            ].map(({ num, title, body }) => (
              <div key={num} className="relative rounded-2xl bg-cream p-8">
                <p className="font-display text-6xl font-medium text-copper/15" style={{ fontVariationSettings: '"opsz" 60' }}>{num}</p>
                <h3 className="mt-2 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">What&apos;s included</p>
          <h2 className="mt-3 text-navy">Full benefits by pet type</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {inclusions.map(({ category, items }) => (
              <div key={category} className="rounded-2xl bg-paper p-7 ring-1 ring-navy/8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10">
                  <PawIcon className="h-6 w-6 text-copper" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-navy">{category}</h3>
                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Questions</p>
          <h2 className="mt-3 text-navy">Frequently asked</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {faqs.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-navy/10 p-6">
                <h3 className="font-semibold text-navy">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="bg-navy-light">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="flex items-start gap-4">
            <InfoIcon className="mt-1 h-5 w-5 shrink-0 text-navy" />
            <div>
              <p className="font-semibold text-navy">The Health Club is not a substitute for pet insurance</p>
              <p className="mt-1 text-sm text-mist">
                The Health Club covers planned preventive care. We strongly recommend maintaining
                separate pet insurance to cover unexpected illness, accidents and emergency
                treatment costs. Ask us for recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 text-center">
          <h2 className="text-2xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 24' }}>
            Ready to join the Health Club?
          </h2>
          <p className="mt-3 text-white/70 text-sm">Call us or pop into either surgery — no appointment needed.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={locations[0].phoneHref} className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-copper hover:bg-white/90 transition-colors">
              {locations[0].phone}
            </a>
            <a href={locations[1].phoneHref} className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              {locations[1].phone}
            </a>
          </div>
          <p className="mt-5 text-xs text-white/50">Or email: <a href={`mailto:${practice.email}`} className="underline">{practice.email}</a></p>
        </div>
      </section>
    </>
  );
}

function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 17.5c-2.5 0-5-1.5-5-4.5 0-2 1.5-3.5 3-4.5-.5-.5-1-1.5-1-2.5 0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 2-1 2.5 1.5 1 3 2.5 3 4.5 0 3-2.5 4.5-5 4.5zm-6.5-9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2.5 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm18-5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2.5 5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  );
}
