const ClassNames = require('classnames');
const ControlGroup = require('./control-group.jsx');
const ObjectAssign = require('object-assign');
const PropTypes = require('prop-types');
const React = require('react');

/*
const propTypes = {
    children: PropTypes.node,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    help: PropTypes.string,
    inputClasses: PropTypes.object,
    label: PropTypes.string,
    multiple: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.integer
    ])
};
const defaultProps = {
    type: 'text'
};*/


class CreateList extends React.Component {
     
    render() {
        return ( 
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
                                        <div className="add-fav">
                                            <input id="add-fav1" type="radio" className="radio"/>
                                            <label htmlFor="add-fav1" className="radio">Add to <i className="far fa-heart"></i> <span>Favorites ONLY</span></label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="row">
                                            <div className="w50"><button className="btn blue full close" data-dismiss="modal">Cancel</button></div>
                                            <div className="w50"><button className="btn green full">Add to List</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
        );
    }
}
/*
CreateList.propTypes = propTypes;
CreateList.defaultProps = defaultProps;*/


module.exports = CreateList;
