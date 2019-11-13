const Confidence = require('confidence');
//console.log("process.env", process.env.NODE_ENV);

const criteria = {
    env: process.env.NODE_ENV
};

//console.log("criteria", criteria);

const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'BasicApp',
    port: {
        web: {
            $filter: 'env',
            test: 9000,
            production: process.env.NODE_ENV,
            $default: 9000
        }
    },
    baseUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://basicapp.com',
        $default: 'http://192.168.1.103:9000'
    },
    currencyCode: {
        $filter: 'env',
        production: 'AED',
        $default: 'AED'
    },
    timeZone: {
        $filter: 'env',
        production: 'Asia/Kolkata',
        $default: 'Asia/Kolkata'
    },
    apiProxy: {
        $filter: 'env',
        production: {
            "/api/*": {
               "target": "http://192.168.1.102:9001",
               "secure": false,
               "changeOrigin": true,
               "logLevel": "debug",
               "pathRewrite": {"^/api" : ""}
            }
        },
        $default: {
            "/api/*": {
               "target": "http://192.168.1.102:9001",
               "secure": false,
               "changeOrigin": true,
               "logLevel": "debug",
               "pathRewrite": {"^/api" : ""}
            }
        }
    }
};


const store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
