import { apiConfig } from './apiConfig';

const rootPreview = require('../../../../.storybook/preview');
export const parameters = {
  ...rootPreview.parameters,
  backgrounds: {
    default: 'light',
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
};

export const decorators = [apiConfig];
