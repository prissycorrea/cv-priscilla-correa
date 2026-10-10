import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the root: a stray package-lock.json in the home folder confuses detection
  turbopack: { root: __dirname },
};

export default nextConfig;
