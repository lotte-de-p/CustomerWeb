const rootMain = require('../../../../.storybook/main');

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: 'webpack5' },
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../../libs/foundation/demo/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [...rootMain.addons],
  staticDirs: ['../src/assets', { from: '../../../../node_modules/atomic-library/public', to: '/assets' }],
  webpackFinal: async (config, { configType }) => {
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
