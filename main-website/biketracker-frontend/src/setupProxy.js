const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv').config()
module.exports = function(app) {
  app.use(
    '/styles',
    createProxyMiddleware({
      target: process.env.MAPTILER_URL,
      changeOrigin: true,
    })
  );
  app.use(
    '/api2',
    createProxyMiddleware({
      target: 'http://localhost:3070',
      changeOrigin: true,
    })
  );
};