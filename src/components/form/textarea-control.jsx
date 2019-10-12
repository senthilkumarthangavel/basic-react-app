const ClassNames = require('classnames');
const ControlGroup = require('./control-group.jsx');
const ObjectAssign = require('object-assign');
const PropTypes = require('prop-types');
const React = require('react');
const renderHTML = require('react-render-html');


const propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    help: PropTypes.string,
    inputClasses: PropTypes.object,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.string,
    hideLabel: PropTypes.bool,
    onBlurTextArea: PropTypes.func,
    value: PropTypes.node,
    prependElement : PropTypes.node,
    prependElementNotString : PropTypes.bool,
    appendElement : PropTypes.node,
    appendElementNotString : PropTypes.bool,
    defaultValue : PropTypes.node,
    title : PropTypes.string,
    groupClasses: PropTypes.object,
    isKey: PropTypes.bool
};

const defaultProps = {
    type: 'text',
    autoCapitalize: 'off',
    onBlurTextArea: () => {},
};



class TextareaControl extends React.Component {
        constructor(props){
        super(props);
        this.state = {
          type: this.props.type,
        }
        this.handleBlur = this.handleBlur.bind(this); 
        //this.onBlurTextArea = this.onBlurTextArea.bind(this); 
    }
    
    focus() {

        return this.input.focus();
    }
    
    handleBlur(x,y) {
        const { onBlurTextArea } = this.props;
        onBlurTextArea ? onBlurTextArea(x,y) : null;
    }

    value() {

        return this.input.value;
    }

    render() {
        const groupClasses = ClassNames(ObjectAssign({
            'form-group': true,
            'has-error': this.props.hasError
        }, this.props.groupClasses));

        const inputClasses = ClassNames(ObjectAssign({
            'form-control': true
        }, this.props.inputClasses));

        return (
            <ControlGroup
                hasError={this.props.hasError}
                label={this.props.label}
                hideLabel={this.props.hideLabel}
                help={this.props.help}
                groupClasses={this.props.groupClasses}>
                {(this.props.prependElement && this.props.prependElementNotString) ? (this.props.prependElement) : ''}
                {(this.props.prependElement && !this.props.prependElementNotString) ? (renderHTML(this.props.prependElement)) : ''}
                {this.props.isKey ? (
                    <textarea
                        key={`${Math.floor((Math.random() * 1000))}-min`}
                        ref={(c) => (this.input = c)}
                        className={inputClasses}
                        name={this.props.name}
                        rows={this.props.rows}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        defaultValue={this.props.defaultValue}
                        disabled={this.props.disabled ? 'disabled' : undefined}
                        onChange={this.props.onChange}
                        onBlur={this.handleBlur}
                    /> ) : (
                    <textarea
                        ref={(c) => (this.input = c)}
                        className={inputClasses}
                        name={this.props.name}
                        rows={this.props.rows}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        defaultValue={this.props.defaultValue}
                        disabled={this.props.disabled ? 'disabled' : undefined}
                        onChange={this.props.onChange}
                        onBlur={this.handleBlur}
                    />

                )}
                {(this.props.appendElement && this.props.appendElementNotString) ? (this.props.appendElement) : ''}
                {(this.props.appendElement && !this.props.appendElementNotString) ? (renderHTML(this.props.appendElement)) : ''}
            </ControlGroup>
        );
    }
}

TextareaControl.propTypes = propTypes;

export default TextareaControl;
