import React from 'react';
import { Route } from 'react-router-dom';

const RouteStatus = function (outerProps) {

    const inline = function (innerProps) {

        if (innerProps.staticContext) {
            innerProps.staticContext.code = outerProps.code;
        }

        return outerProps.children;
    };

    return (
        <Route render={inline} />
    );
};


export default RouteStatus;
