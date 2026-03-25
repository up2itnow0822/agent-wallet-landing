import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output for Vercel deployment
  output: "standalone",
  // Allow iframes from demo site
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
