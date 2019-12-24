import { createStore, combineReducers } from 'redux';
import Home from '../../home/reducer';
import Language from '../../language/reducer';
import MyaccountProfile from '../../my-account/profile/reducer';

/*
    Reducers name should be page component name 
    Ex: class HomePage extends Component{} => HomePage

    ref: https://medium.com/@bretcameron/a-beginners-guide-to-redux-with-react-50309ae09a14
*/

const store =  createStore(
    combineReducers({
        'HomePage': Home,
        'LanguagePage': Language,
        'MyaccountProfilePage': MyaccountProfile
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
