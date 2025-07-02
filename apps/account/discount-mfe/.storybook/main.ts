import type { StorybookConfig } from '@storybook/angular';

const rootMain = require('../../../../.storybook/main.js');

const config: StorybookConfig = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: ['../src/app/**/*.stories.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons],
  staticDirs: ['../src', { from: '../../../../node_modules/atomic-library/public', to: '/assets' }],
};

module.exports = config;
