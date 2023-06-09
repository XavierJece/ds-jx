module.exports = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      loader: require.resolve("@storybook/source-loader"),
    },
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/ds-jx/";
    }

    return config;
  },
};
