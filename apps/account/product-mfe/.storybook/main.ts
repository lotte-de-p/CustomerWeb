const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [...rootMain.stories, '../src/app/**/*.stories.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons],
  staticDirs: [
    {
      from: '../src/assets/i18n',
      to: '/assets/i18n',
    },
    {
      from: '../src/assets/content',
      to: '/content',
    },
    { from: '../../../../node_modules/atomic-library/public/fonts', to: '/assets/fonts' },
  ],
};
