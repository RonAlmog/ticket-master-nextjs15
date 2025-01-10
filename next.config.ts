import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "google.ca",
        port: "",
        pathname: "/",
        search: "",
      },
      {
        protocol: "https",
        hostname: "strong-clownfish-676.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
