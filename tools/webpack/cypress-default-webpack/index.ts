import webpack from 'webpack';

const CypressDefaultWebpack = function createWebpackConfig(
  pathToInstrument: string,
  options: { rules?: any[]; devServer?: { [key: string]: unknown } } = {}
) {
  const defaultConfig = {
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          loader: '@jsdevtools/coverage-istanbul-loader',
          options: { esModules: true },
          enforce: 'post',
          include: [pathToInstrument],
          exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: require('./post-css.config.ts'),
              },
            },
          ],
        },
        // Add any other rules you might have
      ],
    },
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        process: require.resolve('process/browser'), // Make sure this line is correct
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        global: require.resolve('globalthis'),
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
    devServer: {
      proxy: {
        '/assets/': {
          target: 'http://127.0.0.1:8080',
          secure: false,
          changeOrigin: true,
          pathRewrite: { '^/assets/': '/__cypress/src/assets/' },
        },
      },
    },
  };

  // Extend default rules and devServer config with custom options if provided
  if (options.rules) {
    defaultConfig.module.rules.push(...options.rules);
  }
  if (options.devServer) {
    Object.assign(defaultConfig.devServer, options.devServer);
  }

  return defaultConfig;
};

export default CypressDefaultWebpack;
