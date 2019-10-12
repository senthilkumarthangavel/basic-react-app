import Constants from './constants';
import ObjectAssign from 'object-assign';
import ParseValidation from '../../helpers/parse-validation';
import { createStore } from 'redux'

const initialState = {
    loading: false,
    list_loading: false,
    success: false,
    error: undefined,
    hasError: {},
    help: {},
    restaurants_list: [],
    search: "",
};

const reducer = function (state, action) {

    if (action.type === Constants.GET_RESTAURANTS_DATA) {
        return ObjectAssign({}, state, {
            list_loading: true
        });
    }

    if (action.type === Constants.GET_RESTAURANTS_DATA_RESPONSE) {
        const validation = ParseValidation(action.response);
        let result = action.response;
        
        return ObjectAssign({}, state, {
            list_loading: false,
            success: !action.err,
            error: validation.error,
            hasError: validation.hasError,
            help: validation.help,
            restaurants_list : result.restaurants,
        });
    }

    if (action.type === Constants.EMPTY_RESTAURANT_LIST) {
        return ObjectAssign({}, state, {
            restaurants_list: []
        });
    }

    if (action.type === Constants.ADDRESS_SEARCH) {
        return ObjectAssign({}, state, {
            search: action.value
        });
    }

    return state;
};


export default createStore(reducer, initialState);
