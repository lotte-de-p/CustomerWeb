const rootPreview = require('../../../../.storybook/preview');
import { create } from '@storybook/theming';
import { apiConfig } from './apiConfig';

const lightTheme = create({
  brandTitle: 'Base',
  base: 'light',
  appBg: 'white',
  colorPrimary: '#00807b',
  colorSecondary: '#00807b',
  barSelectedColor: '#00807b',
  barBg: '#f1f1f1',
  brandImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/BASE_logo.svg',
});
const darkTheme = create({
  brandTitle: 'Base',
  base: 'dark',
  appBg: '#232323',
  barSelectedColor: '#00807b',
  colorPrimary: '#00807b',
  colorSecondary: '#00807b',
  appContentBg: '#4f4f4f',
  barBg: '#232323',
  brandImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/BASE_logo.svg',
});

export const parameters = {
  ...rootPreview.parameters,
  darkMode: { ...rootPreview.parameters.darkMode, light: lightTheme, dark: darkTheme },
  docs: { theme: lightTheme },
};

export const globalTypes = {
  environment: {
    description: 'Environment to be used for API calls',
    defaultValue: 'Mock',
    toolbar: {
      title: 'Mock',
      icon: 'cog',
      items: ['Mock', 'INT'],
      dynamicTitle: true,
    },
  },
};

export const decorators = [apiConfig];
