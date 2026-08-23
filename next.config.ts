import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // TODO: When deploying with real Vertex AI / Firebase Storage image hosts,
  // add their hostnames to images.remotePatterns above for next/image optimization.
};

export default nextConfig;
