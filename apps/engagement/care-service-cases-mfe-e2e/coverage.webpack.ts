import * as path from 'path';

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: { esModules: true },
        enforce: 'post',
        include: [
          path.join(__dirname, '..', 'care-service-cases-mfe/src'),
          path.join(__dirname, '..', '..', '..', 'libs/engagement/care-service-cases'),
        ],
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
      },
    ],
  },
};
