import Constants from './constants';
import Store from '../components/redux/store';

class Actions {
    
    static show() {
        
        Store.dispatch({
            type: Constants.HOME_PAGE_SHOW
        });
    }
}


export default Actions;
