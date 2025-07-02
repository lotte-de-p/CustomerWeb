import { addons } from '@storybook/manager-api';
import winkTheme from './wink-theme';

addons.setConfig({
  theme: winkTheme,
  sidebar: {
    filters: {
      hidden: (item) => !item.tags?.includes('hidden'),
    },
  },
});
