const ClassNames = require('classnames');
const ControlGroup = require('./control-group.jsx');
const ObjectAssign = require('object-assign');
const PropTypes = require('prop-types');
const React = require('react');


const propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    defaultChecked: PropTypes.bool,    
    checked: PropTypes.bool,
    help: PropTypes.string,
    inputClasses: PropTypes.object,
    groupClasses: PropTypes.object,
    label: PropTypes.array,
    hideLabel: PropTypes.bool,
    labelClasses: PropTypes.object,
    labelFor: PropTypes.string,
    labelPositionBottom: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    defaultValue : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    keyValue: PropTypes.string,
};
const defaultProps = {
    type: 'checkbox',
};


class SwitchCheckboxControl extends React.Component {
    focus() {

        return this.input.focus();
    }

    value() {

        return this.input.value;
    }

    checked() {

        return this.input.checked;
    }
    
    render() {

        const inputClasses = ClassNames(ObjectAssign({
            'form-control': true,
            'checkbox' : true
        }, this.props.inputClasses));

        const innerLabelClasses = ClassNames(ObjectAssign({
            'switch': true
        }, this.props.innerLabelClasses));

        const customSpanClasses = ClassNames(ObjectAssign({
            'slider': true,
            'round': true,
        }, this.props.customSpanClasses));


        const outerLabelClasses = ClassNames(ObjectAssign({
            'text': true
        }, this.props.outerLabelClasses));

        return (
            <ControlGroup
                hasError={this.props.hasError}
                label={this.props.label}
                hideLabel={this.props.hideLabel}
                labelClasses={this.props.labelClasses}
                groupClasses={this.props.groupClasses}
                labelFor={this.props.labelFor}
                labelPositionBottom={this.props.labelPositionBottom}
                help={this.props.help}>

                <label className={innerLabelClasses}>
                    <input
                        ref={(c) => (this.input = c)}
                        key={(this.props.keyValue && this.props.keyValue !== '') ? this.props.keyValue : ""}
                        type={this.props.type}
                        className={inputClasses}
                        name={this.props.name}
                        id={this.props.id}
                        value={this.props.value}
                        disabled={this.props.disabled ? 'disabled' : undefined}
                        onChange={this.props.onChange}
                        defaultValue={this.props.defaultValue}
                        defaultChecked={this.props.defaultChecked}
                        checked={this.props.checked}
                    />
                    <span className={customSpanClasses}></span>
                </label>
                {/*<label className={outerLabelClasses} htmlFor={this.props.labelFor}>
                    {this.props.label}
                </label>*/}
            </ControlGroup>
        );
    }
}

SwitchCheckboxControl.propTypes = propTypes;
SwitchCheckboxControl.defaultProps = defaultProps;

export default SwitchCheckboxControl;
