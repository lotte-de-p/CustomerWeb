const path = require('path');
export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: { esModules: true, debug: true },
        enforce: 'post',
        include: [
          path.join(__dirname, '..', 'demo-mfe'),
          path.join(__dirname, '..', 'demo-mfe-e2e'),
          path.join(__dirname, '..', '..', '..', 'libs/foundation/demo'),
        ],
        exclude: [/\.(spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/, /polyfills.ts/],
      },
    ],
  },
};
