const withPWA = require("next-pwa")({
    dest: "public",
});

const nextConfig = withPWA({
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/dkeghqshh/image/upload/v1612975699/',
    },
    webpack: (config, { isServer }) => {
        return config;
    },
});

module.exports = nextConfig;