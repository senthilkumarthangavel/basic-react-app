'use strict';

module.exports = {
    _userIdentity : function () {
        try {
            if (sessionStorage === undefined) {
                var sessionStorage = null;
            }

            if (localStorage === undefined) {
                var localStorage = null;
            }
            const tokens = sessionStorage.getItem('user');

            if (tokens === null) {
                const tokens = localStorage.getItem('user');
            }

            if (tokens !== null) {
                return JSON.parse(tokens);
            }

            return null;
        } catch (e) {
            //console.log(e.message);
            return null;
        }
    },
    _checkUserIdentity : function(){
        try {
            
            var storageVar = sessionStorage.getItem('user');

            if (storageVar === null) {
                storageVar = localStorage.getItem('user');
            }

            if (storageVar !== undefined && storageVar !== null) {
                return true;
            }
            return false;
        } catch (e) {
            //console.log(e.message);
            return false;
        }
    },
    _checkUserToken : function(){
        try {
            var storageToken = sessionStorage.getItem('user');

            if (storageToken !== null) {
                var userStorage = JSON.parse(storageToken);
                return userStorage._id;
            }

            storageToken = localStorage.getItem('user');

            if (storageToken !== null) {
                var userStorage = JSON.parse(storageToken);
                return userStorage._id;
            }

            return null;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
    _checkUserAddress : function(){
        try {
            var storageToken = sessionStorage.getItem('user');

            if (storageToken !== null) {
                var userStorage = JSON.parse(storageToken);
                return userStorage;
            }

            storageToken = localStorage.getItem('user');

            if (storageToken !== null) {
                var userStorage = JSON.parse(storageToken);
                return userStorage;
            }

            return null;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
    _getProfilePath : function(file_name, upload_type){
        try {
            if (upload_type === 1) {
                return `/public/media/images/profile/thumnail/${file_name}`
            } else if (upload_type === 4) {
                return `/uploads/profile/${file_name}`
            }

            return null;
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },
};
