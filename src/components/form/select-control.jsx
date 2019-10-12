import ClassNames from 'classnames';
import ControlGroup from './control-group.jsx';
import ObjectAssign from 'object-assign';
import PropTypes from 'prop-types';
import React, {Component} from 'react';


const propTypes = {
    children: PropTypes.node,
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    disabled: PropTypes.bool,               
    hasError: PropTypes.bool,
    help: PropTypes.bool,
    inputClasses: PropTypes.object,
    inputSearch: PropTypes.object,
    label: PropTypes.string,
    labelPositionBottom: PropTypes.bool,
    hideLabel: PropTypes.bool,
    search: PropTypes.bool,
    multiple: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.string,
    value: PropTypes.node,
    isHideControlGroup: PropTypes.bool,
    keyValue: PropTypes.string,
    startsWith: PropTypes.bool,
    dataTitle: PropTypes.string,
};
const defaultProps = {
    type: 'text'
};


class SelectControl extends Component {
    value() {

        return this.input.value;
    }

    render() {

        const inputClasses = ClassNames(ObjectAssign({
            'form-control': true,
            'selectpicker': true,
            'add-list ':true
        }, this.props.inputClasses));

        let selectElement = (
            <select
                //key={(this.props.keyValue && this.props.keyValue !== '') ? this.props.keyValue : ""}
                ref={(c) => (this.input = c)}
                multiple={this.props.multiple} 
                className={inputClasses} 
                name={this.props.name}
                size={this.props.size}
                defaultValue={this.props.defaultValue}
                value={this.props.value}
                disabled={this.props.disabled}
                onChange={this.props.onChange} 
                data-live-search={this.props.search}
                data-live-search-style={this.props.startsWith ? 'startsWith' : ''}
                data-title={this.props.dataTitle ? this.props.dataTitle : ''}
                //data-selectedTextFormat="static"
                >

                {this.props.children}
            </select>
        );
        
        if (this.props.isHideControlGroup) {
            return selectElement;
        }

        return (
            <ControlGroup
                hasError={this.props.hasError}
                label={this.props.label}
                help={this.props.help}
                hideLabel={this.props.hideLabel}

                >
                {selectElement}
            </ControlGroup>
        );
    }
}

SelectControl.propTypes = propTypes;
SelectControl.defaultProps = defaultProps;


export default SelectControl;
