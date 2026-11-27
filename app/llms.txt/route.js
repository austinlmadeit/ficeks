import { SITE, OFFICES, SERVICES, CARRIERS, NAV } from '@/lib/data';

// Serves /llms.txt: a plain-text summary of the business for AI assistants
// (format: https://llmstxt.org). Built from lib/data.js so it always matches
// the website; edit the data there, not here. Prerendered at build time.
export const dynamic = 'force-static';

const BASE = 'https://www.ficekinsurance.com';

export function GET() {
  const calculator = NAV.flatMap((item) => item.children || []).find((c) => c.external && /calculator/i.test(c.label));

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description} We compare coverage across ${CARRIERS.length} insurance carriers and underwriting partners to find clients the right policy.`,
    '',
    '## Offices',
    '',
    ...OFFICES.map((o) => `- ${o.name}${o.id === 'main' ? ' (main office)' : ''}: ${o.full}. Phone ${o.phone}. Hours: ${o.hours}.`),
    `- Email: ${SITE.email}`,
    `- [Find Us](${BASE}/find-us): directions, landmarks, parking and photos for both offices`,
    '',
    '## Insurance',
    '',
    ...SERVICES.map((s) => `- [${s.title}](${BASE}/services/${s.slug}): ${s.summary}`),
    '',
    '## Carrier partners',
    '',
    CARRIERS.map((c) => c.name).join(', '),
    '',
    '## Key pages',
    '',
    `- [Request a quote](${BASE}/quote): free, no-obligation quote request reviewed by a licensed broker`,
    `- [Contact](${BASE}/contact): phone, email and contact form`,
    `- [About](${BASE}/about): company history`,
    `- [Our team](${BASE}/about/our-team): brokers and staff`,
    `- [MPI forms and documents](${BASE}/resources/mpi-forms): Manitoba Public Insurance forms and guides`,
    ...(calculator ? [`- [Autopac rate calculator](${calculator.href}): Manitoba Public Insurance's online premium estimator`] : []),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
