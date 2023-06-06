import { themes } from '@storybook/theming';


const preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    layout: 'fullscreen',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;