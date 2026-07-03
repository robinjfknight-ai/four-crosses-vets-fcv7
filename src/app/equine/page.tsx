import type { Metadata } from "next";
import Link from "next/link";
import { equineServices, locations } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Equine Services",
  description:
    "Ambulatory equine veterinary services in Powys and Shropshire. Vaccinations, passport signing, pre-purchase examinations, microchipping and 24-hour emergency cover.",
  alternates: { canonical: "/equine" },
};

export default function EquinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[65vh] flex-col items-start justify-end pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-equine.png"
          alt="Two chestnut horses"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/5" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Equine</p>
          <h1 className="mt-3 text-white">Care for horses on the border</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Ambulatory equine services across Powys and Shropshire — from routine vaccinations
            and passport administration to pre-purchase examinations and 24-hour emergency cover.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Equine care</p>
              <h2 className="mt-3 text-navy">Ambulatory equine practice</h2>
              <div className="mt-5 space-y-4 text-mist leading-relaxed">
                <p>
                  We provide a full ambulatory equine service across our practice area — visiting
                  horses, ponies and donkeys at your yard or field. From routine flu and tetanus
                  vaccinations through to more complex investigations and pre-purchase vetting, our
                  vets are experienced with all sizes and types of equine patient.
                </p>
                <p>
                  Our 24-hour emergency service covers equine patients as well as small animals and
                  farm livestock. If you have an equine emergency at any time of day or night, call
                  the Four Crosses number and a vet will be with you as soon as possible.
                </p>
                <p>
                  Several members of our team keep horses of their own, which means that when we
                  talk to you about your horse&apos;s care, we understand the realities of
                  day-to-day horse ownership.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/equine-horses.jpg"
                alt="Horses grazing"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Services</p>
          <h2 className="mt-3 text-navy">What we offer</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {equineServices.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-paper p-6 ring-1 ring-navy/8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/10">
                  <HorseIcon className="h-5 w-5 text-copper" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passport info */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Paperwork</p>
              <h2 className="mt-3 text-white">Passports &amp; microchipping</h2>
              <div className="mt-5 space-y-4 text-white/60 leading-relaxed">
                <p>
                  All horses, ponies and donkeys are legally required to have a passport and,
                  if born after 2009, a microchip. We are approved passport-issuing organisations
                  and can issue, update and sign passports as required.
                </p>
                <p>
                  If you have a horse without a passport, or need to update records following a
                  change of ownership or vaccination history, call us to arrange an appointment.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Passport issuance", body: "We are an approved passport-issuing body for horses, ponies and donkeys." },
                { title: "Passport signing", body: "Annual flu vaccination endorsements signed into your horse's passport as standard." },
                { title: "Microchipping", body: "Required for all horses born after 2009. Quick, permanent and traceable." },
                { title: "Export documentation", body: "Certificates and health declarations for horses travelling internationally." },
              ].map(({ title, body }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper-light">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 text-center">
          <h2 className="text-2xl font-medium text-navy" style={{ fontVariationSettings: '"opsz" 24' }}>
            Book an equine visit
          </h2>
          <p className="mt-3 text-mist text-sm max-w-lg mx-auto">
            Call Four Crosses to arrange vaccinations, a pre-purchase examination, or any
            other equine appointment. We serve the whole of Powys and Shropshire.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={locations[0].phoneHref} className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors">
              {locations[0].phone}
            </a>
            <Link href="/contact" className="rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy hover:bg-navy-light transition-colors">
              Find us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HorseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C9.2 2 7 4.2 7 7c0 1.3.5 2.5 1.3 3.4L5 13v9h2v-5h1v5h2v-5h1v5h2v-5h1v5h2v-9l-3.3-2.6C13.5 9.5 14 8.3 14 7c0-2.8-2.2-5-5-5h3zm2 13H7v-1.5l3.5-3.4c.3.2.6.4 1 .5L14 13v2z" />
    </svg>
  );
}
