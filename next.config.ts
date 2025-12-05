import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  async redirects() {
    return [
      // 301 Redirect for the structural change: /news/[slug] to /resources/byte-articles/[slug]
      {
        source: "/news/:slug",
        destination: "/resources/byte-articles/:slug",
        permanent: true, // This sets the 301 status code
      },
    ];
  },
};

export default nextConfig;
