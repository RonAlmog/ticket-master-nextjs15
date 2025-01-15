import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ticket-master-nextjs15.vercel.app",
      },
      {
        protocol: "https",
        hostname: "strong-clownfish-676.convex.cloud",
      },
      {
        protocol: "https",
        hostname: "groovy-ferret-147.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
