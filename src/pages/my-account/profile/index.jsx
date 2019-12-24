

import Actions from './actions';
import Alert from '../../../components/alert.jsx';
import Button from '../../../components/form/button.jsx';
import ControlGroup from '../../../components/form/control-group.jsx';
import { connect } from 'react-redux';
import formHasError from '../../../helpers/validation/formValidation'
import React, { Component } from 'react';
import _RHelper from '../../../helpers/redux';
import Spinner from '../../../components/form/spinner.jsx';
import TextControl from '../../../components/form/text-control.jsx';
//import { Link } from 'react-router-dom';

class MyaccountProfilePage extends Component {
	
	constructor(props) {
		
		super(props);

		this.input = {};
		this.state = _RHelper.getState(this.props);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		
		this.setState(_RHelper.getState(nextProps));
	}
	
	handleSubmit(event) {

        event.preventDefault();
        event.stopPropagation();

		let formError = formHasError({
			name: this.input.name.validate(),
			email: this.input.email.validate()
		});

		if (!formError) {
			Actions.sendMessage({
				name: this.input.name.value(),
				email: this.input.email.value()
			});
		}
		
		// Actions.sendMessage({
        //     name: this.input.name.value(),
        //     email: this.input.email.value()
        // });
	}
	
	render() {

		let alert = [];

        if (this.state.success) {
            alert = <Alert
                type="success"
                message="Success. We have received your message."
            />;
        }
        else if (this.state.error) {
            alert = <Alert
                type="danger"
                message={this.state.error}
            />;
        }

        let formElements;

        if (!this.state.success) {
            formElements = <fieldset>
                <div className="row">
					<div className="col-md-3">
						<TextControl
							ref={(c) => (this.input.name = c)}
							name="name"
							label="Your name"
							hasError={this.state.hasError.name}
							help={this.state.help.name}
							disabled={this.state.loading}
						/>
					</div>
					<div className="col-md-3">
						<TextControl
							ref={(c) => (this.input.email = c)}
							name="email"
							label="Your email"
							hasError={this.state.hasError.email}
							help={this.state.help.email}
							disabled={this.state.loading}
							validateOption={{
								required: true,
								email: true
							}}
						/>
					</div>
					<div className="col-md-8">
						<ControlGroup hideLabel={true} hideHelp={true}>
							<Button
								type="submit"
								inputClasses={{ 'btn': true }}
								disabled={this.state.loading}>

								Update
								<Spinner space="left" show={this.state.loading} />
							</Button>
						</ControlGroup>
					</div>
				</div>
                
            </fieldset>;
        }

        return (
            <section className="site_content" className="search full_row">
                <h1 className="page-header">Profile</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {alert}
                    {formElements}
                </form>
            </section>
        );
	}
}

const mapStateToProps = (state) => _RHelper.mapStateToProps(state, [
	'MyaccountProfilePage'
]);

export default connect(mapStateToProps)(MyaccountProfilePage);
