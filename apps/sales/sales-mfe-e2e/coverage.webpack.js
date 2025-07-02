const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: { esModules: true, debug: true },
        enforce: 'post',
        include: [
          path.join(__dirname, '..', 'sales-mfe'),
          path.join(__dirname, '..', 'sales-mfe-e2e'),
          path.join(__dirname, '..', '..', '..', 'libs/sales'),
        ],
        exclude: [/\.(spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/, /polyfills.ts/],
      },
    ],
  },
};
