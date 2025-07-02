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
          path.join(__dirname, '..', 'profile-management-mfe'),
          path.join(__dirname, '..', 'profile-management-mfe-e2e'),
          path.join(__dirname, '..', '..', '..', 'libs/engagement/profile-management'),
        ],
        exclude: [/\.(spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/, /polyfills.ts/],
      },
    ],
  },
};
