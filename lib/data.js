// Ficek Insurance — shared site data
// All content lives here so it's easy to update without touching page files

export const SITE = {
  name: 'Ficek Insurance',
  tagline: 'Protection for your world',
  taglineLong: "Brandon's independent insurance broker since 1946",
  description:
    'Family-owned independent insurance brokerage serving Brandon, Manitoba and surrounding communities since 1946. Home, auto, commercial, farm and life insurance.',
  phone: '204-571-1777',
  phoneHref: 'tel:+12045711777',
  email: 'info@ficekinsurance.com',
  address: {
    street: '1525 18th Street',
    city: 'Brandon',
    province: 'MB',
    postal: 'R7A 5A9',
    full: '1525 18th Street, Brandon, MB R7A 5A9',
  },
  hours: {
    weekdays: 'Monday – Friday: 9:00 AM – 5:00 PM',
    saturday: 'Saturday: Closed',
    sunday: 'Sunday: Closed',
  },
  social: {
    facebook: 'https://www.facebook.com/FicekInsurance',
  },
  liveUrl: 'https://ficekinsurance.com',
  founded: 1946,
};

export const NAV = [
  { label: 'Home', href: '/' },
  {
    label: 'Insurance',
    href: '/services',
    children: [
      { label: 'Auto Insurance (MPI)', href: '/services/auto-insurance' },
      { label: 'Home & Tenants', href: '/services/home-insurance' },
      { label: 'Business Insurance', href: '/services/business-insurance' },
      { label: 'Farm Insurance', href: '/services/farm-insurance' },
      { label: 'Life & Group', href: '/services/life-insurance' },
      { label: 'Condo / Lease', href: '/services/condo-insurance' },
      { label: 'Travel & Health', href: '/services/travel-insurance' },
      { label: 'Boats & Marine', href: '/services/boats-marine' },
      { label: 'Toys, Bikes & ORVs', href: '/services/toys-bikes-orvs' },
    ],
  },
  { label: 'Risk Tools', href: '/tools' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Team', href: '/about/our-team' },
      { label: 'Locations', href: '/about/locations' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: '🔬 Dev Notes', href: '/dev-notes' },
];

// Placeholder schemas for Insurance Carrier Partners (Ready for custom partner details)
export const CARRIERS = [
  { id: '1', name: 'Partner Carrier 1', category: 'Auto & Home', phone: '1-800-000-0000', badge: 'Premier Partner' },
  { id: '2', name: 'Partner Carrier 2', category: 'Commercial & Property', phone: '1-800-000-0000', badge: 'Mutual Partner' },
  { id: '3', name: 'Partner Carrier 3', category: 'Farm & Specialty', phone: '1-800-000-0000', badge: 'Regional Partner' },
  { id: '4', name: 'Partner Carrier 4', category: 'Life & Group Benefits', phone: '1-800-000-0000', badge: 'National Partner' },
  { id: '5', name: 'Partner Carrier 5', category: 'Recreational & Marine', phone: '1-800-000-0000', badge: 'Specialty Partner' },
  { id: '6', name: 'Partner Carrier 6', category: 'Excess & Umbrella', phone: '1-800-000-0000', badge: 'Commercial Partner' },
];


export const SERVICES = [
  {
    slug: 'auto-insurance',
    title: 'Auto Insurance (MPI)',
    icon: '🚗',
    summary:
      'Manitoba Public Insurance coverage plus private top-up options. Our brokers find you the best combination of MPI and private auto coverage.',
    coverageItems: [
      'Basic Autopac (MPI)',
      'Extension coverage',
      'Collision & comprehensive',
      'Rental vehicle coverage',
      'Roadside assistance',
    ],
  },
  {
    slug: 'home-insurance',
    title: 'Home & Tenants Insurance',
    icon: '🏠',
    summary:
      'Protect your home, contents, and personal liability with comprehensive home insurance designed for Manitoba homeowners and renters.',
    coverageItems: [
      'Dwelling & structures',
      'Personal contents',
      'Personal liability',
      'Additional living expenses',
      'Sewer backup coverage',
      'Overland water coverage',
    ],
  },
  {
    slug: 'business-insurance',
    title: 'Business Insurance',
    icon: '🏢',
    summary:
      'Comprehensive commercial coverage for businesses of all sizes. Protect your operations, property, and team with tailored business insurance.',
    coverageItems: [
      'Commercial property',
      'General liability',
      'Business interruption',
      'Commercial auto',
      'Employee benefits',
      'Errors & omissions',
    ],
  },
  {
    slug: 'farm-insurance',
    title: 'Farm Insurance',
    icon: '🌾',
    summary:
      'Specialized farm and agricultural insurance for Manitoba producers. Protect your land, livestock, equipment, and livelihood.',
    coverageItems: [
      'Farm dwelling & structures',
      'Livestock coverage',
      'Farm equipment',
      'Crop insurance',
      'Agribusiness liability',
    ],
  },
  {
    slug: 'life-insurance',
    title: 'Life & Group Insurance',
    icon: '❤️',
    summary:
      'Life, disability, and group benefit plans for individuals and businesses. Secure your family\'s financial future with the right coverage.',
    coverageItems: [
      'Term life insurance',
      'Whole life insurance',
      'Disability income',
      'Critical illness',
      'Group benefits',
    ],
  },
  {
    slug: 'condo-insurance',
    title: 'Condo / Life Lease',
    icon: '🏙️',
    summary:
      'Coverage designed specifically for condo owners and life lease residents — protecting what your condo corporation doesn\'t cover.',
    coverageItems: [
      'Unit improvements',
      'Personal contents',
      'Personal liability',
      'Loss assessment coverage',
      'Additional living expenses',
    ],
  },
  {
    slug: 'travel-insurance',
    title: 'Travel & Health Insurance',
    icon: '✈️',
    summary:
      'Travel with confidence. Emergency medical, trip cancellation, and out-of-province coverage for Canadians travelling anywhere in the world.',
    coverageItems: [
      'Emergency medical',
      'Trip cancellation',
      'Baggage loss',
      'Flight accident',
      'Out-of-province health',
    ],
  },
  {
    slug: 'boats-marine',
    title: 'Boats & Marine',
    icon: '⛵',
    summary:
      'Protect your watercraft on Manitoba\'s lakes and rivers. Coverage for boats, personal watercraft, and marine liability.',
    coverageItems: [
      'Hull coverage',
      'Marine liability',
      'Personal watercraft',
      'Trailer coverage',
      'Emergency towing',
    ],
  },
  {
    slug: 'toys-bikes-orvs',
    title: 'Toys, Bikes & ORVs',
    icon: '🏍️',
    summary:
      'Insurance for motorcycles, ATVs, snowmobiles, and other recreational vehicles. Ride with peace of mind.',
    coverageItems: [
      'Motorcycle insurance',
      'ATV / quad coverage',
      'Snowmobile insurance',
      'ORV liability',
      'Seasonal storage options',
    ],
  },
];

export const TEAM = [
  {
    name: 'Rod Ficek',
    title: 'Broker / Owner',
    bio: 'Rod has been serving Brandon families and businesses for decades. His deep knowledge of Manitoba insurance products and commitment to personalized service is the foundation of Ficek Insurance.',
  },
  {
    name: 'Heather Ficek',
    title: 'Broker / Owner',
    bio: 'Heather brings warmth and expertise to every client relationship. Her attention to detail ensures every policy is tailored to your specific needs.',
  },
  {
    name: 'Danon Ficek',
    title: 'Insurance Broker',
    bio: 'Part of the next generation of the Ficek family in insurance. Danon combines fresh perspective with the same family values that have defined Ficek Insurance for generations.',
  },
  {
    name: 'Sabrina Ficek',
    title: 'Insurance Broker',
    bio: "Sabrina's dedication to her clients reflects the family's commitment to going above and beyond. She specializes in personal lines and is passionate about protecting what matters most.",
  },
];

export const SEO_ISSUES = [
  {
    id: '01',
    severity: 'critical',
    title: 'Missing Meta Descriptions',
    summary: 'Zero meta descriptions on any page. Google writes your snippets.',
    fixedIn: false,
  },
  {
    id: '02',
    severity: 'critical',
    title: 'No Open Graph / Social Tags',
    summary: 'Links shared on Facebook/LinkedIn show broken previews.',
    fixedIn: true,
  },
  {
    id: '03',
    severity: 'critical',
    title: 'No Structured Data (Schema)',
    summary: 'No rich results, star ratings, or knowledge panel.',
    fixedIn: true,
  },
  {
    id: '04',
    severity: 'critical',
    title: 'Broken Sitemap & robots.txt',
    summary: 'sitemap.xml truncated mid-XML; robots.txt URL cut off.',
    fixedIn: false,
  },
  {
    id: '05',
    severity: 'critical',
    title: 'Dead Analytics (UA → GA4)',
    summary: 'Google shut down Universal Analytics July 2024. Zero data for 1+ year.',
    fixedIn: false,
  },
  {
    id: '06',
    severity: 'high',
    title: 'Weak Page Titles',
    summary: 'About page title is literally "Ficek-About". No location, no keywords.',
    fixedIn: true,
  },
];
