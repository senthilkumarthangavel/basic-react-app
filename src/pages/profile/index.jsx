import React, { Component } from 'react';

import Store from './store';
import Actions from './actions';
import Form from './form';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = Store.getState();
    }

    componentDidMount() {
        
        window.scrollTo(0, 0);
        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));
    }

    componentWillUnmount() {
        
        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    render() {
        return (
            <div class="page_content full_row">
                <div class="container">
                    <ul class="breadcrumb reset">
                        <li><a href="#">Home</a></li>
                        <li>My Profile</li>
                    </ul>
                    
                    <div class="page_title">
                        <h1>Edit Profile</h1>
                    </div>
                    
                    <div class="acc_content full_row floating_label">
                        <h3>General Account Information</h3>
                        
                        <Form 
                            history={this.props.history}
                            {...this.state}
                            />

                    </div>
                </div>
            </div>
        );
    }
}


export default ProfilePage;
