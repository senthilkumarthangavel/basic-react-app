
import Footer from './layouts/footer/index.jsx';
import Header from './layouts/header/index.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './home/index.jsx';
import Language from './language/index.jsx';
import Login from './login/login/index.jsx';
import Navbar from './layouts/navbar/index.jsx';
//import NotFound from './not-found.jsx';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import RouteRedirect from "../components/route-redirect.jsx";

const AppUniversal = function (props) {
    return (
        <Switch>
            <Route exact path="/(login)" component={LoginContainer}/>
            <Route component={DefaultContainer}/>
        </Switch>
    );
}

const LoginContainer = () => (
    <HelmetProvider>
        <Helmet>
            <title>Login</title>
            <meta name="description" content="Ontabee application" />
        </Helmet>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
    </HelmetProvider>
);
  
  
const DefaultContainer = () => (
    <HelmetProvider>
        <Helmet>
            <title>Welcome to Ontabee</title>
            <meta name="description" content="Ontabee Application" />
        </Helmet>
        <Route component={Header} />
        <Route component={Navbar} />
        <Route path="/" component={Home} />
        <Route path="/setting/language" component={Language} />

        {/* <RouteRedirect from="/moved" to="/" code={301} />
        <Redirect to="/" />
        <Route component={NotFound} /> */}
        <Footer />
    </HelmetProvider>
);

export default AppUniversal;