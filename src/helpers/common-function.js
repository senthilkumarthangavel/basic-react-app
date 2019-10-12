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
    }

};
