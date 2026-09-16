export default function sitemap() {
  const baseUrl = 'https://ficekinsurance.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const serviceSlugs = [
    'auto-insurance',
    'home-insurance',
    'business-insurance',
    'farm-insurance',
    'life-insurance',
    'condo-insurance',
    'travel-insurance',
    'boats-marine',
    'toys-bikes-orvs',
  ];

  const staticPages = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about/our-team`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about/locations`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/quote`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/claims`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/mpi-forms`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tools`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages = serviceSlugs.map(slug => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: slug === 'auto-insurance' ? 0.9 : 0.8,
  }));

  return [...staticPages, ...servicePages];
}
