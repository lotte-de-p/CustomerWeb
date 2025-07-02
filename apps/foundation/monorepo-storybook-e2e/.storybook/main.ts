const rootMain = require('../../monorepo-storybook/.storybook/main.ts');

const config = {
  ...rootMain,
  staticDirs: [
    { from: '../../monorepo-storybook/src/assets', to: '/assets' },
    { from: '../../../../node_modules/atomic-library/public', to: '/assets' },
  ],
  refs: {},
};

module.exports = config;
