/* eslint-disable @typescript-eslint/no-var-requires */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      analyzerPort: 7007,
      openAnalyzer: false,
    }));
    return config;
  },
};
