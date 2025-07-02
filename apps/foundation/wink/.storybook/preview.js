import { defineCustomElements } from '@telenet/wink-core/loader';
import { brandGlobalTypes, brandsSwitcherDecorator } from '../src/decorators/brands-switcher.decorator';
import { BADGES } from '@wink/models';
import { themeGlobalTypes, themesSwitcherDecorator } from '../src/decorators/themes-switcher.decorator';
import { cleanUpHtmlToCopy } from '../src/utils/utils';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    badgesConfig: {
      [BADGES.new]: {
        styles: {
          backgroundColor: '#e1fff0',
          borderColor: 'rgba(33,33,33,.15)',
          color: 'rgba(33,33,33,1)',
        },
        title: 'New',
      },
      [BADGES.ready]: {
        styles: {
          backgroundColor: '#e1fff0',
          borderColor: 'rgba(33,33,33,.15)',
          color: 'rgba(33,33,33,1)',
        },
        title: 'Ready',
      },
      [BADGES.inProgress]: {
        styles: {
          backgroundColor: '#e2f1ff',
          borderColor: '#21212126',
          color: '#212121',
        },
        title: 'In progress',
      },
      [BADGES.toDo]: {
        styles: {
          backgroundColor: 'rgba(255, 252, 195, 1)',
          borderColor: 'rgba(33,33,33,.15)',
          color: 'rgba(33,33,33,1)',
        },
        title: 'To do',
      },
      [BADGES.deprecated]: {
        styles: {
          backgroundColor: 'rgba(255,233,232,1)',
          borderColor: 'rgba(33,33,33,.15)',
          color: 'rgba(33,33,33,1)',
        },
        title: 'Deprecated',
      },
      [BADGES.beta]: {
        styles: {
          backgroundColor: 'rgba(242,241,242,1)',
          borderColor: 'rgba(33,33,33,.15)',
          color: 'rgba(33,33,33,1)',
        },
        title: 'Beta',
      },
      [BADGES.na]: {
        styles: {
          backgroundColor: 'rgba(242,241,242,1)',
          borderColor: 'rgba(33,33,33,.15)',
          color: 'rgba(33,33,33,1)',
        },
        title: 'N/A',
      },
    },
    controls: {
      sort: 'none',
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      root: '#root-inner',
      removeComments: true,
      highlighter: {
        showLineNumbers: true,
      },
      transform: (code) => cleanUpHtmlToCopy(code),
    },
    options: {
      storySort: {
        order: ['COMPONENTS', '*'],
      },
    },
  },
};

defineCustomElements(window);

export default preview;

export const globalTypes = {
  brand: brandGlobalTypes,
  theme: themeGlobalTypes,
};

export const decorators = [brandsSwitcherDecorator, themesSwitcherDecorator];
