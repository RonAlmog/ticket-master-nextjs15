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
    ],
  },
};

export default nextConfig;
