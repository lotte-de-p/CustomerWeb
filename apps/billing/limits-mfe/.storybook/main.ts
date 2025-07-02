const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../../libs/billing/shared/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../../libs/billing/limits/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...rootMain.addons],
  staticDirs: [
    { from: '../../../../node_modules/atomic-library/public/fonts', to: '/assets/fonts' },
    { from: '../../../../node_modules/atomic-library/public/styles', to: '/assets/atomic' },
    { from: './dam', to: '/content/dam/www-telenet-touch/nl/dfd' },
  ],
  features: {
    buildStoriesJson: true,
  },
};
