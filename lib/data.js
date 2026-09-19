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
    street: '1439 1st Street',
    city: 'Brandon',
    province: 'MB',
    postal: 'R7A 6Z4',
    full: '1439 1st Street, Brandon, MB R7A 6Z4',
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

export const OFFICES = [
  {
    id: 'main',
    name: '1439 1st Street Office',
    street: '1439 1st Street',
    crossStreet: '1st St & Richmond Avenue',
    city: 'Brandon',
    province: 'MB',
    postal: 'R7A 6Z4',
    full: '1439 1st Street, Brandon, MB R7A 6Z4',
    phone: '204-571-1777',
    phoneHref: 'tel:+12045711777',
    email: 'info@ficekinsurance.com',
    badge: '🏆 Main Office',
    desc: 'Our primary Brandon brokerage office. Full service for Autopac, driver licensing, home, commercial, farm, and emergency claims advocacy.',
    hours: 'Monday – Friday: 9:00 AM – 5:00 PM',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=1439+1st+Street+Brandon+MB+R7A+6Z4',
    embedUrl: 'https://maps.google.com/maps?q=1439%201st%20Street%20Brandon%20MB%20R7A%206Z4&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  {
    id: 'eighteenth',
    name: '1525 18th Street Office',
    street: '1525 18th Street',
    crossStreet: '18th Street, Brandon',
    city: 'Brandon',
    province: 'MB',
    postal: 'R7A 5A9',
    full: '1525 18th Street, Brandon, MB R7A 5A9',
    phone: '204-728-1957',
    phoneHref: 'tel:+12047281957',
    email: 'info@ficekinsurance.com',
    badge: '📍 18th Street Office',
    desc: 'Our 18th Street brokerage location providing full Autopac registration, driver licensing, personal property, and broker advice.',
    hours: 'Monday – Friday: 9:00 AM – 7:00 PM | Saturday: 10:00 AM – 5:00 PM',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=1525+18th+Street+Brandon+MB+R7A+5A9',
    embedUrl: 'https://maps.google.com/maps?q=1525%2018th%20Street%20Brandon%20MB%20R7A%205A9&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
];

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
  {
    label: 'Resources',
    href: '/resources/mpi-forms',
    children: [
      { label: 'MPI Forms & Documents', href: '/resources/mpi-forms' },
      { label: 'Interactive Planning Tools', href: '/tools' },
    ],
  },
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
  // Internal engineering & dev tracker page
  { label: '🔬 Dev Notes', href: '/dev-notes', devOnly: true },
];

export const MPI_FORMS = [
  {
    category: 'Vehicle Registration & Ownership Forms',
    desc: 'Official Manitoba Public Insurance forms required for buying, selling, or authorizing vehicle registration in Manitoba.',
    items: [
      {
        title: 'Bill of Sale Sample',
        desc: 'Official MPI sample bill of sale form for buying or selling a used vehicle in Manitoba.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/BillofSaleSample.pdf',
        badge: 'Official PDF',
      },
      {
        title: 'Statement of Gift Form',
        desc: 'Official declaration for gifting a motor vehicle to an immediate family member in Manitoba.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/BillofSaleSample.pdf',
        badge: 'Official PDF',
      },
      {
        title: 'Authority to Register & Exclusive Use Agreement',
        desc: 'Authorization form required when registering or granting vehicle use to another individual.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/Authority_To_Register_And_Exclusive_Use_Agreement.pdf',
        badge: 'Official PDF',
      },
      {
        title: 'Customer Authorization for Vehicle Registration and Insurance Transactions',
        desc: 'Official MPI customer authorization form allowing another representative to complete vehicle registration and insurance transactions for you.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/Customer-Authorization-EN.pdf?v=1769908227',
        badge: 'Official PDF',
      },
      {
        title: 'Declaration of Guarantor for Proof of Identity',
        desc: 'MPI identity verification form signed by a guarantor for driver licensing and registration.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/COIsample.pdf',
        badge: 'Official PDF',
      },
      {
        title: 'Driver Unavailable Form',
        desc: 'Authorization document required when the primary driver is unavailable during policy setup.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/Authorization_For_Representative.pdf',
        badge: 'Broker Form',
      },
    ],
  },
  {
    category: 'Specialty Vehicle & License Applications',
    desc: 'Applications for collector vehicles, specialty plates, and driver education guides.',
    items: [
      {
        title: 'Collector Vehicle Qualification Form',
        desc: 'Qualification application for Manitoba collector vehicle status and rate discounts.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/CollectorQualification-en.pdf',
        badge: 'Official PDF',
      },
      {
        title: 'Veterans Plate Application',
        desc: 'Application form for eligible Canadian Armed Forces veterans specialty license plates.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/AmateurRadioOperatorApplication.pdf',
        badge: 'Specialty Plate',
      },
      {
        title: 'Driver Questionnaire Example',
        desc: 'Sample questionnaire guide for new Manitoba drivers and rating assessments.',
        url: 'https://www.mpi.mb.ca/driver-education/',
        badge: 'MPI Guide',
      },
      {
        title: 'Driver Education Registration Guide',
        desc: 'Official Manitoba High School Driver Z driver education registration procedure.',
        url: 'https://www.mpi.mb.ca/driver-education/',
        badge: 'MPI Portal',
      },
      {
        title: 'Certificate of Inspection (COI) Sample',
        desc: 'Sample safety inspection certificate required for Manitoba vehicle transfers.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/COIsample.pdf',
        badge: 'Sample PDF',
      },
    ],
  },
  {
    category: 'Accident Reports & Claim Forms',
    desc: 'Direct PDF downloads for reporting on-scene vehicle collisions and child safety seat claims.',
    items: [
      {
        title: 'MPI On-Scene Accident Report Form',
        desc: 'Printable driver accident report form to document collision details, weather, and witness information.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/accident-report.pdf',
        badge: 'Printable PDF',
      },
      {
        title: 'Child Car Seat Reimbursement Form',
        desc: 'Application form for car seat replacement reimbursement following a vehicle collision.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/ChildCarseatReimbursementForm_ENG.pdf',
        badge: 'Reimbursement PDF',
      },
      {
        title: 'Online Credit Card Payment Portal',
        desc: 'MPI direct credit card authorization and online premium payment portal.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/2022/10/credit-card-payment.pdf',
        badge: 'MPI Payment',
      },
    ],
  },
  {
    category: 'Tax Refunds, Vehicle Import & Full MPI Directory',
    desc: 'Official Manitoba Provincial Tax (RST) refund applications, Federal vehicle import guides, and full MPI portal links.',
    items: [
      {
        title: 'Application for RST Refund (Motor Vehicles & Trailers)',
        desc: 'Manitoba Department of Finance refund application for Retail Sales Tax paid on motor vehicles.',
        url: 'https://www.gov.mb.ca/finance/taxation/pubs/bulletins/rst004.pdf',
        badge: 'Manitoba Gov PDF',
      },
      {
        title: 'Application for RST Refund (Off-Road Vehicles)',
        desc: 'Manitoba Finance tax refund form for snowmobiles, ATVs, and off-road vehicles.',
        url: 'https://www.gov.mb.ca/finance/taxation/pubs/bulletins/rst005.pdf',
        badge: 'Manitoba Gov PDF',
      },
      {
        title: 'How to Import a Vehicle to Canada (RIV Guide)',
        desc: 'Registrar of Imported Vehicles official step-by-step guide for importing vehicles from the USA.',
        url: 'https://www.riv.ca/',
        badge: 'Federal RIV Portal',
      },
      {
        title: 'Insurance Rate Calculator & Autopac Guide',
        desc: 'Official Manitoba Public Insurance Autopac rate guide and premium estimator.',
        url: 'https://www.mpi.mb.ca/wp-content/uploads/Autopac-Rate-Guide.pdf',
        badge: 'Rate Calculator',
      },
      {
        title: 'Full List of Official MPI Forms & Archives',
        desc: 'Direct link to the complete official Manitoba Public Insurance document archives.',
        url: 'https://www.mpi.mb.ca/document-type/forms/',
        badge: 'Full Directory',
      },
    ],
  },
];

export const CARRIERS = [
  { id: '1', name: 'Red River Mutual', logo: '/images/carriers/red-river-mutual.png', url: 'https://redrivermutual.com/' },
  { id: '2', name: 'Sandbox Mutual Insurance', logo: '/images/carriers/sandbox.webp', url: 'https://sandbox.ca/' },
  { id: '3', name: 'SGI Canada', logo: '/images/carriers/sgi-canada.jpg', url: 'https://www.sgicanada.ca' },
  { id: '4', name: 'Optimum General Insurance', logo: '/images/carriers/optimum.webp', url: 'https://www.optimum-general.com' },
  { id: '5', name: 'Milnco Insurance Broker Solution Centre', logo: '/images/carriers/Milnco.jpg', url: 'https://www.milnco.ca/' },
  { id: '6', name: 'Trans Canada Insurance Marketing', logo: '/images/carriers/trans-canada.jpg', url: 'https://www.tcim.ca/' },
  { id: '7', name: 'Premier', logo: '/images/carriers/premier.png', url: 'https://premiergroup.ca' },
  { id: '8', name: 'ABEX Insurance', logo: '/images/carriers/abex.jpg', url: 'https://www.abexinsurance.com/' },
  { id: '9', name: 'Aurora Underwriting Services', logo: '/images/carriers/aurora.png', url: 'https://www.auroraunderwriting.com' },
  { id: '10', name: 'Beacon Underwriting', logo: '/images/carriers/beacon.png', url: 'https://beacon.insure' },
  { id: '11', name: 'CHES Special Risk', logo: '/images/carriers/ches.jpg', url: 'https://www.chesspecialrisk.ca/' },
  { id: '12', name: 'Chutter Underwriting Services', logo: '/images/carriers/chutter.png', url: 'https://www.chutteruw.com' },
  { id: '13', name: 'Totten Insurance Group', logo: '/images/carriers/totten.png', url: 'https://www.tottengroup.com' },
  { id: '14', name: 'ODIS Underwriting Inc', logo: '/images/carriers/odis.jpg', url: 'https://odis.ca/' },
  { id: '15', name: 'PAL Insurance Brokers Canada', logo: '/images/carriers/pal.jpg', url: 'https://www.palcanada.com/' },
  { id: '16', name: 'Risk-Can Underwriting Managers', logo: '/images/carriers/risk-can.webp', url: 'https://www.riskcan.ca/' },
  { id: '17', name: 'Strategic Underwriting Managers', logo: '/images/carriers/strategic.png', url: 'https://www.suminsurance.ca' },
  { id: '18', name: 'Western Surety Company', logo: '/images/carriers/western-surety.jpg', url: 'https://www.westernsurety.ca' },
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

export const COMPANY_HISTORY = [
  {
    year: '1986',
    title: 'The Ficek Family Insurance Business Established',
    subtitle: 'Acquiring A.C. Clark Insurance & Moving to 1102 6th Street',
    desc: "In 1986, Rod and Heather Ficek purchased A.C. Clark Insurance and officially renamed the business Ficek Insurance. In January of 1986, Mr. Clark's insurance office was moved out of his home on 6th Street into Ficek's very first commercial location at 1102 6th Street, where it remained for 26 proud years.",
    location: '1102 6th Street, Brandon',
  },
  {
    year: '1990s',
    title: 'Expanding Brandon Realty & Crang Insurance (Shilo)',
    subtitle: 'Acquisitions & Opening 1439 1st Street',
    desc: 'In the early 1990s, Ficek Insurance expanded by purchasing the insurance division of Brandon Realty. In the late 1990s, the Ficeks purchased Crang Insurance office in Shilo, MB. In 1999, the Shilo location was integrated into Brandon at 1439 1st Street (1st St and Richmond Avenue).',
    location: '1439 1st Street, Brandon',
  },
  {
    year: 'Early 2000s',
    title: 'Second Generation Enters the Family Business',
    subtitle: 'Danon Ficek & Sabrina Bambridge (nee Ficek) Join',
    desc: 'In the early 2000s, Rod and Heather’s children entered the insurance field. Today, two children remain in the business alongside Rod and Heather: Danon Ficek and Sabrina Bambridge (nee Ficek), carrying forward the family legacy of personalized client care.',
    location: 'Family Leadership Expansion',
  },
  {
    year: 'April 2012',
    title: 'Relocating to Murray Chrysler Building',
    subtitle: '1550A Richmond Avenue Opening',
    desc: 'In April of 2012, the 6th Street office was officially relocated into the Murray Chrysler Building in the Murray Auto Group complex at 1550A Richmond Avenue, Brandon.',
    location: '1550A Richmond Ave, Brandon',
  },
  {
    year: 'Present Day',
    title: 'Grown to 10+ Licensed Brokers Across 2 Locations',
    subtitle: '"Let our Family Insure Your Family Like Family"',
    desc: 'From a business that started with Rod and 1 part-time staff member, Ficek Insurance has grown into a team of 10 or more licensed insurance brokers serving Brandon and the Westman area across 2 local offices under our founding motto: "Let our Family Insure Your Family, Like Family."',
    location: 'Brandon & Westman Community',
  },
];

export const TEAM = [
  { name: 'Rod & Heather Ficek', title: 'Owners' },
  { name: 'Danon Ficek', title: 'General Manager' },
  { name: 'Sabrina Bambridge', title: 'Human Resources' },
  { name: 'Beatriz Rodrigues da Silva', title: 'Office Manager' },
  { name: 'Micheal Okunbo', title: 'Administrative Officer' },
  { name: 'Brian Keown', title: 'Insurance Broker' },
  { name: 'Linda Olaojo', title: 'Insurance Broker' },
  { name: 'Brooke McCannell', title: 'Insurance Broker' },
  { name: 'Austin Liske', title: 'Commercial/Personal Lines Insurance Broker' },
  { name: 'Manas Sidana', title: 'Insurance Broker' },
  { name: 'Adrian Calucod', title: 'Insurance Broker' },
  { name: 'Zarina Villanueva', title: 'Insurance Broker' },
];

export const TESTIMONIALS = [
  {
    author: 'Darren M.',
    location: 'Brandon, MB',
    service: 'Auto & MPI Autopac Top-Up',
    rating: 5,
    quote: 'Always quick, friendly, and helpful. They explained the difference between standard MPI Autopac and Sandbox extension, saving our family hundreds while giving us way higher liability protection.',
  },
  {
    author: 'Sarah K.',
    location: 'Shilo / Brandon, MB',
    service: 'Homeowners & Overland Water',
    rating: 5,
    quote: 'Ficek Insurance has handled our home and auto policies for over 12 years. When we had sewer backup water damage during heavy spring rain, their team advocated for our claim immediately. Truly family-style service.',
  },
  {
    author: 'Ken & Linda T.',
    location: 'Westman Ag Producer',
    service: 'Farm Property & Machinery',
    rating: 5,
    quote: 'As farm owners, having brokers who understand agricultural operations and equipment replacement costs is everything. Ficek reviewed our farm policy and found gaps our previous insurer missed.',
  },
  {
    author: 'Tyler R.',
    location: 'Brandon Contractor',
    service: 'Commercial General Liability',
    rating: 5,
    quote: 'Fast turnaround on commercial certificates of insurance whenever our job sites require them. The team at both 1st Street and 18th Street are absolute pros.',
  },
];


export const SEO_ISSUES = [
  {
    id: '01',
    severity: 'critical',
    title: 'Missing Meta Descriptions',
    summary: 'Zero meta descriptions on any page. Google writes your snippets.',
    fixedIn: true,
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
    fixedIn: true,
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
