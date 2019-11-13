
import { connect } from 'react-redux';
import _commonHelper from '../../helpers/common';
import _RHelper from '../../helpers/redux';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';

//import { Link } from 'react-router-dom';
import './index.css';
import LanguageItem from './_item';
import _scriptHelper from '../../helpers/onload-script.js';

import $ from 'jquery';
import Actions from './actions';

class LanguagePage extends Component {
	
	constructor(props) {
		
		super(props);
		
		Actions.getDetails();

		this.state = _RHelper.getState(this.props);

		this.onLoadScript = this.onLoadScript.bind(this);
		this.getItem = this.getItem.bind(this);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		
		this.setState(_RHelper.getState(nextProps));
	}

	componentDidMount() {
		
		_scriptHelper.scriptOnload(this.onLoadScript);
	}
	
	onLoadScript() {
		
		return true;
	}

	getItem() {

		const {
			data,
			loading
		} = this.state;

		return !_commonHelper.isEmpty(data) ? Object.keys(data).map((index) => {
			return <LanguageItem item={data[index]} {...this.state}/>;
		}) : null;

	}

	render() {
		
		console.log('this.state: ', this.state);
		return (
			<section className="site_content language.html">
				<Helmet>
					<title>Language</title>
				</Helmet>
				<form className="search full_row">
					<h1 className="mb10">Choose Your Languages</h1>
					<p className="sub_desc">You can choose upto 3 languages to view your site in 3 languages.</p>
					
					<div className="form-group icon mb0">
						<input id="email" type="text" className="form-control" placeholder="Search your language..." />
						<i className="fi search"></i>
					</div> 
					
					<a href="branch-setup/address.html" className="btn circle" data-toggle="tooltip" data-placement="bottom" title="Save & Continue"><i className="la la-angle-right"></i></a>
				</form> 

				<div className="scrollbar-inner" ref={el => this.el = el}>
					<ul className="language reset">
						{this.getItem()}
					</ul> 
				</div>
			</section>
		)
	}
}

const mapStateToProps = (state) => _RHelper.mapStateToProps(state, [
	'LanguagePage'
]);

export default connect(mapStateToProps)(LanguagePage);
