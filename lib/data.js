// Ficek Insurance — shared site data
// All content lives here so it's easy to update without touching page files

export const SITE = {
  name: 'Ficek Insurance',
  tagline: 'Protection for your world',
  taglineLong: "Brandon's independent insurance broker since 1986",
  description:
    'Family-owned independent insurance brokerage serving Brandon, Manitoba and surrounding communities since 1986. Home, auto, commercial, farm and life insurance.',
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
  founded: 1986,
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
      'Sandbox Auto Insurance',
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
      'High-Value Homes',
      'Mobile Homes',
      'Vacant Property',
    ],
  },
  {
    slug: 'business-insurance',
    title: 'Commercial & Business Insurance',
    icon: '🏢',
    summary:
      'Comprehensive commercial coverage for businesses of all sizes. Protect your operations, property, and team with tailored business insurance.',
    coverageItems: [
      'Commercial Property',
      'Commercial General Liability (CGL)',
      'Business Interruption',
      'Commercial Auto',
      'Employee Benefits',
      'Errors & Omissions',
      'Special Risk Extension (SRE)',
      'Course of Construction',
      'Trades Packages',
      'Vacant Commercial Property',
    ],
  },
  {
    slug: 'farm-insurance',
    title: 'Farm Insurance',
    icon: '🌾',
    summary:
      'Farm and agricultural insurance for Manitoba producers. Protect your land, livestock, equipment, and livelihood.',
    coverageItems: [
      'Farm dwelling & structures',
      'Livestock coverage',
      'Farm equipment',
      'Crop insurance',
      'Comprehensive Farmer\'s/Agricultural liability',
      'Vacant Property',
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
    title: 'Condo Insurance',
    icon: '🏙️',
    summary:
      'Coverage designed specifically for condo owners, protecting what your condo corporation doesn\'t cover.',
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
    desc: 'In the early 1990s, Ficek Insurance expanded by purchasing the insurance division of Brandon Realty. In the late 1990s, the Ficeks purchased Crang Insurance office in Shilo, MB. In 1999, the Shilo location moved to Brandon on 1st & Richmond to bring two locations to Brandon to serve our community better.',
    location: '1439 1st Street, Brandon',
  },
  {
    year: 'Early 2000s',
    title: 'The Next Generation Joins the Family Business',
    subtitle: 'Danon Ficek Joins Leadership',
    desc: 'In the early 2000s, Danon Ficek joined the family business. Danon was responsible for modernizing Ficek Insurance, bringing new technology, streamlined processes, and a fresh perspective that positioned the brokerage for long-term growth. Today, Danon continues to work alongside Rod and Heather, carrying forward the family legacy of personalized client care.',
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
    title: 'Expanding to 1525B 18th Street Brandon, MB',
    subtitle: 'Serving the Evolving Needs of Our Community',
    desc: "To serve the evolving needs of our community, Ficek Insurance expanded into a larger, convenient location at 1525B 18th Street between Humpty's Diner & South End Service in Brandon. Operating across two convenient local offices with a team of licensed brokers, we continue our commitment to personal service and competitive rates.",
    location: '1525B 18th Street, Brandon',
  },
];

export const TEAM = [
  { name: 'Danon Ficek', title: 'General Manager', image: '/images/staff photos/Danon_Ficek_13.jpg' },
  { name: 'Beatriz Rodrigues da Silva', title: 'Office Manager', image: '/images/staff photos/Beatriz_Rodrigues da Silva_12.jpg' },
  { name: 'Rod Ficek', title: 'Owner', image: '/images/staff photos/Rod_Ficek_14.jpg' },
  { name: 'Adrian Calucod', title: 'Insurance Broker', image: '/images/staff photos/Adrian_Calucod_9.jpg' },
  { name: 'Austin Liske', title: 'Commercial/Personal Lines Insurance Broker', image: '/images/staff photos/Austin_Liske_4.jpg' },
  { name: 'Brian Keown', title: 'Insurance Broker', image: '/images/staff photos/Brian_Keown_7.jpg' },
  { name: 'Brooke McCannell', title: 'Insurance Broker', image: '/images/staff photos/Brooke_McCannell_8.jpg' },
  { name: 'John Paul Apeh', title: 'Insurance Broker', image: '/images/staff photos/John_Paul Apeh_10.jpg' },
  { name: 'Linda Olaojo', title: 'Insurance Broker', image: '/images/staff photos/Linda_Olaojo_6.jpg' },
  { name: 'Manas Sidana', title: 'Insurance Broker', image: '/images/staff photos/Manas_Sidana_2.jpg' },
  { name: 'Micheal Okunbo', title: 'Administrative Officer', image: '/images/staff photos/Micheal_Okunbo_1.jpg' },
  { name: 'Shawn Major', title: 'Insurance Broker', image: '/images/staff photos/Shawn_Major_5.jpg' },
  { name: 'Shreya Shreya', title: 'Insurance Broker', image: '/images/staff photos/Shreya_Shreya_11.jpg' },
  { name: 'Zarina Villanueva', title: 'Insurance Broker', image: '/images/staff photos/Zarina_Delle Villanueva_3.jpg' },
];

export const TESTIMONIALS = [
  {
    author: 'Austin Liske',
    location: '1439 1st Street, Brandon',
    service: 'Verified Google Review',
    rating: 5,
    date: '2 months ago',
    quote: 'Knowledgeable staff who care about your insurance needs, look no further. Would recommend.',
  },
  {
    author: 'Maddy',
    location: '1525 18th Street, Brandon',
    service: 'Home & Tenant Insurance',
    rating: 5,
    date: '10 months ago',
    quote: 'Linda was amazing to work with friendly, patient, and incredibly helpful. She explained everything clearly and made the whole process easy and stress-free. I’d highly recommend her to anyone!',
  },
  {
    author: 'Gautam Vastava',
    location: '1439 1st Street, Brandon',
    service: 'Auto & Client Care',
    rating: 5,
    date: '11 months ago',
    quote: 'The gentleman at the front helped me out of a stressful situation with care and patience. I felt at ease once I left the store because he took the time to understand my concern with my insurance dilemma and solved it for me. THANK YOU.',
  },
  {
    author: 'Jeff Mcphail',
    location: '1525 18th Street, Brandon',
    service: 'Commercial & Business',
    rating: 5,
    date: '3 years ago',
    quote: 'These guys are unreal at what they do, every small business should have Ficek handle there insurance needs. They have gone above and beyond for me. Great Job!!!',
  },
  {
    author: 'Trish Boggs',
    location: '1525 18th Street, Brandon',
    service: 'Tenant & Online Application',
    rating: 5,
    date: '2 years ago',
    quote: 'I had been looking for tenant insurance for a while and was very pleasantly surprised when I found I was able to apply and pay for the policy right on line! So happy, and a really good price, thank you!',
  },
  {
    author: 'Charles Rempel',
    location: '1525 18th Street, Brandon',
    service: 'Auto Insurance & MPI',
    rating: 5,
    date: '8 years ago',
    quote: 'Great customer service and always willing to go that extra mile. Forgot to renew my auto insurance one time and they stayed late to process everything so I could get back on the road.',
  },
  {
    author: 'Carter Weibe',
    location: '1525 18th Street, Brandon',
    service: 'Verified Google Review',
    rating: 5,
    date: '5 months ago',
    quote: 'Friendly, courteous staff. Some longer waits, but have always pulled through.',
  },
  {
    author: 'Reid Procyshyn',
    location: '1525 18th Street, Brandon',
    service: 'Customer Service & Payment Plans',
    rating: 5,
    date: '5 years ago',
    quote: 'Super friendly staff. Location is great and close to where I\'m staying on top of that. Cleaning and precautions are followed by all staff. Their work is done efficiently and suggestions for future as well as plans for payment are Much appreciated.',
  },
  {
    author: 'J.Brown',
    location: '1525 18th Street, Brandon',
    service: 'Customer Service',
    rating: 5,
    date: '3 years ago',
    quote: 'Great team over there , they answered all my questions and had me back out the door in no time , great job peeps.',
  },
  {
    author: 'derek gross',
    location: '1525 18th Street, Brandon',
    service: 'Verified Google Review',
    rating: 5,
    date: 'a year ago',
    quote: 'Nice people to deal with. Insurance is stressful job and they dont show it.',
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
