const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/quiz",
    createProxyMiddleware({
      // target: "http://localhost:3001",
      target: "http://trivia-server:3001", //for docker use
      changeOrigin: true,
    })
  );
};
