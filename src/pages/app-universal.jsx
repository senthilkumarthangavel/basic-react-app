
import Footer from './layouts/footer/index.jsx';
import GraphQL from './graphql/index.jsx';
import Header from './layouts/header/index.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './home/index.jsx';
import Language from './language/index.jsx';
import Login from './login/login/index.jsx';
import Navbar from './layouts/navbar/index.jsx';
import MyAccountProfile from './my-account/profile/index';
import NotFound from './not-found.jsx';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RouteRedirect from "../components/route-redirect.jsx";

const authCheck = function(props, component){
    
    var isLogged = true;
    
    if (isLogged)
        return component;
    else
        return <Redirect to="/login"/>;

}

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
        <RouteRedirect from="/moved" to="/" code={301} />
        <Redirect to="/" />
        <Route component={NotFound} />
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
        <Route exact path="(/|/admin)" render={(props) => authCheck(props, <Home />)} />
        <Route path="/admin/setting/language" render={(props) => authCheck(props, <Language />)} />
        <Route exact path="/admin/graph-ql" render={(props) => authCheck(props, <GraphQL />)} />
        <Route exact path="/admin/my-account/profile" render={(props) => authCheck(props, <MyAccountProfile />)} />
        {/* <RouteRedirect from="/moved" to="/" code={301} />
        <Redirect to="/" />
        <Route component={NotFound} /> */}
        <Footer />
    </HelmetProvider>
);

export default AppUniversal;