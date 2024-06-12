/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: () => [
    {
      source: '/my-issues',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],};

export default nextConfig;
