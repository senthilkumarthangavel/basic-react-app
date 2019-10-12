'use strict';
var randomize = require('randomatic');

module.exports = {
    _otp : function (length = 8) {
        try {
            return randomize('0', length)
        } catch (e) {
            return 624343;
        }
    }
};
