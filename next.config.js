/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/:lang(en|es)', destination: '/', permanent: false },
      { source: '/:lang(en|es)/:path*', destination: '/:path*', permanent: false }
    ];
  }
};

module.exports = nextConfig;
