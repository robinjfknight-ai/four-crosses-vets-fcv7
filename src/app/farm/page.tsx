import type { Metadata } from "next";
import Link from "next/link";
import { farmServices, locations } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Farm Animal Services",
  description:
    "Farm veterinary services in Powys and Shropshire — TB testing, fertility, herd health planning, 24-hour emergency, caesarean sections, and more. Independent mixed practice since 1971.",
  alternates: { canonical: "/farm" },
};

export default function FarmPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] flex-col items-start justify-end pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm-cow-caesar.jpg"
          alt="Farm veterinary work with cattle"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/45 to-dark/5" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Farm animals</p>
          <h1 className="mt-3 text-white">Your farm, your vets</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Mixed animal vets with deep roots in Powys and Shropshire farming. Cattle, sheep,
            pigs, goats and poultry — 24-hour, no surcharge.
          </p>
        </div>
      </section>

      {/* Farm overview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Our approach</p>
              <h2 className="mt-3 text-navy">Farm vets who understand farming</h2>
              <div className="mt-5 space-y-4 text-mist leading-relaxed">
                <p>
                  Several of our vets keep their own livestock and live locally. That isn&apos;t an
                  accident — we recruit people who understand agriculture and are committed to the
                  farming communities we serve. We think it shows in the quality of advice and
                  the trust our farm clients place in us.
                </p>
                <p>
                  We offer the full range of farm animal veterinary services, from routine herd
                  health visits and TB testing through to on-call emergency caesarean sections
                  and complex surgical procedures at our practice — which includes two purpose-built
                  calf pens and a dedicated lambing room.
                </p>
                <p>
                  Our out-of-hours service is run in-house, with two vets on call every night.
                  There is no surcharge for out-of-hours calls — you pay the same consultation
                  fee as you would during the working day.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cattle" },
                { label: "Sheep" },
                { label: "Pigs" },
                { label: "Goats" },
                { label: "Deer" },
                { label: "Alpacas & Llamas" },
                { label: "Poultry" },
                { label: "Smallholders" },
              ].map(({ label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-navy/10 bg-cream px-4 py-3"
                >
                  <div className="h-2 w-2 rounded-full bg-copper shrink-0" />
                  <p className="text-sm font-medium text-navy">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Services</p>
          <h2 className="mt-3 text-white">What we offer</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {farmServices.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On-site facilities */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Our facilities</p>
          <h2 className="mt-3 text-navy">Built for farm work</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Two calf pens",
                body: "Purpose-built, well-lit and temperature-controlled — ideal for post-operative recovery, sick calves and specialist procedures.",
              },
              {
                title: "Lambing room",
                body: "A dedicated lambing room on site means ewes and lambs can be handled, treated and monitored in a proper facility.",
              },
              {
                title: "Post-mortem facilities",
                body: "On-site post-mortem facilities allow rapid investigation of disease problems, feeding directly into herd and flock health planning.",
              },
              {
                title: "In-house diagnostics",
                body: "Same-day blood testing, culture and sensitivity, and faecal egg counts mean faster answers and faster action.",
              },
              {
                title: "Large animal stocks",
                body: "Proper cattle handling equipment at the practice for safe examination, TB testing and minor procedures.",
              },
              {
                title: "On-farm TB testing",
                body: "Full DEFRA-approved TB testing programme across Powys and Shropshire, including Welsh Government–funded Cymorth advisory visits.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-2xl bg-paper p-6 ring-1 ring-navy/8 shadow-sm">
                <h3 className="text-base font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smallholder Club */}
      <section className="bg-copper-light">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">Community</p>
              <h2 className="mt-3 text-navy">Smallholder Club</h2>
              <div className="mt-5 space-y-4 text-mist leading-relaxed">
                <p>
                  We run a regular Smallholder Club with meetings throughout the year covering
                  practical topics — lamb/kid health, poultry medicine, biosecurity, worming
                  strategies and more. Open to anyone keeping livestock on a smaller scale.
                </p>
                <p>
                  We also hold periodic farmer evenings where we share updates on disease trends,
                  legislation changes and new treatments. These are free to attend and are a good
                  way to stay connected with what is happening in local agriculture.
                </p>
                <p>
                  Call us or follow us on Facebook to hear about the next meeting date.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={locations[0].phoneHref}
                  className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy-mid transition-colors"
                >
                  Call {locations[0].phone}
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-calf.jpg"
                alt="Farm calf"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency strip */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 text-center">
          <h2 className="text-2xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 24' }}>
            Farm emergency? Call us any time.
          </h2>
          <p className="mt-2 text-white/55 text-sm">Two vets on call. No out-of-hours surcharge.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={locations[0].phoneHref} className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors">
              {locations[0].phone}
            </a>
            <Link href="/contact" className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Get directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
