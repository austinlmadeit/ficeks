/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/claims',
        destination: '/contact',
        permanent: false,
      },
      {
        source: '/dev-notes',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
