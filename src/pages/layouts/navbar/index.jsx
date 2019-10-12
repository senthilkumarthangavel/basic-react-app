import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class NavbarPage extends Component {

	constructor(props) {
		
		super(props);

		this.getSubmenu = this.getSubmenu.bind(this);
	}
	
	getSubmenu() {
		
		let history = this.props.history;
		let location = history ? history.location : null;
		
		if (location.pathname === '/branch-setup') {
			
			return (
				<div class="sub_menu">
					<a class="menu_action"><i class="la la-arrow-left"></i></a>
					<h2 class="regular">Branch Setup</h2>
					<div class="scrollbar-inner">
						<ul>
							<li><a href="branch-setup/address.html">Basic Settings <span>Nulla fermentum vitae metusat atornar fusce posuere ino.</span></a></li>
							<li><a href="/branch-setup/pickup.html">Services Options <span>Nulla fermentum vitae metusat atornar fusce posuere ino.</span></a></li>
							<li><a href="/branch-setup/payment-taxes.html">Payment, & Taxes <span>Nulla fermentum vitae metusat atornar fusce posuere ino.</span></a></li>
							<li><a href="/branch-setup/menu-setup.html">Menu Setup <span>Nulla fermentum vitae metusat atornar fusce posuere ino.</span></a></li>
							<li><a href="/branch-setup/notifications.html">Advanced Settings <span>Nulla fermentum vitae metusat atornar fusce posuere ino.</span></a></li>
						</ul>
					</div>
				</div>
			)
		}
		
	}

    render() {

		return ([
			<nav className="site_menu">
				<div className="logo animated zoomIn">
					<img src="/images/logo-brand.png" alt="Ontabee"/>
				</div>
				<div className="scrollbar-inner">
					<ul className="main">
						<li>
							<Link to="/" className="current"><i className="lni-grid-alt"></i>Dashboard</Link>
						</li>
						<li>
							<Link to="/language" ><i className="fi shop"></i>Branch Setup</Link>
						</li>
						<li><a href="/orders.html"><i className="fi dinner"></i>Orders</a></li>
						<li><a href="/frondend.html"><i className="fi browser-setting"></i>Frontend</a></li>
						<li><a href="/users.html"><i className="fi user"></i>Users</a></li>
						<li><a href="/delivery-boy.html"><i className="fi delivery-man1"></i>Delivery Boy</a></li>
						<li><a href="/settings.html"><i className="fi setting1"></i>Settings</a></li>
						<li><a href="/cms.html"><i className="fi document"></i>CMS</a></li>
						<li><a href="/reports.html"><i className="fi analytics"></i>Reports</a></li>
					</ul>
				</div>
			</nav>,
			this.getSubmenu()
		])
    }

}

export default NavbarPage;