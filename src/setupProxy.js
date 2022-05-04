const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/shipments',
    createProxyMiddleware({
      target: 'http://localhost:8801',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/products',
    createProxyMiddleware({
      target: 'http://localhost:8800',
      changeOrigin: true,
    })
  );
};