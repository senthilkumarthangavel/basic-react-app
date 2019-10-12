import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const RouteRedirect = function (outerProps) {

    const inline = function (innerProps) {

        if (innerProps.staticContext) {
            innerProps.staticContext.code = outerProps.code;
        }

        return (
            <Redirect from={outerProps.from} to={outerProps.to}/>
        );
    };

    return (
        <Route render={inline}/>
    );
};


export default RouteRedirect;
