const rootMain = require('../../../../.storybook/main');
module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../../../../libs/engagement/inbox-messages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  addons: [...rootMain.addons],

  staticDirs: ['../src/assets', { from: '../../../../node_modules/atomic-library/public', to: '/assets' }],

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpackFinal: async (config: any, { configType }: any) => {
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    return config;
  },
};
