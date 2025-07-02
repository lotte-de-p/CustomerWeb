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
          path.join(__dirname, '..', 'return-devices-mfe'),
          path.join(__dirname, '..', '..', '..', 'libs/install/return-devices'),
        ],
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
      },
    ],
  },
};
