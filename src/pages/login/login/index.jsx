import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './index.css';

class LoginPage extends Component {
	
	constructor(props) {
		super(props);
		
		document.body.classList.add('login');
	}
	
	componentWillUnmount() {

		document.body.classList.remove('login');
	}

	render() {
		return (
			<div className="login">
				<div className="banner vh" style={{'background': `url(images/pattern-1.png)`}}>
					<img src="images/logo.png" alt ="Ontabee Logo" className="animated fadeIn"/>
					<h1 className="animated fadeIn">Free Online <b>Food</b> Ordering System <span>For Restaurant Business</span></h1>
				</div> 

				<div className="form vh">
					<div className="content">            
						<img src="images/logo-icon.png" className="animated fadeIn" alt ="Ontabee Icon"/>
						<h2 className="animated fadeIn">Hello, <b className="block">Good Morning!</b></h2>            
						<h3 className="animated fadeIn">Login to your account</h3>

						<form action="language.html" className="animated fadeIn">                
							<div className="form-group icon">
								<label htmlFor="email">Email Address</label>
								<input id="email" type="text" className="form-control"/>
								<i className="fi mail"></i>
							</div>

							<div className="form-group icon">
								<label htmlFor="pass">Password</label>
								<input id="pass" type="password" className="form-control"/>
								<i className="fi lock1"></i>
							</div> 

							<a href="/" className="btn">
								<span className="loader"></span> Login to Account <i className="la la-arrow-right"></i>
							</a>
							<p className="forgot mb0"><a data-toggle="modal" data-target="#modal-forgot">Forgot Password?</a></p>
						</form>
					</div>
				</div>
			</div> 
		)
	}
}

export default LoginPage;
