import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderPage extends Component {
    render() {
        return (
			<header className="site_header">
				<div className="header_left pull-left">
					<a href="#/" className="menu_action pull-left hide" id="header_menu_action"><i className="la la-bars"></i></a>
					<div className="branch dropdown pull-left">
						<a href="#/" className="toggle" data-toggle="dropdown">
							<i className="fi shop"></i>
							Branch <span className="medium">Sivanantha Colony</span>
						</a>
						<ul className="dropdown-menu">
							<li><a href="#/" ><i className="la la-map-marker"></i>Gandhipuram</a></li>
							<li><a href="#/" ><i className="la la-map-marker"></i>Sivanantha Colony</a></li>
							<li><a href="#/" ><i className="la la-map-marker"></i>RS Puram</a></li>
							<li><a href="#/" ><i className="la la-map-marker"></i>Townhall</a></li>
							<li><a href="#/" ><i className="la la-map-marker"></i>Ukkadam</a></li>
							<li><span>Do you have more branches?</span> <a href="#/" ><i className="la la-plus-circle"></i>Add another branch</a></li>
						</ul>
					</div>
				</div> 

				<div className="header_right pull-right">
					<div className="account dropdown pull-right">
						<a href="#/" className="toggle" data-toggle="dropdown"> 
							<i className="la la-user"></i> <span className="medium">Tamilvanan T</span> tamilvanan@ontabee.com
						</a>
						<ul className="dropdown-menu">
							<li><a href="#/" ><i className="la la-user"></i>My Profile</a></li>
							<li><a href="#/" ><i className="la la-language"></i>Language</a></li>
							<li><a href="#/" ><i className="la la-plug"></i>Addon Services</a></li>
							<li><a href="#/" ><i className="la la-file-text"></i>Terms & Conditions</a></li>
							<li>
								<Link to="/login"><i className="la la-power-off"></i>Sign Out</Link>
							</li>
						</ul>
					</div>

					<ul className="notifications pull-right reset">
						<li><a href="#/" className="orders.html"><i className="fi dinner"></i> <span>5</span></a></li>
						<li><a href="#/" className="others"><i className="fi notification"></i> <span>12</span></a></li>
					</ul>
				</div>
			</header>
		)
    }

}

export default HeaderPage;