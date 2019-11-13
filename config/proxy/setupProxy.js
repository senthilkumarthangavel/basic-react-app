const proxy = require('http-proxy-middleware');
const Config = require("../../config");
const CommonHelper = require("../../src/helpers/common");
const proxyJson = Config.get('/apiProxy');

module.exports = function(app) {
  
  !CommonHelper.isEmpty(proxyJson) ? Object.keys(proxyJson).map((proxy_key) => {
    
      app.use(proxy(proxy_key, proxyJson[proxy_key]));
  }) : null;
}