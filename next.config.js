const path = require('path');

const nextConfig = {
  output: 'export',          // static HTML export
  reactStrictMode: false,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
    loader: 'default',
  },

  // You *can* add a turbopack section if you ever need custom rules,
  // but for Prism + CSS you don't need anything here.
  // turbopack: {
  //   rules: {
  //     // custom loader rules go here if you ever need them
  //   },
  // },
};

module.exports = nextConfig;