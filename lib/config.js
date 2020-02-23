const VERSION = require('../package.json').version;

module.exports = function buildConfig(config) {
    var conf = {
        server: config.server,
        serverName: config.serverName || 'STOMP-JS/' + VERSION,
        path: config.path || "/stomp",
        heartbeat: config.heartbeat || [0, 0],
        heartbeatErrorMargin: config.heartbeatErrorMargin || 1000,
        debug: config.debug || function () {},
        sockjs_url: config.sockjs_url || "http://cdn.jsdelivr.net/npm/sockjs-client@1.4.0/dist/sockjs.min.js",
        protocol: config.protocol || 'ws'
    };

    if (conf.server === undefined) {
        throw "Server is required";
    }
    return conf;
};
