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
          path.join(__dirname, '..', 'address-checker-mfe/src'),
          path.join(__dirname, '..', '..', '..', 'libs/activate/address-checker'),
        ],
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /(ngfactory|ngstyle)\.js/],
      },
    ],
    devtool: 'inline-source-map',
  },
};
