import Constants from './constants';
import ObjectAssign from 'object-assign';
import ParseValidation from '../../helpers/parse-validation';

const initialState = {
    show: false,
    loading: false,
    hasError: {},
    help: {},
    error: null,
    count: 1,
    data: {}
};

const reducer = function (state = initialState, action) {

    if (action.type === Constants.HOME_PAGE_SHOW) {
        
        return ObjectAssign({}, state, {
            count: parseInt(state.count) + 1
        });
    }

    if (action.type === Constants.GET_LANGUAGE) {
        
        return ObjectAssign({}, state, {
            loading: true
        });
    }

    if (action.type === Constants.GET_LANGUAGE_RESPONSE) {
        
        const validation = ParseValidation(action.response);
        let result = action.response ? action.response.data : {};

        return ObjectAssign({}, state, {
            loading: false,
            success: !action.err,
            error: validation.error,
            hasError: validation.hasError,
            help: validation.help,
            data: result
        });
    }

    return state;
};

export default reducer;
