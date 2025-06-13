const path = require('path');

module.exports = {
    output: 'export', // ✅ Enables static HTML export
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        unoptimized: true,
        loader: 'default',
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
