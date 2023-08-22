const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/local', {
        target: 'http://localhost:3000',
        changeOrigin: true
    })
)
app.use(
   createProxyMiddleware("/api",{
      target: 'https://trothly.com',
      //pathRewrite: {
      //  '^/api':''
      //},
      changeOrigin: true,
    })
  );
};