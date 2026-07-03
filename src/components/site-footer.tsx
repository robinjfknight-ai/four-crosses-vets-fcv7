import Link from "next/link";
import { practice, nav, locations } from "@/lib/practice";

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white/70">
      {/* Emergency strip */}
      <div className="bg-copper">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8">
          <p className="text-sm font-semibold text-white">
            24-hour emergency service — call any time, no extra charge
          </p>
          <div className="flex gap-3">
            {locations.map((loc) => (
              <a
                key={loc.phone}
                href={loc.phoneHref}
                className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/25 transition-colors"
              >
                <PhoneIcon className="h-4 w-4" /> {loc.phone}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <img
                src={practice.logo}
                alt={practice.name}
                width={500}
                height={208}
                style={{ filter: "invert(1)" }}
                className="h-48 w-auto object-contain mix-blend-screen opacity-90"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Independent mixed animal practice — serving Powys &amp; Shropshire since {practice.established}.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={practice.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={practice.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Services</h3>
            <ul className="mt-4 space-y-2">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Four Crosses location */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Four Crosses</h3>
            <address className="mt-4 not-italic text-sm leading-6">
              {locations[0].address}<br />
              {locations[0].county} {locations[0].postcode}
            </address>
            <a href={locations[0].phoneHref} className="mt-2 block text-sm text-copper hover:text-copper-light transition-colors font-medium">
              {locations[0].phone}
            </a>
            <div className="mt-3 text-xs text-white/40 space-y-0.5">
              {locations[0].hours.map((h) => (
                <p key={h.days}><span className="text-white/55">{h.days}:</span> {h.times}</p>
              ))}
            </div>
          </div>

          {/* Llanfyllin location */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">Aran — Llanfyllin</h3>
            <address className="mt-4 not-italic text-sm leading-6">
              {locations[1].address}<br />
              {locations[1].county} {locations[1].postcode}
            </address>
            <a href={locations[1].phoneHref} className="mt-2 block text-sm text-copper hover:text-copper-light transition-colors font-medium">
              {locations[1].phone}
            </a>
            <div className="mt-3 text-xs text-white/40 space-y-0.5">
              {locations[1].hours.map((h) => (
                <p key={h.days}><span className="text-white/55">{h.days}:</span> {h.times}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Four Crosses Veterinary Centre. All rights reserved.</p>
          <p className="mt-1">Registered in England &amp; Wales. Authorised and regulated by the Royal College of Veterinary Surgeons.</p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
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
