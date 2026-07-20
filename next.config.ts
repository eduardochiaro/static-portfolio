import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // src/data is a symlink into ../eduardochiaro.com-data; widen root so Turbopack accepts it
  turbopack: { root: path.join(__dirname, '..') },
  //basePath: '/portfolio',
  /* config options here */
};

export default nextConfig;
