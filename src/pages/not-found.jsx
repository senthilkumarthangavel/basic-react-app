import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import RouteStatus from "../components/route-status.jsx";

class NotFoundPage extends Component {
    render() {
        return (
            <RouteStatus code={404}>
                <section className="container">
                    <Helmet>
                        <title>Page not found</title>
                    </Helmet>
                    <h1 className="page-header">Page not found</h1>
                    <p>We couldn’t find the page you requested.</p>
                </section>
            </RouteStatus>
        );
    }
}


export default NotFoundPage;