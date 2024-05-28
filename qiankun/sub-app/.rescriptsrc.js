const { name } = require("./package");

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd"; // 为了能通过window['app-name1']拿到子应用声明的生命周期
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = "window";

    // config.target = "http://localhost:3000";

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;
    config.liveReload = false;
    // object { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, webSocketServer? }
    return config;
  },
};
