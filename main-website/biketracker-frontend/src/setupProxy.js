const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv').config()
module.exports = function(app) {
  app.use(
    '/styles',
    createProxyMiddleware({
      target: process.env.MAPTILER_URL,
      changeOrigin: false,
    })
  );
  app.use(
    '/data',
    createProxyMiddleware({
      target: process.env.MAPTILER_URL,
      changeOrigin: false,
    })
  );
  app.use(
    '/fonts',
    createProxyMiddleware({
      target: process.env.MAPTILER_URL,
      changeOrigin: false,
    })
  );
};