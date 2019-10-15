import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import AppUniversal from './app-universal.jsx';
import store from './components/redux/store.jsx';

const App = (
    <Provider store={store}>
        <BrowserRouter>
            <AppUniversal />
        </BrowserRouter>
    </Provider>
);


export default App;
