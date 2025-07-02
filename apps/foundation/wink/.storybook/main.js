import { dirname, join } from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

function getLocalStaticDirs() {
  return [{ from: '../../../../libs/foundation/wink/dist/www', to: '/' }];
}

const config = {
  stories: [
    '../src/app/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../../libs/foundation/wink/core/src/components/**/*.stories.tsx',
  ],
  addons: [
    {
      name: getAbsolutePath('@storybook/addon-essentials'),
      options: {
        actions: false,
      },
    },
    getAbsolutePath('@storybook/addon-a11y'),
    '@whitespace/storybook-addon-html',
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@geometricpanda/storybook-addon-badges'),
  ],
  staticDirs: getLocalStaticDirs(),
  framework: {
    name: getAbsolutePath('@storybook/web-components-webpack5'),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  core: {
    builder: {
      name: getAbsolutePath('@storybook/builder-webpack5'),
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  webpackFinal: async (config, { configType }) => {
    const rules = config.module?.rules || [];

    rules.push({
      test: /\.(js|ts|tsx)$/,
      exclude: [
        /^.*\/dist\/.*/,
        /\.(spec)\.ts$/,
        /.storybook\/.*/,
        /(ngfactory|ngstyle)\.js/,
        /node_modules/,
        /polyfills.ts/,
      ],
      use: {
        loader: 'babel-loader',
        options: {
          sourceType: 'unambiguous',
          presets: [
            '@babel/preset-react',
            [
              '@babel/preset-env',
              {
                targets: {
                  chrome: 100,
                  safari: 15,
                  firefox: 91,
                },
              },
            ],
            ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
          ],
          plugins: ['istanbul'],
        },
      },
    });
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: 'apps/foundation/wink/tsconfig.json',
      }),
    ];

    return config;
  },
};
export default config;
