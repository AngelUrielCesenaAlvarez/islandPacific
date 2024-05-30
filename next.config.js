const path = require('path');

module.exports = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
};
