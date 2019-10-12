/* global document, window */
const ClassNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');
const ObjectAssign = require('object-assign');


const propTypes = {
    children: PropTypes.node,
    footer: PropTypes.node,
    header: PropTypes.node,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    param: PropTypes.node
};


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.els = {};
        this.state = {
            bgHeight: 1080
        };
        this.boundWindowResize = this.onWindowResize.bind(this);
        this.boundKeyUp = this.onKeyUp.bind(this); 
    }

    componentDidMount() {
        window.addEventListener('resize', this.boundWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.boundWindowResize);
        document.removeEventListener('keyup', this.boundKeyUp);
        document.body.classList.remove('modal-open');
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.show) {
            document.addEventListener('keyup', this.boundKeyUp);
            document.body.classList.add('modal-open');
        }
        else {
            document.removeEventListener('keyup', this.boundKeyUp);
            document.body.classList.remove('modal-open');
        }
    }

    onWindowResize() {

        this.setState({ bgHeight: window.innerHeight });
    }

    onBackdropClick(event) {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    onKeyUp(event) {
        if (event.which === 27) {
            this.props.onClose();
        }
    }

    render() {

       const modalClasses = ClassNames(ObjectAssign({
            modal: true,
            custom : true
        }, this.props.groupClasses));
        const modalStyles = {};

        if (this.props.show) {
            modalStyles.display = 'block';
        }

        const modalBgStyles = {
            height: this.state.bgHeight + 'px',
            top: '0px'
        };
        const containerStyles = { display: 'none' };

        if (this.props.show) {
            containerStyles.display = 'block';
        }
        let param_var;
        if (this.props.popup_param !==0) {
            param_var = <input type="hidden" id="item_id" name="item_id" value={this.props.param}/>;
        }
 
        let modalHeader;

        if (this.props.header) {
            /*modalHeader = <div className="modal-header">
                <button type="button" className="close" onClick={this.props.onClose}>
                    X
                </button>
                <h4 className="modal-title">{this.props.header}</h4>
            </div>;*/

            modalHeader = this.props.header;
        }

        let modalFooter;
        if (this.props.footer) {
            modalFooter = <div className="modal-footer">
                {this.props.footer}
            </div>;
        }
        let modalBody;

        if (this.props.children) {
            modalBody = <div className="modal-body">
                {this.props.children}
            </div>;            
        }

        return ( 
             <div style={containerStyles}>
              <div
                    ref={(c) => (this.els.backdrop = c)}
                    className="modal-backdrop in"
                    style={modalBgStyles}>
                </div>
                <div
                    id={this.props.id}
                    ref={(c) => (this.els.modal = c)}
                    style={modalStyles}
                    className="modal custom custom-modal1"
                    onClick={this.onBackdropClick.bind(this)}>
                 <div 
                        ref={(c) => (this.els.dialog = c)}
                        className="modal-dialog modal-md">
                        <div className="modal-content">
                            {modalHeader}
                            {modalBody}     
                            {param_var}                      
                            {modalFooter}
                        </div>
                    </div> 
                </div> 
            </div> 
        );
    }
}

Modal.propTypes = propTypes;


module.exports = Modal;
