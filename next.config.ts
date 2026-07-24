import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   cacheComponents: true,
   images: {
    remotePatterns: [
      { hostname: "typeofnan.dev" },
      { hostname: "example.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
