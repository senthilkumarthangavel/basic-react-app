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
    ])
};
const defaultProps = {
    type: 'radio',
};


class RadioControl extends React.Component {
    focus() {

        return this.input.focus();
    }

    value() {

        return this.input.value;
    }

    render() {

        const inputClasses = ClassNames(ObjectAssign({
            'form-control': true
        }, this.props.inputClasses));

        return (
            <ControlGroup
                hasError={this.props.hasError}
                label={this.props.label}
                hideLabel={this.props.hideLabel}
                labelClasses={this.props.labelClasses}
                groupClasses={this.props.groupClasses}
                labelFor={this.props.labelFor}
                labelPositionBottom={this.props.labelPositionBottom}
                help={this.props.help}
                
                >

                <input
                    ref={(c) => (this.input = c)}
                    type={this.props.type}
                    className={inputClasses}
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    defaultChecked={this.props.defaultChecked}
                    checked={this.props.checked}
                    disabled={this.props.disabled ? 'disabled' : undefined}
                    onChange={this.props.onChange}
                />
            </ControlGroup>
        );
    }
}

RadioControl.propTypes = propTypes;
RadioControl.defaultProps = defaultProps;


export default RadioControl;