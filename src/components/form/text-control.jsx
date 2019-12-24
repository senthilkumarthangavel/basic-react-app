import ClassNames from 'classnames';
import ControlGroup from './control-group.jsx';
import ObjectAssign from 'object-assign';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import renderHTML from 'react-render-html';
import clientValidation from '../../helpers/validation/validationField';

const propTypes = {
    autoCapitalize: PropTypes.string,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    help: PropTypes.string,
    inputClasses: PropTypes.object,
    validateOption: PropTypes.object,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    labelPositionBottom: PropTypes.bool,
    hideLabel: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,

    onFocus: PropTypes.func,
    onMouseOut: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    maxLength: PropTypes.number,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    prependElement : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    prependElementNotString : PropTypes.bool,
    appendElement : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    appendElementNotString : PropTypes.bool,
    defaultValue : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    title : PropTypes.string,
    readOnly: PropTypes.bool,
    keyValue: PropTypes.string,
    //groupClasses: PropTypes.object
};
const defaultProps = {
    type: 'text',
    autoCapitalize: 'off',
    onBlur: () => {},
};


class TextControl extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            type: this.props.type,
            success: false,
            error: undefined,
            hasError: {},
            help: {},
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.showHide = this.showHide.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate() {

        var validation = clientValidation({
            value: this.input.value,
            label: this.props.label,
            name: this.props.name,
        }, this.props.validateOption);

        if (validation.error) {
            this.setState(ObjectAssign({}, this.state, validation));
            
            return true;
        } else {
            this.setState(ObjectAssign({}, this.state, {
                success: false,
                error: undefined,
                hasError: {},
                help: {},
            }));
            
            return false;
        }

    }

    handleBlur(e) {
        
        this.validate();

        const { onBlur } = this.props;
        onBlur(e);
    }

    handleChange(e) {
        
        this.validate();
        this.props.onChange(e)
    }

    showHide(e){
        
        e.preventDefault();
        e.stopPropagation();
        this.setState(ObjectAssign(this.state, {
            type: this.state.type === 'input' ? 'password' : 'input'
        }));
    }
    focus(e) {

        return this.input.focus();
    }

    value() {

        return this.input.value;
    }

    render() {
        
        const groupClasses = ClassNames(ObjectAssign({
            'form-group': true,
            'has-error': this.props.hasError
        }, this.props.groupClasses));

        const passwordClass = ClassNames({
          'pass-show': true,
          'fa fa-fw': true,
          'field-icon': true,
          'toggle-password': true,
          'fa-eye': this.state.type === 'password',
          'fa-eye-slash': this.state.type === 'input'
        });

        const inputClasses = ClassNames(ObjectAssign({
            'form-control': true
            
        }, this.props.inputClasses));

        let passwordViewer;
        if (this.props.type === 'password') {
            passwordViewer = <p style={{'zIndex' : 9999}} className={passwordClass} data-toggle={this.props.id} onClick={this.showHide}>
                
                {this.state.type === 'input' ? <span className="hide">&nbsp;Hide</span> : <span>&nbsp;Show</span>}
            </p>;
        }

        return (
            <ControlGroup
                hasError={this.state.hasError ? this.state.hasError[this.props.name] : this.props.hasError}
                label={this.props.label}
                hideLabel={this.props.hideLabel}
                labelPositionBottom={this.props.labelPositionBottom}
                help={this.state.help ? this.state.help[this.props.name] : this.props.help }
                groupClasses={this.props.groupClasses}
                >
                
                {(this.props.prependElement && this.props.prependElementNotString) ? (this.props.prependElement) : ''}
                {(this.props.prependElement && !this.props.prependElementNotString) ? (renderHTML(this.props.prependElement)) : ''}
                
                <input
                    ref={(c) => (this.input = c)}
                    key={(this.props.keyValue && this.props.keyValue !== '') ? this.props.keyValue : ""}
                    type={this.state.type}
                    autoCapitalize={this.props.autoCapitalize}
                    className={inputClasses}
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    value={this.props.value}
                    disabled={this.props.disabled ? 'disabled' : undefined}
                    onChange={this.props.onChange}
                    onMouseOut={this.props.onMouseOut}
                    maxLength={this.props.maxLength}
                    onFocus={this.props.onFocus}
                    title={this.props.title}
                    onBlur={this.handleBlur}
                    readOnly={this.props.readOnly ? true : false}
                />
                
                {(this.props.appendElement && this.props.appendElementNotString) ? (this.props.appendElement) : ''}
                {(this.props.appendElement && !this.props.appendElementNotString) ? (renderHTML(this.props.appendElement)) : ''}
                
                {passwordViewer}
            </ControlGroup>
        );
    }
}

TextControl.propTypes = propTypes;
TextControl.defaultProps = defaultProps;

export default TextControl;
