import JoiCustomValidation from '../joi-custom-validation';
import Joi from "joi-browser";
import ParseValidation from '../parse-validation';


const getSchema = function (data, validateOption) {

    let joiString = Joi;
    
    if (validateOption) {

        //number (true/false)
        if (validateOption.number) {
            joiString = joiString.number();
        } else {
            joiString = joiString.string();
        }

        //email (true/false)
        if (validateOption.email) {
            joiString = joiString.email();
        }

        //required (true/false)
        if (!validateOption.required) {
            joiString = joiString.optional();
        } else {
            joiString = joiString.required();
        }
    } else {
        joiString = joiString.string().required();
    }
    
    return Joi.object().keys({
        name: joiString.label(data.label ? data.label : data.name)
                .error(errors => JoiCustomValidation(errors))
    });
};

const customClientValidation = function (data, validateOption) {
    
    const SCHEMA =  getSchema(data, validateOption);

    const valid = Joi.validate({
        name: data.value
    }, SCHEMA, {
        abortEarly: false
    });

    if (valid.error) {
        
        let response = {
            statusCode:400,
            validation: {
                keys: []
            }
        }
        valid.error.details.forEach(err => {
            response.message = `child "${data.name}" fails because [${err.message}]`;
        });
        
        response.validation.keys = [ data.name ];

        const validation = ParseValidation(response);
        
        return {
            success: false,
            error: true,
            hasError: validation.hasError,
            help: validation.help
        };
    } else {
        return {
            success: false,
            error: undefined,
            hasError: {},
            help: {},
        };
    }

}

export default customClientValidation;
