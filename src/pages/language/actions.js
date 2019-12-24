import ApiActions from '../../actions/api';
import Constants from './constants';
import Store from '../components/redux/store';

class Actions {
    
    static getDetails() {
        
        ApiActions.get(
            '/api/languages',
            undefined,
            Store,
            Constants.GET_LANGUAGE,
            Constants.GET_LANGUAGE_RESPONSE,
            (err, response) => {
                if (!err) {
                    
                } else {
                    //Toaster.error(response.message);
                }

            }
        );
    }

    static show() {
        
        Store.dispatch({
            type: Constants.HOME_PAGE_SHOW
        });
    }

    static reset() {
        
        Store.dispatch({
            type: Constants.RESET_LANGUAGE_STORE
        });
    }    
    
}


export default Actions;
