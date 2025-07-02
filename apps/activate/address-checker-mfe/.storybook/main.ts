const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [...rootMain.stories, '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons],
  staticDirs: ['../src/assets', { from: '../../../../node_modules/atomic-library/public', to: '/assets' }],
};
