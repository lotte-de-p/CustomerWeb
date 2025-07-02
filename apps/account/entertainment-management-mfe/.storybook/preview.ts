// @ts-ignore
import { apiConfig } from './apiConfig';
import { handleCustomEvents } from './customEvents';

const rootPreview = require('../../../../.storybook/preview');
export const parameters = {
  ...rootPreview.parameters,
  backgrounds: {
    default: 'dark-ui',
  },
};

export const globalTypes = {
  environment: {
    description: 'Environment to be used for API calls',
    defaultValue: 'Mock',
    toolbar: {
      title: 'Mock',
      icon: 'cog',
      items: ['Mock', 'INT', 'UAT'],
      dynamicTitle: true,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'nl', right: '🇧🇪', title: 'Nederlands' },
      ],
      showName: true,
    },
  },
};

export const decorators = [apiConfig, handleCustomEvents];
