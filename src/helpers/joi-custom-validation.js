'use strict';


const customValidation = function (errors, custom) {
    
    errors.forEach(err => {
        let label_name = err.context.label ? err.context.label : err.context.key;

        switch (err.type) {
            case "any.empty":
                err.message = `${label_name} is required`;
                break;
            case "string.base":
                err.message = `${label_name} must be a string`;
                break;
            case "string.email":
                err.message = `${label_name} is not a valid email address`;
                break; 
            case "string.regex.base":
                err.message = `${label_name} value fails to match the required pattern`;
                break; 
            case "string.min":
                err.message = `${label_name} should have at least ${err.context.limit} characters!`;
                break;
            case "string.max":
                err.message = `${label_name} should have at most ${err.context.limit} characters!`;
                break;
            case "array.min":
                err.message = `${label_name} must contain ${err.context.limit} item!`;
                break;
            case "number.base":
                err.message = `${label_name} must be a number!`;
                break;
            case "number.min":
                err.message = `${label_name} must be larger than or equal to ${err.context.limit}`;
                break;
            case "any.required":
                err.message = `${label_name} is required`;
                break;
            case "number.max":
                err.message = `${label_name} must be less than or equal to ${err.context.limit}`;
                break;
            default:
                break;
        }

        if (custom && custom.type && custom.message && err.type === custom.type) {
            err.message = custom.message;
        }
    });
    
    return errors;
};

module.exports = customValidation;
