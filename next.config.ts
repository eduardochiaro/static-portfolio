import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true
 //basePath: '/portfolio',
  /* config options here */
};

export default nextConfig;
