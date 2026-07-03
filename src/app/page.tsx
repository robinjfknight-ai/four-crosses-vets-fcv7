import type { Metadata } from "next";
import Link from "next/link";
import { practice, locations, vets } from "@/lib/practice";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const species = [
  {
    href: "/small-animals",
    label: "Small Animals",
    sub: "Dogs, cats, rabbits & more",
    img: "/images/hero-becca.jpg",
    imgAlt: "Vet holding a large dog",
  },
  {
    href: "/farm",
    label: "Farm Animals",
    sub: "Cattle, sheep, pigs & poultry",
    img: "/images/farm-cow-caesar.jpg",
    imgAlt: "Veterinary farm work",
  },
  {
    href: "/equine",
    label: "Equine",
    sub: "Horses, ponies & donkeys",
    img: "/images/equine-horse.jpg",
    imgAlt: "Two horses in a horsebox",
  },
];

const trust = [
  { stat: "Est.", value: "1971", label: "Over 50 years of care" },
  { stat: "10+", value: "Vets", label: "Experienced, qualified team" },
  { stat: "2", value: "Locations", label: "Four Crosses & Llanfyllin" },
  { stat: "24/7", value: "Emergency", label: "No extra out-of-hours charge" },
];

const featureVets = vets.slice(0, 4);

export default function HomePage() {
  const main = locations[0];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[70vh] flex-col items-start justify-end pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-cows.png"
          alt="Hereford cattle in a sunlit field"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-dark/10" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
            Independent mixed animal practice · {practice.established}
          </p>
          <h1 className="mt-4 max-w-3xl text-white">
            Caring for your animals on the border
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Serving Powys and Shropshire for over 50 years. Small animals, farm and equine —
            one independent practice, two locations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={main.phoneHref}
              className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-copper-dark"
            >
              Call Four Crosses
            </a>
            <a
              href={locations[1].phoneHref}
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Call Llanfyllin
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust stats ──────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {trust.map(({ stat, value, label }) => (
              <div key={label} className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-copper">{stat}</p>
                <p className="mt-1 font-display text-3xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 32' }}>{value}</p>
                <p className="mt-1 text-xs text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Species cards ────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">What we treat</p>
          <h2 className="mt-3 text-navy">Care for every animal</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {species.map(({ href, label, sub, img, imgAlt }) => (
              <Link
                key={href}
                href={href}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={imgAlt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-2xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 24' }}>{label}</p>
                  <p className="mt-1 text-sm text-white/60">{sub}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-copper group-hover:text-copper-light transition-colors">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 24hr emergency ───────────────────────────────────────────── */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Always available</p>
              <h2 className="mt-3 text-white">24-hour emergency care — no extra charge</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/60">
                We run our own out-of-hours service with two vets on call, every night, every
                weekend. When your animal needs help at 2am, call the same number you always
                use — we will answer. Unlike many practices, there is no out-of-hours surcharge.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={main.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" /> {main.phone}
                </a>
                <a
                  href={locations[1].phoneHref}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" /> {locations[1].phone}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { heading: "Small Animals", body: "Consult, surgery, emergencies — all species welcome." },
                { heading: "Farm", body: "Calvings, dystocias, bloat, injuries — 2 vets on call." },
                { heading: "Equine", body: "Ambulatory emergency service across Powys & Shropshire." },
                { heading: "No surcharge", body: "Out-of-hours at standard rates — always has been." },
              ].map(({ heading, body }) => (
                <div key={heading} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-medium text-white">{heading}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About split ──────────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-becca.jpg"
                alt="Vet and patient"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Our story</p>
              <h2 className="mt-3 text-navy">Independent, family-run since 1971</h2>
              <div className="mt-5 space-y-4 text-mist leading-relaxed">
                <p>
                  Four Crosses Veterinary Centre was established in {practice.established} and has been
                  independent ever since. We are not a corporate group. Richard and Jo Newing, who run
                  the practice, live locally — their children grew up here and their animals graze
                  the same hills as our clients&#8217; animals.
                </p>
                <p>
                  That independence matters: it means our decisions are made in this practice, for
                  our clients and our animals, not driven by shareholder returns. We invest in
                  equipment, people and training because it makes us better — not because a head
                  office says we must.
                </p>
                <p>
                  From our main site in Four Crosses to our branch at Aran Veterinary Centre in
                  Llanfyllin, we serve the full breadth of the border — companion animals, livestock
                  and horses alike.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/team"
                  className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-mid"
                >
                  Meet the team
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy-light"
                >
                  Find us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pet Health Club promo ────────────────────────────────────── */}
      <section className="bg-copper-light">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">Pet Health Club</p>
              <h2 className="mt-3 text-navy">Simple monthly care for your pet</h2>
              <p className="mt-4 text-mist leading-relaxed">
                Our Four Crosses Pet Health Club spreads the cost of preventive care into
                manageable monthly payments. For one fixed amount per month you get
                vaccinations, flea and worm treatments, free home delivery, 6-monthly health
                checks, and discounts on other services.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Annual primary vaccination",
                  "Monthly flea and worm treatment",
                  "6-monthly nurse health checks",
                  "Free home delivery of treatments",
                  "Discounts on dental care",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/health-plan"
                className="mt-8 inline-flex rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors"
              >
                Learn about the Health Club →
              </Link>
            </div>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-rich.jpg"
                alt="Vet with a small animal patient"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team teaser ──────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">The people behind the practice</p>
          <div className="mt-3 flex items-end justify-between">
            <h2 className="text-navy">Meet our team</h2>
            <Link href="/team" className="hidden text-sm font-semibold text-copper hover:text-copper-dark sm:block">
              All team members →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureVets.map((vet) => (
              <div key={vet.name} className="group overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-navy/8">
                {vet.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={vet.photo}
                    alt={vet.name}
                    className="aspect-square w-full object-cover object-top"
                  />
                ) : (
                  <div className="aspect-square w-full flex items-center justify-center bg-navy-light">
                    <span className="font-display text-5xl font-medium text-navy/30" style={{ fontVariationSettings: '"opsz" 48' }}>
                      {vet.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <p className="font-semibold text-navy">{vet.name}</p>
                  <p className="mt-0.5 text-xs text-mist">{vet.role}</p>
                  {vet.qualifications && (
                    <p className="mt-1 text-xs text-copper">{vet.qualifications}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/team" className="text-sm font-semibold text-copper hover:text-copper-dark">
              All team members →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Two locations ────────────────────────────────────────────── */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Where to find us</p>
          <h2 className="mt-3 text-white">Two locations across the border</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.name} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-copper">{loc.isMain ? "Main Practice" : "Branch"}</p>
                <h3 className="mt-2 text-xl font-medium text-white">{loc.name}</h3>
                <address className="mt-3 not-italic text-sm leading-6 text-white/50">
                  {loc.address}<br />{loc.county} {loc.postcode}
                </address>
                <a href={loc.phoneHref} className="mt-3 block text-base font-semibold text-copper hover:text-copper-light transition-colors">
                  {loc.phone}
                </a>
                <div className="mt-4 space-y-1 border-t border-white/10 pt-4">
                  {loc.hours.map((h) => (
                    <p key={h.days} className="text-xs text-white/40">
                      <span className="text-white/60">{h.days}:</span> {h.times}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="bg-copper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 text-center">
          <h2 className="text-3xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 32' }}>
            Ready to register your pet or animal?
          </h2>
          <p className="mt-3 text-white/70">
            New clients welcome. Call us or email — we will get you booked in.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={main.phoneHref} className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-copper hover:bg-white/90 transition-colors">
              Call {main.phone}
            </a>
            <a href={`mailto:${practice.email}`} className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              {practice.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
