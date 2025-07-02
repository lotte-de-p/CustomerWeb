export default {
  displayName: 'fleet-data-access',
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/libs/fleet/account/data-access',
  coveragePathIgnorePatterns: [
    'node_modules',
    '.module.ts',
    'test-setup.ts',
    'jest.config.ts',
    '.interface.ts',
    'index.ts',
    'providers.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 60,
      branches: 0,
      functions: 39,
      lines: 60,
    },
  },
};
