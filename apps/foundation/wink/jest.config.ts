/* eslint-disable */
export default {
  displayName: 'wink',
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/apps/foundation/wink',
  coveragePathIgnorePatterns: ['./src/*.decorator.ts'],
  transformIgnorePatterns: ['../../../node_modules/(?!@telenet/wink.*)'],
};
