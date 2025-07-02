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
          path.join(__dirname, '..', 'entertainment-mfe'),
          path.join(__dirname, '..', '..', '..', 'libs/activate/entertainment'),
        ],
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
      },
    ],
  },
};
