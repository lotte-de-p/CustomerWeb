import CypressDefaultWebpack from '@tools/webpack';

export default {
  ...CypressDefaultWebpack(require('path').join(__dirname, 'src')),
};
