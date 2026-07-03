import type { Metadata } from "next";
import Link from "next/link";
import { locations, practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Price List",
  description:
    "Transparent pricing at Four Crosses Veterinary Centre. Standard consultation fees, common procedures, vaccinations, microchipping and more. Prices include VAT.",
  alternates: { canonical: "/prices" },
};

const priceGroups = [
  {
    title: "Consultations",
    items: [
      { service: "Standard consultation (15 min)", price: "£45.84" },
      { service: "Extended consultation (30 min)", price: "£91.68" },
      { service: "Nurse appointment", price: "£26.40" },
      { service: "Home visit (within 5 miles)", price: "£74.40" },
      { service: "Home visit (over 5 miles)", price: "£74.40 + mileage" },
    ],
  },
  {
    title: "Vaccinations",
    items: [
      { service: "Dog primary course (2 injections)", price: "£108.00" },
      { service: "Dog annual booster", price: "£68.40" },
      { service: "Cat primary course (2 injections)", price: "£96.00" },
      { service: "Cat annual booster", price: "£60.00" },
      { service: "Rabbit vaccination (myxo + RHD2)", price: "£64.80" },
      { service: "Kennel cough (Bordetella)", price: "£32.40" },
    ],
  },
  {
    title: "Preventive care",
    items: [
      { service: "Microchip (dog, cat or rabbit)", price: "£20.02" },
      { service: "Nail clip", price: "£14.40" },
      { service: "Anal gland expression", price: "£26.40" },
      { service: "Weight check (nurse)", price: "£14.40" },
      { service: "Written prescription", price: "£10.80" },
      { service: "Pet Health Club membership", price: "From £14.00/month" },
    ],
  },
  {
    title: "Surgery",
    items: [
      { service: "Cat spay (female)", price: "From £228.00" },
      { service: "Cat castrate (male)", price: "From £168.00" },
      { service: "Dog spay — small (under 10 kg)", price: "From £312.00" },
      { service: "Dog spay — medium (10–25 kg)", price: "From £372.00" },
      { service: "Dog spay — large (25 kg+)", price: "From £420.00" },
      { service: "Dog castrate", price: "From £264.00" },
      { service: "Bitch spay via laparoscopy", price: "POA" },
    ],
  },
  {
    title: "Dentistry",
    items: [
      { service: "Dental scale & polish (cat)", price: "From £228.00" },
      { service: "Dental scale & polish (dog — small)", price: "From £264.00" },
      { service: "Dental scale & polish (dog — medium/large)", price: "From £312.00" },
      { service: "Extraction (per tooth — additional charge)", price: "From £30.00" },
    ],
  },
  {
    title: "Diagnostics",
    items: [
      { service: "In-house blood test (pre-anaesthetic)", price: "From £72.00" },
      { service: "In-house blood test (illness)", price: "From £108.00" },
      { service: "External laboratory submission", price: "From £48.00 + lab fees" },
      { service: "Digital X-ray (1–2 views)", price: "From £108.00" },
      { service: "Ultrasound", price: "From £96.00" },
    ],
  },
];

export default function PricesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">Transparent pricing</p>
          <h1 className="mt-4 text-white" style={{ fontSize: "3.5rem", lineHeight: "3.75rem" }}>
            Price list
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/65">
            We believe in clear pricing. The fees below are our standard rates — all prices include VAT.
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <p className="text-sm text-white/55">
            <span className="font-medium text-white/80">Please note:</span> Prices shown are for guidance only and may vary depending on the complexity of your pet&apos;s needs. Surgery costs include anaesthesia, monitoring and standard post-operative medications. Prices are reviewed annually and updated from time to time. Contact us for a personalised estimate.
          </p>
        </div>
      </section>

      {/* Price tables */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="space-y-12">
            {priceGroups.map(({ title, items }) => (
              <div key={title} className="overflow-hidden rounded-2xl bg-paper shadow-sm ring-1 ring-navy/8">
                <div className="border-b border-navy/8 bg-navy px-6 py-4">
                  <h2 className="text-lg font-medium text-white" style={{ fontVariationSettings: '"opsz" 20' }}>{title}</h2>
                </div>
                <div className="divide-y divide-navy/6">
                  {items.map(({ service, price }) => (
                    <div key={service} className="flex items-center justify-between px-6 py-4">
                      <p className="text-sm text-ink">{service}</p>
                      <p className="ml-8 shrink-0 text-sm font-semibold text-navy">{price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Club promo */}
      <section className="bg-copper-light">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-copper-dark">Save money</p>
              <h2 className="mt-2 text-2xl font-medium text-navy" style={{ fontVariationSettings: '"opsz" 24' }}>
                Pet Health Club members save up to 15%
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mist">
                Health Club members receive discounts on dental work and neutering, plus the cost of vaccinations and preventive treatments is spread as a simple monthly payment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href="/health-plan" className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors">
                Learn about the Health Club →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance note */}
      <section className="bg-paper py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-2xl bg-navy-light p-8">
            <h3 className="text-lg font-semibold text-navy">Pet insurance</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              We strongly recommend pet insurance for all dogs and cats. A good policy can cover
              unexpected consultations, surgery, diagnostic testing and specialist referrals —
              the costs of which can run into thousands of pounds. Ask at reception and we can
              discuss what level of cover tends to be most useful for your pet.
            </p>
            <p className="mt-4 text-xs text-mist/70">
              We accept all forms of pet insurance and can process claims directly with most major
              insurers. Please bring your policy documents to your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 text-center">
          <h2 className="text-2xl font-medium text-white" style={{ fontVariationSettings: '"opsz" 24' }}>
            Have a question about pricing?
          </h2>
          <p className="mt-3 text-white/55 text-sm">Our team are happy to give you an estimate before any treatment.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={locations[0].phoneHref} className="rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white hover:bg-copper-dark transition-colors">
              Call {locations[0].phone}
            </a>
            <a href={`mailto:${practice.email}`} className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
              {practice.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
