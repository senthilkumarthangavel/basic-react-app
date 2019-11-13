'use strict';

module.exports = { 
 
    floatFormat : function (value) {
        try {

          return parseFloat(Math.round(value * 100) / 100).toFixed(2);
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

    dollarFormat : function (value) {
        try {
          return parseFloat(Math.round(value * 100) / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        } catch (e) {
            console.log(e.message);
            return null;
        }
    },

    handlePhoneChange : function (value) { //(111) 151-5551
        try {
            let input = value;
            input = input.replace(/\D/g,'');

            // Trim the remaining input to ten characters, to preserve phone number format
            input = input.substring(0,10);

            // Based upon the length of the string, we add formatting as necessary
            var size = input.length;
            if(size == 0){
                input = input;
            }else if(size < 4){
                input = '('+input;
            }else if(size < 7){
                input = '('+input.substring(0,3)+') '+input.substring(3,6);
            }else{
                input = '('+input.substring(0,3)+') '+input.substring(3,6)+'-'+input.substring(6,10);
            }

            return input;
        } catch (e) {
            console.log(e.message);
            return '';
        }
    },

    wordTruncate(string, count){
       if (string.length > count)
          return string.substring(0, count)+'...';
       else
          return string;
    },

    include(arr, obj) {
        return (arr.indexOf(obj) != -1);
    },

    isEmpty: function (obj) {
        
        return !obj || Object.keys(obj).length === 0;
    },

    windowScroll: function (top = 0, left = 0, type = 'smooth') {

        window.scroll({
            top: top,
            left: left,
            behavior: type
        });
    },

    getName: function (name, isLast = false, state) {

        let nameArray = name ? name.split(' ') : [];
        
        if (!isLast) {
            
            if (nameArray.length > 0) {
                return nameArray[0].charAt(0).toUpperCase();
            } else if (name.length > 0) {
                return name.charAt(0).toUpperCase();
            } else {
                return state.first_name.charAt(0);
            }

        } else {
            
            if (nameArray.length > 1) {
                return nameArray[1].charAt(0).toUpperCase();
            } else if (name.length > 1) {
                return name.charAt(1).toUpperCase();
            } else {
                return state.last_name.charAt(0);
            }
        }

        return "";
    },

    reverseArrayInPlace: function (arr) {
        
        for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
            let el = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = el;
        }
        return arr;
    },

    getExtension: function(filename) {

        var parts = filename.split('.');
        return parts[parts.length - 1];
    },
    
    isImage: function(filename) {
        var ext = this.getExtension(filename);
        switch (ext.toLowerCase()) {
        case 'jpg':
        case 'gif':
        case 'bmp':
        case 'png':
        case 'jpeg':
            //etc
            return true;
        }
        return false;
    },
    
    isVideo: function(filename) {
        var ext = this.getExtension(filename);
        switch (ext.toLowerCase()) {
        case 'm4v':
        case 'avi':
        case 'mpg':
        case 'mp4':
            // etc
            return true;
        }
        return false;
    }

};
