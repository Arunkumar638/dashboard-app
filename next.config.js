
// const {NextFederationPlugin} = require('@module-federation/nextjs-mf');

// module.exports = {
//   webpack(config, options) {
//     const { isServer } = options;
//     config.module.rules.push({
//       test: /\.html$/,
//       use: 'html-loader',
//     });
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'dashboardApp',
//         filename: `_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
//         exposes: {
//           './dashboard': './src/app/page.tsx',
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: '^17.0.0' },
//           'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
//         },
//       })
//     );

//     return config;
//   },
// };

// const {NextFederationPlugin} = require('@module-federation/nextjs-mf');
// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode:true,
//   webpack(config, options) {
//     const { isServer } = options;
//     config.module.rules.push({
//       test: /\.html$/,
//       use: 'html-loader',
//     });
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: 'dashboardApp',
//         filename: 'static/chunks/remoteEntry.js',
//         exposes: {
//          './dashboard':'./src/app/page.tsx'
//         },
//         shared: {
//           react: { singleton: true, requiredVersion: '^17.0.0' },
//           'react-dom': { singleton: true, requiredVersion: '^17.0.0' },
//         },
//       })
//     );

//     return config;
//   },
// };

/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([withImages], {
  experimental: {
    outputStandalone: true,
},
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'html-loader',
    });
    return config;
  },
});