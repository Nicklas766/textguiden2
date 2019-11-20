require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    const originalEntry = config.entry;
    config.entry = async () => {
        const entries = await originalEntry();

        if (entries['main.js'] && !entries['main.js'].includes('./polyfills.js')) {
            entries['main.js'].unshift('./polyfills.js');
        }

        return entries;
    };

    return config;
  },
  experimental: { publicDirectory: true }
}