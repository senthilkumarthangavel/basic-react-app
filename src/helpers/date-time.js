'use strict';
const moment = require('moment');

module.exports = {
    _emailDateTemplate : function () {
        try {
            var day = moment().format("MMM DD, YYYY h:mmA");
            return day;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
    _DateTimeTemplate : function (dates) {
        try {
            var day = moment(dates).format("MM-DD-YYYY / h:mm A");
            return day;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },


    _displayDateTemplate : function (dates, format = 'MM-DD-YYYY') {

        try {
            var displaydate =moment(dates).format(format);
            return displaydate;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

    _displayDateTemplate2 : function (dates) {

        try {
            if (dates === null) {
                return '-';
            }
            var displaydate =moment(dates).format("MMMM D, YYYY");
            return displaydate;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
    _getTimestampInterval : function (interval = 10) { //interval -minutes

        try {
            let date = moment().add(interval, 'minutes');
            var timestamp = moment(date).format("X");
            return timestamp;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
    _getMinutesInterval : function (timestamp) { 

        try {
            var now = moment(new Date()); //todays date
            var end = moment.unix(timestamp); // another date
            var duration = moment.duration(end.diff(now));
            var minutes = duration.asMinutes(); 
            return Math.ceil(minutes);
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

    _strToTime : function (string, givenFormat, neededFormat) {
        try {
            //var displaydate = moment(string, givenFormat).tz("America/New_York").format(`${neededFormat} z`).toString();
            var displaydate = moment(string, givenFormat).format(`${neededFormat}`).toString();
            if (displaydate === 'Invalid date') {
                 return '';
            }
            return displaydate; //+' EST';
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

};
