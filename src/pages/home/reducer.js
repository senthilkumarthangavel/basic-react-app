import Constants from './constants';
import ObjectAssign from 'object-assign';

const initialState = {
    show: false,
    loading: false,
    hasError: {},
    help: {},
    error: null,
    count: 1
};

const reducer = function (state = initialState, action) {

    if (action.type === Constants.HOME_PAGE_SHOW) {
        
        return ObjectAssign({}, state, {
            count: parseInt(state.count) + 1
        });
    }

    return state;
};

export default reducer;
