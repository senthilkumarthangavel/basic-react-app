import ClassNames from 'classnames';
import ObjectAssign from 'object-assign';
import PropTypes from 'prop-types';
import React from 'react';


const propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    inputClasses: PropTypes.object,
    name: PropTypes.string,
    dismiss: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
const defaultProps = {
    type: 'button'
};


class Button extends React.Component {
    render() {

        const inputClasses = ClassNames(ObjectAssign({
            'btns': true
        }, this.props.inputClasses));
        if (this.props.dismiss) {
            return (
                <button
                    type={this.props.type}
                    className={inputClasses}
                    name={this.props.name}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    data-dismiss="modal"
                    >

                    {this.props.children}
                </button>
            );
        }
        return (
            <button
                type={this.props.type}
                className={inputClasses}
                name={this.props.name}
                value={this.props.value}
                disabled={this.props.disabled}
                data-dismiss={this.props.dismiss}
                onClick={this.props.onClick}>

                {this.props.children}
            </button>
        );
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button;
