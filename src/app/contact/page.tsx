import type { Metadata } from "next";
import { locations, practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Find Four Crosses Veterinary Centre — two locations in Powys. Four Crosses: 01691 830235. Aran Veterinary Centre Llanfyllin: 01691 648226. 24-hour emergency service.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Get in touch</p>
          <h1 className="mt-4 text-white" style={{ fontSize: "3.5rem", lineHeight: "3.75rem" }}>
            Contact us
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">
            Two surgeries across the Powys/Shropshire border. Call us, email us or visit us.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="bg-copper">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-white">24-hour emergency service</p>
              <p className="mt-0.5 text-sm text-white/70">No out-of-hours surcharge. Two vets on call every night.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <a key={loc.phone} href={loc.phoneHref} className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/30 transition-colors">
                  {loc.phone}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location cards */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.name} className="overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-navy/8">
                <div className="bg-navy px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-copper">{loc.isMain ? "Main Practice" : "Branch Surgery"}</p>
                  <h2 className="mt-1.5 text-xl font-medium text-white">{loc.name}</h2>
                </div>
                <div className="p-7">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <div>
                      <p className="text-sm font-medium text-navy">Address</p>
                      <address className="mt-1 not-italic text-sm leading-6 text-mist">
                        {loc.address}<br />{loc.county} {loc.postcode}
                      </address>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-xs font-semibold text-copper hover:text-copper-dark transition-colors"
                      >
                        Get directions →
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mt-5 flex items-start gap-3">
                    <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <div>
                      <p className="text-sm font-medium text-navy">Telephone</p>
                      <a href={loc.phoneHref} className="mt-1 block text-base font-semibold text-navy hover:text-copper transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  {/* Directions note */}
                  <div className="mt-5 flex items-start gap-3">
                    <MapIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <div>
                      <p className="text-sm font-medium text-navy">Finding us</p>
                      <p className="mt-1 text-sm text-mist">{loc.directions}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mt-5 flex items-start gap-3">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-copper" />
                    <div>
                      <p className="text-sm font-medium text-navy">Opening hours</p>
                      <div className="mt-2 space-y-1">
                        {loc.hours.map((h) => (
                          <p key={h.days} className="text-sm text-mist">
                            <span className="font-medium text-navy">{h.days}:</span> {h.times}
                          </p>
                        ))}
                      </div>
                      <p className="mt-3 text-xs text-mist/70">
                        Emergency cover 24 hours · 7 days · 365 days a year
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email & social */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-navy/10 p-6">
              <EmailIcon className="h-6 w-6 text-copper" />
              <p className="mt-3 font-semibold text-navy">Email</p>
              <a href={`mailto:${practice.email}`} className="mt-1 block text-sm text-copper hover:text-copper-dark transition-colors">
                {practice.email}
              </a>
              <p className="mt-2 text-xs text-mist">For non-urgent enquiries only — for emergencies please always call.</p>
            </div>
            <div className="rounded-2xl border border-navy/10 p-6">
              <FacebookIcon className="h-6 w-6 text-copper" />
              <p className="mt-3 font-semibold text-navy">Facebook</p>
              <a href={practice.facebook} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-copper hover:text-copper-dark transition-colors">
                @4xsvets
              </a>
              <p className="mt-2 text-xs text-mist">News, updates, health tips and the occasional photo of our patients.</p>
            </div>
            <div className="rounded-2xl border border-navy/10 p-6">
              <InstagramIcon className="h-6 w-6 text-copper" />
              <p className="mt-3 font-semibold text-navy">Instagram</p>
              <a href={practice.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-copper hover:text-copper-dark transition-colors">
                @four_crosses_veterinary_centre
              </a>
              <p className="mt-2 text-xs text-mist">Follow us for patient stories and behind-the-scenes content.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
