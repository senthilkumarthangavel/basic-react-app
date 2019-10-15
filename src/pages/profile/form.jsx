import React from 'react';
//import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import Actions from './actions';
//import Store from './store';

import Button from '../../components/form/button.jsx';
import Spinner from '../../components/form/spinner.jsx';
import TextControl from '../../components/form/text-control.jsx';
import SelectControl from '../../components/form/select-control.jsx';
import CheckboxControl from '../../components/form/checkbox-control.jsx';
import ControlGroup from '../../components/form/control-group.jsx';


const propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    onNewClick: PropTypes.func,
    show: PropTypes.bool
};

class Form extends React.Component {
    constructor(props) {

        super(props);

        this.input = {};
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        
        let data = {
            first_name: this.input.first_name.value(),
            last_name: this.input.last_name.value(),
            email: this.input.email.value(),
            mobile_number: this.input.mobile_number.value(),
            gender: this.input.gender.value(),
            checkbox: [
                this.input.option1.checked() ? 1 : 0,
                this.input.option2.checked() ? 1 : 0
            ]
        }

        console.log("data", data);
    }

    render() {
        
        let formElements;

        if (!this.props.success) {
            formElements =  <div className="row">
                <div className="col-sm-4">
                    <TextControl
                        ref={(c) => (this.input.first_name = c)}
                        name="first_name"
                        value={this.props.first_name}
                        label={'First Name'}
                    />
                </div>
                <div className="col-sm-4">
                    <TextControl
                        ref={(c) => (this.input.last_name = c)}
                        name="last_name"
                        value={this.props.last_name}
                        label={'Last Name'}
                    />
                </div>
                <div className="col-sm-4">
                    <TextControl
                        ref={(c) => (this.input.email = c)}
                        name="email"
                        type="email"
                        value={this.props.email}
                        label={'Email'}
                    />
                </div>

                <div class="clear"></div>

                <div className="col-sm-4">
                    <TextControl
                        ref={(c) => (this.input.mobile_number = c)}
                        name="mobile_number"
                        type="number"
                        value={this.props.mobile_number}
                        label={'Mobile Number'}
                    />
                </div>
                <div className="col-sm-4">
                    <SelectControl
                        ref={(c) => (this.input.gender = c)}
                        label={'Gender'}
                        name="gender" 
                        inputClasses={{ 'style1' : true, 'form-control' : false, 'add-list ' : false}}
                        value={this.props.gender}
                        search={true}
                        startsWith={true}
                        dataTitle={'Select Gender'}
                        onChange={(e) => { }}
                        >
                            <option value="male">Male</option>
                            <option value="Female">Female</option>
                    </SelectControl> 
                </div>

                <div className="col-sm-4">
                    <ControlGroup hideLabel={true} hideHelp={true} groupClasses={{ 'checkbox_group': true, 'form-group': true, 'add_opt': true }}>
                        <label> Checkbox Option</label>
                        <CheckboxControl
                            ref={(c) => (this.input.option1 = c)}
                            name="checkbox_option"
                            id="option1"
                            value={1} 
                            inputClasses={{ 'checkbox' : true ,'form-control': false }}
                            groupClasses={{ 'form-group': false }}
                            labelClasses={{ 'checkbox': true, 'style1': true }}
                            labelFor="option1"
                            label={['Option 1']}
                            labelPositionBottom={true} 
                            onChange={(e) => { }}
                        />
                        <CheckboxControl
                            ref={(c) => (this.input.option2 = c)}
                            name="checkbox_option"
                            id="option2"
                            value={2} 
                            inputClasses={{ 'checkbox' : true ,'form-control': false }}
                            groupClasses={{ 'form-group': false }}
                            labelClasses={{ 'checkbox': true, 'style1': true }}
                            labelFor="option2"
                            label={['Option 2']}
                            labelPositionBottom={true} 
                            onChange={(e) => { }}
                        />
                    </ControlGroup>
                </div>
                <div class="clear"></div>
                <div className="w100 footet_btn">
                        <div className="col-sm-6">
                            <div className="mt25 pull-left">
                                <Button
                                    type="button"
                                    inputClasses={{ 'btn': true, 'grey': true }}
                                    disabled={this.props.loading}
                                    onClick={(e) => { this.props.history.push('/') }}>

                                    Cancel
                                    <Spinner space="left" show={this.props.loading} />
                                </Button>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mt25 pull-right">
                                <Button
                                    type="submit"
                                    inputClasses={{ 'btn': true }}
                                    disabled={this.props.loading}>

                                    Update
                                    <Spinner space="left" show={this.props.loading} />
                                </Button>
                            </div>
                        </div>
                    </div>
            </div>;
        }
        return (
            <form onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
                {formElements} 
            </form>
        );
    }
}

Form.propTypes = propTypes;

export default Form;
