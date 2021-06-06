const path = require("path");
const fs = require("fs");
const { merge } = require("webpack-merge");

function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, "package.json"))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          "@emotion/core": getPackageDir("@emotion/react"),
          "@emotion/styled": getPackageDir("@emotion/styled"),
          Styles: path.resolve(__dirname, '../src/styles'),
          Stories: path.resolve(__dirname, '../src/stories'),
          Routes: path.resolve(__dirname, '../src/routes'),
          Slices: path.resolve(__dirname, '../src/slices'),
          Pages: path.resolve(__dirname, '../src/pages'),
          Hooks: path.resolve(__dirname, '../src/hooks'),
          Elements: path.resolve(__dirname, '../src/elements'),
          Components: path.resolve(__dirname, '../src/components'),
          Apis: path.resolve(__dirname, '../src/apis'),
          Assets: path.resolve(__dirname, '../src/assets'),
          Types: path.resolve(__dirname, '../src/types'),
        },
      },
    });
  },
}