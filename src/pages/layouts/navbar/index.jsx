import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from  'classnames';

import './index.css';

class NavbarPage extends Component {

	constructor(props) {
		
		super(props);

		this.getSubmenu = this.getSubmenu.bind(this);
		this.getMainmenuPath = this.getMainmenuPath.bind(this);
		this.getSubmenuPath = this.getSubmenuPath.bind(this);
	}
	
	componentDidMount() {
		
		
		/*custom Script Load*/
        const script = document.createElement("script");
        script.src = [
            '/js/custom.js'
		];
		
		//document.body.appendChild(script);
	}

	getMainmenuPath(pathname) {
		
		let path = pathname.toString().split('/')
		return path.length > 2 ? path[2] : null;
	}

	getSubmenuPath(pathname) {
		
		let path = pathname.toString().split('/')
		return path.length > 3 ? path[3] : null;
	}

	// async filterRestaurant(restaurants, city) {
		
	// 	return restaurants.filter((restaurant) => {
	// 		return restaurants.city === city ? city : restaurants.city;
	// 	})
	// }

	// async getListItem(e){

	// 	var city = e ? e.target.id : null;

	// 	var restaurants = this.state.restaurants;
	// 	if (city) {
	// 		restaurants = await this.filterRestaurant(restaurants, city);
	// 	}
	// 	var displaylist = (restaurants && restaurants.length > 0) ?
			
	// 		restaurants.map(function (restaurants) {
			
	// 			return <Restaurantlist data={restaurants}/>
			
	// 		}): null;
		
	// 	//console.log("displaylist", displaylist);
		
	// 	return displaylist;
	// }
	getSubmenu(location) {
		
		let main_menu = this.getMainmenuPath(location.pathname);
		let sub_menu = this.getSubmenuPath(location.pathname);
		
		document.body.classList.remove('menu_open');
		if (main_menu === 'branch-setup') {
			
			document.body.classList.add('menu_open');
			
			return (
				<div className="sub_menu">
					<a href="#/" className="menu_action"><i className="la la-arrow-left"></i></a>
					<h2 className="regular">Branch Setup</h2>
					<div className="scrollbar-inner">
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

		if (main_menu === 'setting') {
			
			document.body.classList.add('menu_open');
			
			return (
				<div className="sub_menu">
					<a href="#/" className="menu_action"><i className="la la-arrow-left"></i></a>
					<h2 className="regular">Setting</h2>
					<div className="scrollbar-inner">
						<ul>
							<li>
								<Link to="/setting/language" className={classnames({'current': sub_menu === 'language'})}>
									Language Setting
									<span>Select your app language to view.</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			)
		}

		return null
		
	}

    render() {

		let history = this.props.history;
		let location = history ? history.location : null;
		
		return ([
			<nav className="site_menu">
				<div className="logo animated zoomIn">
					<img src="/images/logo-brand.png" alt="Ontabee"/>
				</div>
				<div className="scrollbar-inner">
					<ul className="main">
						<li>
							<Link to="/admin" className={`${location.pathname === '/admin' ? 'current' : null}`}><i className="lni-grid-alt"></i>Dashboard</Link>
						</li>
						<li>
							<Link to="/admin/branch-setup" className={`${location.pathname === '/admin/branch-setup' ? 'current' : null}`}><i className="fi shop"></i>Branch Setup</Link>
						</li>
						<li><a href="/orders.html"><i className="fi dinner"></i>Orders</a></li>
						<li><a href="/frondend.html"><i className="fi browser-setting"></i>Frontend</a></li>
						<li><a href="/users.html"><i className="fi user"></i>Users</a></li>
						<li><a href="/delivery-boy.html"><i className="fi delivery-man1"></i>Delivery Boy</a></li>
						<li>
							<Link to="/admin/setting/language" className={`${location.pathname === '/admin/setting/language' ? 'current' : null}`}>
								<i className="fi setting1"></i>Settings
							</Link>
						</li>
						<li><a href="/cms.html"><i className="fi document"></i>CMS</a></li>
						<li><a href="/reports.html"><i className="fi analytics"></i>Reports</a></li>
					</ul>
				</div>
			</nav>,
			this.getSubmenu(location)
		])
    }

}

export default NavbarPage;