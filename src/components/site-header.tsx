"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { practice, nav, locations } from "@/lib/practice";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const main = locations[0];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/96 shadow-lg shadow-dark/20 backdrop-blur-md"
          : "bg-gradient-to-b from-dark/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-52 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <img
            src={practice.logo}
            alt={practice.name}
            width={500}
            height={208}
            style={{ filter: "invert(1)" }}
            className="h-48 w-auto object-contain mix-blend-screen"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={main.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-copper-dark lg:flex"
        >
          <PhoneIcon className="h-4 w-4" />
          {main.phone}
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-navy-dark/98 px-5 pb-8 pt-2 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={locations[0].phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white"
            >
              <PhoneIcon className="h-4 w-4" /> Four Crosses: {locations[0].phone}
            </a>
            <a
              href={locations[1].phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              <PhoneIcon className="h-4 w-4" /> Llanfyllin: {locations[1].phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
