const path = require('path');

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    loader: 'default',
    domains: [],
  },
  webpack: (config) => {
    // 👉 ONLY apply custom loaders to .prismcss virtual extension
    config.module.rules.push({
      test: /\.prismcss$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
};
