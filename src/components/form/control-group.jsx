import ClassNames from 'classnames';
import ObjectAssign from 'object-assign';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

const propTypes = {
    children: PropTypes.node,
    groupClasses: PropTypes.object,
    hasError: PropTypes.bool,
    help: PropTypes.string,
    helpClasses: PropTypes.object,
    hideHelp: PropTypes.bool,
    hideLabel: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    labelClasses: PropTypes.object,
    labelFor: PropTypes.string,
    labelPositionBottom: PropTypes.bool,
    id: PropTypes.string
};


class ControlGroup extends Component {
    rawMarkUp() {
        return {__html: this.props.label}
    }
    render() {
        const groupClasses = ClassNames(ObjectAssign({
            'form-group': true,
            'has-error': this.props.hasError
        }, this.props.groupClasses));


        const labelClasses = ClassNames(ObjectAssign({
            'control-label': true
        }, this.props.labelClasses));

        const helpClasses = ClassNames(ObjectAssign({
            'help-block': true
        }, this.props.helpClasses));

        let label;
        if (!this.props.hideLabel) {
            label = <label className={labelClasses} htmlFor={this.props.labelFor} dangerouslySetInnerHTML={this.rawMarkUp()}>
            </label>;
        }

        let help;

        if (!this.props.hideHelp) {
            help = <span className={helpClasses}>
                {this.props.help}
            </span>;
        }

        if (this.props.labelPositionBottom) {
            return (
                <div id={this.props.id} className={groupClasses}>
                    {this.props.children}
                    {label}
                    {help}
                </div>
            );
        }
        return (
            <div id={this.props.id} className={groupClasses}>
                {label}
                {this.props.children}
                {help}
            </div>
        );
    }
}

ControlGroup.propTypes = propTypes;

export default ControlGroup;
