import type { Metadata } from "next";
import Link from "next/link";
import { smallAnimalServices, locations, practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Small Animal Services",
  description:
    "Comprehensive small animal veterinary care in Powys and Shropshire — dogs, cats, rabbits and small furries. Digital imaging, in-house bloods, laser therapy, surgery and more.",
  alternates: { canonical: "/small-animals" },
};

export default function SmallAnimalsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] flex-col items-start justify-end pb-16 lg:min-h-[58vh] lg:pb-20 xl:min-h-[65vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-small.png"
          alt="Dog and cat resting together"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-dark/5" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Small animals</p>
          <h1 className="mt-3 text-white">Your pet, our priority</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Experienced, friendly care for dogs, cats, rabbits and small furries at both our
            Four Crosses and Llanfyllin surgeries.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">What we offer</p>
              <h2 className="mt-3 text-navy">Comprehensive small animal care</h2>
              <div className="mt-5 space-y-4 text-mist leading-relaxed">
                <p>
                  Our vets handle the full spectrum of small animal medicine and surgery, from
                  routine consultations and preventive care through to complex soft tissue procedures.
                  We have visiting orthopaedic and soft tissue surgeons for advanced cases that
                  benefit from specialist input.
                </p>
                <p>
                  With digital X-ray, in-house ultrasound, same-day blood testing and Class IV
                  laser therapy all available on-site, many diagnostic and treatment journeys can
                  be completed without the stress of referral.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-rich.jpg"
                alt="Vet examining a small animal patient"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Our services</p>
          <h2 className="mt-3 text-navy">Everything your pet might need</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {smallAnimalServices.map(({ title, desc }) => (
              <div key={title} className="rounded-2xl bg-paper p-6 ring-1 ring-navy/8 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper/10">
                  <PawIcon className="h-5 w-5 text-copper" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prescriptions + EU travel */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-navy-light p-8">
              <h3 className="text-xl font-medium text-navy">Repeat Prescriptions</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                If your pet is on long-term medication, call us in advance and we will have your
                prescription ready to collect. For most stable conditions, we can issue a
                written prescription so you can purchase medicines online or from another
                pharmacy if you prefer — there is a small charge for this service.
              </p>
              <a href={locations[0].phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-copper-dark transition-colors">
                <PhoneIcon className="h-4 w-4" /> {locations[0].phone}
              </a>
            </div>
            <div className="rounded-2xl bg-navy-light p-8">
              <h3 className="text-xl font-medium text-navy">Pet Travel to the EU</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Planning to travel with your pet to EU countries? We can issue the required
                Animal Health Certificate (AHC). This must be done within 10 days of travel by
                an Official Veterinarian. Call us well in advance to book your appointment and
                make sure your pet&apos;s microchip and rabies vaccination are up to date.
              </p>
              <a href={`mailto:${practice.email}`} className="mt-5 inline-block text-sm font-semibold text-copper hover:text-copper-dark transition-colors">
                {practice.email} →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Health Plan promo */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Save money on routine care</p>
          <h2 className="mt-3 text-2xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 24' }}>
            Join the Four Crosses Pet Health Club
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/60 text-sm">
            Monthly direct debit. No sign-up fee. Covers vaccinations, flea &amp; worm treatment,
            health checks and more.
          </p>
          <Link
            href="/health-plan"
            className="mt-7 inline-flex rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors"
          >
            Find out more →
          </Link>
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
