export default {
  displayName: 'step-flow',
  preset: '../../../jest.preset.js',
  coverageDirectory: '../../../coverage/libs/@telenet/ng-lib-step-flow',
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 38,
      functions: 85,
      lines: 85,
    },
  },
};
