import * as path from 'path';

export default {
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: '@jsdevtools/coverage-istanbul-loader',
        options: { esModules: true },
        enforce: 'post',
        include: [path.join(__dirname, '..', 'limits-mfe/src'), path.join(__dirname, '..', '..', '..', 'libs/billing')],
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
      },
    ],
  },
};
