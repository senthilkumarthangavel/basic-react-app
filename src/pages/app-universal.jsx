
import Footer from './layouts/footer/index.jsx';
import Header from './layouts/header/index.jsx';
import { Helmet } from 'react-helmet';
import Home from './home/index.jsx';
import Language from './language/index.jsx';
import Login from './login/login/index.jsx';
import Navbar from './layouts/navbar/index.jsx';
import NotFound from './not-found.jsx';
import Profile from './profile/index.jsx';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Restaurants from './restaurants/index.jsx';
import RouteRedirect from "../components/route-redirect.jsx";
import SlotMachine from './slot-machine/index.jsx';

const AppUniversal = function (props) {
    return (
        <Switch>
            <Route exact path="/(login)" component={LoginContainer}/>
            <Route component={DefaultContainer}/>
        </Switch>
    );
}

const LoginContainer = () => (
    <div className="">
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Ontabee application" />
        </Helmet>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
    </div>
);
  
  
const DefaultContainer = () => (
    <div>
        <Helmet>
            <title>Welcome to Ontabee</title>
            <meta name="description" content="Ontabee Application" />
        </Helmet>
        <Route component={Header} />
        <Route component={Navbar} />
        <Route path="/" component={Home} />
        <Route path="/setting/language" component={Language} />
        <Route path="/slot-game" component={SlotMachine} />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/profile" component={Profile} />

        {/* <RouteRedirect from="/moved" to="/" code={301} />
        <Redirect to="/" />
        <Route component={NotFound} /> */}
        <Footer />
    </div>
);

export default AppUniversal;