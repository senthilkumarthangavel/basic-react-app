import React from 'react';
import ReactDOM from 'react-dom';

import "./media/css/animate.min.css";
import "./media/css/bootstrap.min.css";
import "./media/css/style.css" ;
import "./media/css/flaticon.css" ;
import "./media/css/line-awesome.css";
import "./media/css/LineIcons.css" ;

import App from './pages/app';

import * as serviceWorker from './pages/serviceWorker';

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
