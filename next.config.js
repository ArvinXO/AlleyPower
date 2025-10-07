/** @type {import('next').NextConfig} */
const ONE_YEAR = 60 * 60 * 24 * 365;

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ["error"],
    } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      // Caching for static assets
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|webp|avif)",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      {
        source: "/:all*(mp4|webm)",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      {
        source: "/:all*(js|css|woff|woff2)",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
        ],
      },
      // Security headers (duplicated by middleware CSP for nonce; these are baseline)
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
