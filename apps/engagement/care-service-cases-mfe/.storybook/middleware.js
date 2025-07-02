const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '/styles',
    createProxyMiddleware({
      target: 'https://atomic.prd.apps.telenet.be',
      changeOrigin: true,
    })
  );
};
