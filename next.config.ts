import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Ignore .d.ts files
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'ignore-loader'
    });

    return config;
  }
  /* config options here */
};

export default nextConfig;
