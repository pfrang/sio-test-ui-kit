import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack: function (config) {
    // The following config ensures the .svg's are loaded as React components
    // For reference: https://github.com/storybookjs/storybook/issues/18557#issue-1283251290

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
        {
          loader: "file-loader",
          options: {
            name: "static/[path][name].[ext]",
          },
        },
      ],
      type: "javascript/auto",
    });

    return config;
  },
};

export default nextConfig;
