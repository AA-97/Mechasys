const { createProxyMiddleware } = require("http-proxy-middleware");

// used to make api calls to backend server at port 5000
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
