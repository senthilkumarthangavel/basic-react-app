import Actions from './actions';
import { connect } from 'react-redux';
import _RHelper from '../../helpers/redux';
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class HomePage extends Component {
	
	constructor(props) {
		
		super(props);

		this.state = _RHelper.getState(this.props);
	}

	componentWillReceiveProps(nextProps) {
		
		this.setState(_RHelper.getState(nextProps));
	}
	
	render() {

		return (
			<>
				<p onClick={(e) => {Actions.show()}} style={{'paddingLeft': '100px'}}>{this.state.count}</p>
			</>
		)
	}
}

const mapStateToProps = (state) => _RHelper.mapStateToProps(state, [
	'HomePage',
	'LanguagePage'
]);

export default connect(mapStateToProps)(HomePage);
