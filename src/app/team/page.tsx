import type { Metadata } from "next";
import Link from "next/link";
import { vets, nurses, office, locations, type TeamMember } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Four Crosses Veterinary Centre team — 10 vets, nursing and reception staff dedicated to animal care across Powys and Shropshire.",
  alternates: { canonical: "/team" },
};

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-navy/8">
      {member.photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.photo}
          alt={member.name}
          className="aspect-square w-full object-cover object-top"
        />
      ) : (
        <div className="aspect-square w-full flex items-center justify-center bg-navy-light">
          <span className="font-display text-6xl font-medium text-navy/25" style={{ fontVariationSettings: '"opsz" 60' }}>
            {member.name.charAt(0)}
          </span>
        </div>
      )}
      <div className="p-5">
        <p className="font-semibold text-navy">{member.name}</p>
        <p className="mt-0.5 text-sm text-copper font-medium">{member.role}</p>
        {member.qualifications && (
          <p className="mt-1 text-xs text-mist">{member.qualifications}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-mist">{member.bio}</p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] flex-col items-start justify-end pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-rich.jpg"
          alt="Four Crosses vet team"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/92 via-dark/50 to-dark/10" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">The people behind the practice</p>
          <h1 className="mt-3 text-white">Our team</h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            10 vets, experienced nurses and a dedicated support team — all working together to give
            your animals the best care on the border.
          </p>
        </div>
      </section>

      {/* Vets */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Veterinary surgeons</p>
          <h2 className="mt-3 text-navy">The vets</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vets.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Nursing team */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Nursing &amp; animal care</p>
          <h2 className="mt-3 text-white">Nursing team</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {nurses.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-square w-full object-cover object-top"
                  />
                ) : (
                  <div className="aspect-square w-full flex items-center justify-center bg-navy-mid">
                    <span className="font-display text-6xl font-medium text-white/20" style={{ fontVariationSettings: '"opsz" 60' }}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="mt-0.5 text-sm text-copper">{member.role}</p>
                  {member.qualifications && (
                    <p className="mt-1 text-xs text-white/40">{member.qualifications}</p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office team */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper">Reception &amp; administration</p>
          <h2 className="mt-3 text-navy">Office team</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {office.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-copper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 text-center">
          <h2 className="text-2xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 24' }}>
            Interested in joining us?
          </h2>
          <p className="mt-3 text-white/70 text-sm max-w-lg mx-auto">
            We are always happy to hear from motivated vets, nurses and support staff who share
            our values. Get in touch by phone or email.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={locations[0].phoneHref} className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-copper hover:bg-white/90 transition-colors">
              {locations[0].phone}
            </a>
            <Link href="/contact" className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
