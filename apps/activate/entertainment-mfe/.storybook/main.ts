import type { StorybookConfig } from '@storybook/angular';

const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [...rootMain.stories, '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [...rootMain.addons],
  staticDirs: [
    '../src/assets',
    { from: '../../../../node_modules/atomic-library/public', to: '/assets' },
    { from: '../src/assets', to: '/assets' },
  ],
  webpackFinal: async (config: StorybookConfig, { configType }: { configType: object }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.ts
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
  features: {
    buildStoriesJson: true,
  },
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
