
// const path = require('path');

// const config = {
//   resolve: {
//     // entry: './src',
//     extensions: ['.ts', '.tsx', '.js'],
//     alias: {
//       Styles: path.resolve(__dirname, './src/styles'),
//       Stories: path.resolve(__dirname, './src/stories'),
//       Routes: path.resolve(__dirname, './src/routes'),
//       Modules: path.resolve(__dirname, './src/modules'),
//       Pages: path.resolve(__dirname, './src/pages'),
//       Hooks: path.resolve(__dirname, './src/hooks'),
//       Elements: path.resolve(__dirname, './src/elements'),
//       Components: path.resolve(__dirname, './src/components'),
//       Apis: path.resolve(__dirname, './src/apis'),
//       Assets: path.resolve(__dirname, './src/assets'),
//       Types: path.resolve(__dirname, './src/types'),
//     },
//   },

//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//           use: [
//             {
//               loader: require.resolve("babel-loader"),
//               options: {
//                 presets: [["react-app", { flow: false, typescript: true }]],
//                 plugins: [
//                   [
//                     require.resolve("babel-plugin-named-asset-import"),
//                     {
//                       loaderMap: {
//                         svg: {
//                           ReactComponent: "@svgr/webpack?-svgo,+titleProp,+ref![path]"
//                         }
//                       }
//                     }
//                   ]
//                 ]
//               }
//             },
//             require.resolve("react-docgen-typescript-loader")
//           ]
//       },
//     ],
//   },
// };

// module.exports = config;