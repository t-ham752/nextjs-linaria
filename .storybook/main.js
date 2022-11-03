module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    // ...
    // enable linaria's css to be loaded as it is modified
    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve("linaria/loader"),
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
            ...(config.linaria || {}),
            extension: ".linaria.module.css",
          },
        },
      ],
    });
    // ....
    return config;
  },
};
