import { apiConfig } from './apiConfig';
import { handleCustomEvents } from './customEvents';

const rootPreview = require('../../../../.storybook/preview');
export const parameters = {
  ...rootPreview.parameters,
  backgrounds: {
    default: 'light',
  },
  mockAddonConfigs: {
    globalMockData: [],
    ignoreQueryParams: true,
  },
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
  brand: {
    name: 'Brand',
    description: 'Brand',
    defaultValue: 'telenet',
    toolbar: {
      icon: 'document',
      title: 'Telenet',
      items: [
        { value: 'telenet', right: '', title: 'Telenet' },
        { value: 'base', right: '', title: 'Base' },
      ],
      dynamicTitle: true,
      showName: true,
    },
  },
};

export const decorators = [apiConfig, handleCustomEvents];
