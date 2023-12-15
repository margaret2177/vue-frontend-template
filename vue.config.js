// const { defineConfig } = require("@vue/cli-service");
module.exports = {
  transpileDependencies: true,

  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
