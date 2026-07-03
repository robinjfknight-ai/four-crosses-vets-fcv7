export const practice = {
  name: "Four Crosses Veterinary Centre",
  shortName: "Four Crosses Vets",
  tagline: "Independent mixed animal practice on the Powys/Shropshire border",
  established: "1971",
  logo: "/logo.png",
  facebook: "https://www.facebook.com/4xsvets",
  instagram: "https://www.instagram.com/four_crosses_veterinary_centre",
  email: "reception@fourcrossesvets.co.uk",
} as const;

export const locations = [
  {
    name: "Four Crosses Veterinary Centre",
    address: "Hafod Offa, Four Crosses, Llanymynech",
    county: "Powys",
    postcode: "SY22 6RD",
    full: "Hafod Offa, Four Crosses, Llanymynech, Powys SY22 6RD",
    phone: "01691 830235",
    phoneHref: "tel:+441691830235",
    directions: "Turn off the A483 at the roundabout to Four Crosses — just past the petrol station off the mini-roundabout.",
    hours: [
      { days: "Monday – Friday", times: "9–10am · 2–4pm · 5–6:30pm" },
      { days: "Saturday", times: "9–11am" },
    ],
    isMain: true,
  },
  {
    name: "Aran Veterinary Centre",
    address: "28A High Street, Llanfyllin",
    county: "Powys",
    postcode: "SY22 5AQ",
    full: "28A High Street, Llanfyllin, Powys SY22 5AQ",
    phone: "01691 648226",
    phoneHref: "tel:+441691648226",
    directions: "On the High Street in Llanfyllin town centre.",
    hours: [
      { days: "Mon, Tue, Thu", times: "9–11am · 4–6pm" },
      { days: "Wednesday", times: "9–11am" },
      { days: "Friday", times: "9am–12noon · 2–4:30pm" },
    ],
    isMain: false,
  },
] as const;

export const nav = [
  { href: "/small-animals", label: "Small Animals" },
  { href: "/farm", label: "Farm" },
  { href: "/equine", label: "Equine" },
  { href: "/health-plan", label: "Health Plan" },
  { href: "/team", label: "Our Team" },
  { href: "/prices", label: "Prices" },
  { href: "/contact", label: "Contact" },
];

export type TeamMember = {
  name: string;
  role: string;
  qualifications?: string;
  bio: string;
  photo?: string;
  category: "vet" | "nurse" | "office";
};

export const vets: TeamMember[] = [
  {
    name: "Richard Newing",
    role: "Practice Director & Veterinary Surgeon",
    qualifications: "BVetMed MRCVS",
    bio: "Richard graduated from the Royal Veterinary College London in 1989 and has been with Four Crosses since 1991. He is married to Jo, has three children, and shares his home with 2 dogs, a cat, a horse and some sheep.",
    photo: "/images/team/richard-newing.jpg",
    category: "vet",
  },
  {
    name: "Dr Rebecca Green",
    role: "Veterinary Surgeon",
    qualifications: "BSc BVMedSci BVM BVS PgCert(SAM) MRCVS",
    bio: "Becca joined us in July 2018, graduating from Nottingham Vet School. She has recently completed a postgraduate certificate in small animal medicine and enjoys outdoor activities with her dog Penny.",
    photo: "/images/team/becca-green.jpg",
    category: "vet",
  },
  {
    name: "Helen Yeates",
    role: "Veterinary Surgeon",
    qualifications: "BVetMed CertVBM MRCVS",
    bio: "Helen graduated from the Royal Veterinary College London in 2009. Originally from Somerset, she works part-time and enjoys surfing, mountain biking and snowboarding — as well as playing for the local rounders team.",
    photo: "/images/team/helen-yeates.jpg",
    category: "vet",
  },
  {
    name: "Sarah Kendall-Taylor",
    role: "Veterinary Surgeon",
    qualifications: "BVetMed BSc MRCVS",
    bio: "Sarah graduated from the RVC in 1996 and ran Aran Veterinary Centre for 23 years before joining Four Crosses in 2025. Her interests include travel — she recently returned from seeing snow leopards in the Himalayas — and horse riding and playing the flute.",
    photo: "/images/team/sarah-kendall-taylor.jpg",
    category: "vet",
  },
  {
    name: "Ben Appleby",
    role: "Veterinary Surgeon",
    qualifications: "BVSc MRCVS",
    bio: "Ben graduated from the University of Liverpool in 2022 with a keen interest in farm practice. Outside work he enjoys sailing and walking with his dog Doug.",
    photo: "/images/team/ben-appleby.jpg",
    category: "vet",
  },
  {
    name: "Lucy Dawson",
    role: "Veterinary Surgeon",
    qualifications: "BVSc MRCVS",
    bio: "Lucy joined us in August 2022, also from the University of Liverpool. She adopted a stray cat named Tiggy and enjoys horse riding and walking.",
    photo: "/images/team/lucy-dawson.jpg",
    category: "vet",
  },
  {
    name: "Jennifer Hill",
    role: "Veterinary Surgeon",
    qualifications: "BA VetMB MRCVS",
    bio: "Jenny graduated from the University of Cambridge in 2022. She now rows at Pengwern Rowing Club, plays netball and enjoys baking.",
    photo: "/images/team/jenny-hill.jpg",
    category: "vet",
  },
  {
    name: "Thomas Penn",
    role: "Veterinary Surgeon",
    qualifications: "BVSc MRCVS",
    bio: "Tom joined us in September 2024 from the University of Liverpool. He plays rugby for the Cobra team.",
    photo: "/images/team/tom-penn.jpg",
    category: "vet",
  },
  {
    name: "James Hollis",
    role: "Veterinary Surgeon",
    qualifications: "BVMedSci BVM BVS MRCVS",
    bio: "James joined in September 2025 from the University of Nottingham. He keeps his own pedigree sheep flock, enjoys sailing and paddle-boarding, and has two pet tortoises.",
    photo: "/images/team/james-hollis.jpg",
    category: "vet",
  },
  {
    name: "Charlotte Butcher",
    role: "Veterinary Surgeon",
    qualifications: "BVetMed MRCVS",
    bio: "Charlotte joined Four Crosses in March 2026, graduating from the Royal Veterinary College London.",
    photo: undefined,
    category: "vet",
  },
];

export const nurses: TeamMember[] = [
  {
    name: "Lauren Henson",
    role: "Registered Veterinary Nurse",
    qualifications: "RVN",
    bio: "Lauren worked with us 2014–2017, completed her RVN training elsewhere, and returned in October 2024. She loves hiking and has 2 dogs and 4 cats.",
    photo: "/images/team/lauren-henson.jpg",
    category: "nurse",
  },
  {
    name: "Mandy Griffiths",
    role: "Nursing Assistant",
    bio: "Mandy started as a Saturday girl in 1986 and has been with us ever since — a true Four Crosses institution. She loves all aspects of surgery work.",
    photo: "/images/team/mandy-griffiths.png",
    category: "nurse",
  },
  {
    name: "Julie Kendall",
    role: "Animal Care Assistant",
    bio: "Originally from Surrey, Julie joined in 1998. She handles pet insurance claims and trains her spaniels Chester and Belle in scent work. She also owns 4 horses and 2 dogs.",
    photo: "/images/team/julie-kendall.jpg",
    category: "nurse",
  },
  {
    name: "Katie Herley",
    role: "Animal Care Assistant",
    bio: "Katie joined in February 2020 and is studying towards her RVN qualification. She always has treats on hand and lives on a farm with a whole menagerie of animals.",
    photo: "/images/team/katie-herley.jpg",
    category: "nurse",
  },
  {
    name: "Ceri Griffiths",
    role: "Nursing Assistant & Approved TB Tester",
    bio: "Ceri started in December 2021 with 10 years of veterinary experience. As an Approved TB Tester, she can often be found on farm as well as in the practice.",
    photo: "/images/team/ceri-griffiths.jpg",
    category: "nurse",
  },
  {
    name: "Olivia Newing",
    role: "Nursing Assistant",
    bio: "Olivia joined in September 2022. She enjoys both farm and small animal work, plays local rounders and loves travelling.",
    photo: "/images/team/olivia-newing.jpg",
    category: "nurse",
  },
  {
    name: "Courtney Harris",
    role: "Nursing Assistant",
    photo: "/images/team/courtney-harris.jpg",
    bio: "Courtney is a valued member of our nursing team.",
    category: "nurse",
  },
];

export const office: TeamMember[] = [
  {
    name: "Jo Newing",
    role: "Director & Practice Manager",
    bio: "Jo has worked in the office since 1993 and assists with out-of-hours reception. She is married to Richard, has three children, and competes in local showjumping with her horse Winnie.",
    photo: "/images/team/jo-newing.jpg",
    category: "office",
  },
  {
    name: "Phillipa Shapter",
    role: "Receptionist",
    bio: "The 'Queen of the Office' — Phillipa has been with Four Crosses since 1976. Both her children are physicians.",
    photo: undefined,
    category: "office",
  },
  {
    name: "Maxine Edwards",
    role: "Receptionist",
    bio: "Maxine has worked in the office since 2004 and oversees our Pet Health Club programme.",
    photo: undefined,
    category: "office",
  },
  {
    name: "Barbara Evans",
    role: "Out-of-Hours Receptionist",
    bio: "Jo's mother, Barbara brings a background in farming and catering to her role.",
    photo: "/images/team/barbara-evans.jpg",
    category: "office",
  },
  {
    name: "Jane Rowley",
    role: "Out-of-Hours Receptionist",
    bio: "Daughter of former senior partner Jenks and a former nurse. Jane lives on a sheep farm in Llandrinio.",
    photo: undefined,
    category: "office",
  },
];

export const smallAnimalServices = [
  { title: "Consultations", desc: "Thorough, unhurried consultations with experienced vets. We take the time to understand your pet and your concerns." },
  { title: "Vaccinations", desc: "Core and lifestyle vaccinations for dogs, cats and rabbits, keeping your pets protected year-round." },
  { title: "Surgery", desc: "Routine and complex procedures performed in our well-equipped surgical suite. Visiting soft tissue and orthopaedic surgeons available for advanced cases." },
  { title: "Dentistry", desc: "Scale, polish and extractions under general anaesthetic, with full dental X-ray capability." },
  { title: "Digital X-Ray & Ultrasound", desc: "On-site digital radiography and ultrasound for fast, accurate diagnosis without referral delay." },
  { title: "In-house Blood Testing", desc: "Same-day blood results for pre-anaesthetic checks, illness investigation and monitoring chronic conditions." },
  { title: "Class IV Laser Therapy", desc: "Non-invasive pain relief and accelerated tissue healing for arthritis, post-surgical recovery and wound management." },
  { title: "Pet Health Club", desc: "Monthly direct debit plan covering vaccinations, flea and worm treatments, 6-monthly health checks and free home delivery." },
  { title: "Microchipping", desc: "Quick, permanent identification for dogs, cats and rabbits." },
  { title: "Repeat Prescriptions", desc: "Convenient repeat prescription service — call ahead to arrange collection." },
  { title: "Pet Travel to the EU", desc: "Animal health certificates and all paperwork for travelling with pets to EU countries." },
  { title: "Home Visits", desc: "Available on request — particularly for elderly or anxious patients." },
  { title: "End of Life Care", desc: "Compassionate end-of-life support for pets and their owners, at the practice or at home." },
];

export const farmServices = [
  { title: "Herd Health Planning", desc: "Bespoke herd and flock health programmes tailored to your enterprise — dairy, beef, sheep or mixed." },
  { title: "Fertility Services", desc: "Fertility visits, pregnancy diagnosis, synchronisation programmes and bull/ram fertility evaluations." },
  { title: "TB Testing", desc: "Routine and reactor testing, including Welsh Government–funded TB Cymorth advisory visits." },
  { title: "Surgery", desc: "On-farm surgery including hernia repairs, LDAs, caesarean sections and ram vasectomies. Two purpose-built calf pens and a lambing room on site." },
  { title: "24-Hour Emergency", desc: "Own out-of-hours service — 2 vets on call — at no extra charge beyond normal consultation fees." },
  { title: "De-horning & Castration", desc: "Routine procedures carried out to high welfare standards." },
  { title: "Postmortem Examinations", desc: "On-farm or at the practice, with results feeding into your herd health programme." },
  { title: "Export & Slaughter Certificates", desc: "Full documentation support for movement and export of cattle and sheep." },
  { title: "Farmer Meetings", desc: "Regular knowledge-sharing evenings and a Smallholder Club with seasonal talks and advice." },
];

export const equineServices = [
  { title: "Vaccinations", desc: "Influenza and tetanus vaccinations, with passport recording as standard." },
  { title: "Microchipping", desc: "Permanent identification for horses, ponies and donkeys." },
  { title: "Health Checks", desc: "Pre-purchase examinations, annual health assessments and competition paperwork." },
  { title: "Worming Advice", desc: "Strategic worm control programmes based on egg counts and clinical history." },
  { title: "Equine Passports", desc: "Passport administration, signatories and updates." },
  { title: "24-Hour Emergency", desc: "Ambulatory emergency care — call the main Four Crosses number any time." },
];
