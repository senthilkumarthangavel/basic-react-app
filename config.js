'use strict';
const Confidence = require('confidence');
//const EnvHelper = require('./client/helpers/environment.js');
const Dotenv = require('dotenv');

Dotenv.config({ silent: true });

console.log("process.env", EnvHelper.toGetEnv());

const criteria = {
    env: EnvHelper.toGetEnv()
};

console.log("criteria", criteria);

const config = {
    $meta: 'This file configures the plot device.',
    projectName: 'ANIB',
    port: {
        web: {
            $filter: 'env',
            test: 9000,
            production: EnvHelper.toGetPort(),
            $default: 8026
        }
    },
    baseUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://anibbackend.dbzeus.com',
        $default: 'http://192.168.1.103:8026'
    },
    apiUrl: {
        $filter: 'env',
        $meta: 'values should not end in "/"',
        production: 'https://anibapi.dbzeus.com/v1',
        //$default: 'http://anibapi.dbzeus.com/v1'
        //$default: 'http://192.168.1.224:1071/v1' /** Manoj System IP */
        $default: 'http://192.168.1.42:1016/v1' /**  Aravind Sysyem IP */
        //$default: 'http://anibapi.dbzeus.com/v1' /* Live URL */
    },
    modelYear: [
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019
    ],
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
    authAttempts: {
        forIp: 50,
        forIpAndUser: 7
    },
    cookieSecret: {
        $filter: 'env',
        production: EnvHelper.toGetCookieSecret(),
        $default: '!k3yb04rdK4tz~4qu4~k3yb04rdd0gz!'
    },
    nodemailer: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'test@gmail.com',
            pass: EnvHelper.toGetSmtpPassword()
        }
    },
    system: {
        fromAddress: {
            name: 'ANIB',
            address: 'test@gmail.com'
        },
        toAddress: {
            name: 'ANIB',
            address: 'test@gmail.com'
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
