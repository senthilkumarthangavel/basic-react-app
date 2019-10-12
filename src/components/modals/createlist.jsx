/* global document, window */
const ClassNames = require('classnames');
const PropTypes = require('prop-types');
const React = require('react');


const propTypes = {
    children: PropTypes.node,
    footer: PropTypes.node,
    header: PropTypes.node,
    onClose: PropTypes.func,
    show: PropTypes.bool
};


class Createlist extends React.Component {
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

        const modalClasses = ClassNames({
            modal: true
        });
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

        let modalHeader;

        if (this.props.header) {
            modalHeader = <div className="modal-header">
                <button type="button" className="close" onClick={this.props.onClose}>
                    &times;
                </button>
                <h4 className="modal-title">{this.props.header}</h4>
            </div>;
        }

        let modalFooter;

        if (this.props.footer) {
            modalFooter = <div className="modal-footer">
                {this.props.footer}
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
                    ref={(c) => (this.els.modal = c)}
                    style={modalStyles}
                    className={modalClasses}
                    onClick={this.onBackdropClick.bind(this)}>

                    <div
                        ref={(c) => (this.els.dialog = c)}
                        className="modal-dialog">

                        <div className="modal-content">
                            {modalHeader}
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            {modalFooter}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Createlist.propTypes = propTypes;


module.exports = Createlist;
/*
<div className="modal-dialog"> 
                              
                                <div className="modal-content"> 
                                    <div className="modal-header"> 
                                        <button type="button" className="close" data-dismiss="modal">X</button> 
                                        <h4 className="modal-title">Add to List</h4> 
                                    </div> 
                                    <div className="modal-body"> 
                                        <div className="form-group"> 
                                            <select className="selectpicker add-list"> 
                                                <option>+ Create New List</option> 
                                                <option>Add to Favourite ONLY</option> 
                                                  
                                                <option>My List #1</option> 
                                                <option>OKC Restaurants</option> 
                                                <option>This list name is super long,so that at some oint it will wrap to the next line like this</option> 
                                                <option>My List #2</option> 
                                            </select> 
                                        </div> 
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="New List Name"/> 
                                        </div> 
                                        <div className="form-group pub-pri"> 
                                            <label className="w_33" >This list will be:</label> 
                                            <div className="w_33"> 
                                                <input id="public" type="radio" className="radio" name="pub-pri"/> 
                                                <label htmlFor="public" className="radio">Public <i className="fa fa-eye" aria-hidden="true"></i></label> 
                                            </div> 
                                            <div className="w_33"> 
                                                <input id="private" type="radio" className="radio" name="pub-pri"/> 
                                                <label htmlFor="private" className="radio">Private <i className="fa fa-eye-slash" aria-hidden="true"></i></label> 
                                            </div> 
                                        </div> 
                                        <div className="add-fav w50"> 
                                            <input id="add-fav" type="radio" className="radio"/> 
                                            <label htmlFor="add-fav1" className="radio">Add to <i className="fa fa-heart-o" aria-hidden="true"></i> <span>Favorites</span></label> 
                                        </div> 
                                        <div className="add-fav-qty w50"> 
                                            <div className="form-group"> 
                                                <input type="text" className="form-control" id="qua" name="qua" defaultValue="1"/> 
                                            </div> 
                                            <button><i className="fa fa-plus" aria-hidden="true"></i></button> 
                                            <button><i className="fa fa-minus" aria-hidden="true"></i></button> 
                                            <label htmlFor="Quantity1">Quantity: 1</label> 
                                        </div> 
                                    </div> 
                                    <div className="modal-footer"> 
                                        <div className="row"> 
                                            <div className="w50"><button className="btn blue full" data-dismiss="modal">Cancel</button></div> 
                                            <div className="w50"><button className="btn green full">Add to List</button></div> 
                                        </div> 
                                    </div> 
                                </div> 
                             
                            </div> 
                            */