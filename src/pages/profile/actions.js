import ApiActions from '../../actions/api';

import Constants from './constants';
import Store from './store';

class Actions {

    static getData(url, data) {
        ApiActions.get(
            url,
            undefined,
            Store,
            Constants.GET_RESTAURANTS_DATA,
            Constants.GET_RESTAURANTS_DATA_RESPONSE,
            (err, response) => {
                if (!err) {

                } else {

                }
            }
        );
    }

    static emptyList(value) {

        Store.dispatch({
            type: Constants.EMPTY_RESTAURANT_LIST
        });

    }

    static getSearch(value) {

        Store.dispatch({
            type: Constants.ADDRESS_SEARCH,
            value: value
        });

    }
    

}

export default Actions;
