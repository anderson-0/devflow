/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    mdxRs: true, // compile mds files using the new rust compiler
    serverComponentsExternalPackages: ["mongoose"], // Dependencies used inside Server Components and Route Handlers will automatically be bundled by Next.js.
  },
};

module.exports = nextConfig;
