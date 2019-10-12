import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderPage extends Component {
    render() {
        return [
			<header className="site_header">
				<div className="header_left pull-left">
					<div className="branch dropdown pull-left">
						<a className="toggle" data-toggle="dropdown">
							<i className="fi shop"></i>
							Branch <span className="medium">Sivanantha Colony</span>
						</a>
						<ul className="dropdown-menu">
							<li><a><i className="la la-map-marker"></i>Gandhipuram</a></li>
							<li><a><i className="la la-map-marker"></i>Sivanantha Colony</a></li>
							<li><a><i className="la la-map-marker"></i>RS Puram</a></li>
							<li><a><i className="la la-map-marker"></i>Townhall</a></li>
							<li><a><i className="la la-map-marker"></i>Ukkadam</a></li>
							<li><span>Do you have more branches?</span> <a><i className="la la-plus-circle"></i>Add another branch</a></li>
						</ul>
					</div>
				</div> 

				<div className="header_right pull-right">
					<div className="account dropdown pull-right">
						<a className="toggle" data-toggle="dropdown"> 
							<i className="la la-user"></i> <span className="medium">Tamilvanan T</span> tamilvanan@ontabee.com
						</a>
						<ul className="dropdown-menu">
							<li><a><i className="la la-user"></i>My Profile</a></li>
							<li><a><i className="la la-language"></i>Language</a></li>
							<li><a><i className="la la-plug"></i>Addon Services</a></li>
							<li><a><i className="la la-file-text"></i>Terms & Conditions</a></li>
							<li>
								<Link to="/login"><i className="la la-power-off"></i>Sign Out</Link>
							</li>
						</ul>
					</div>

					<ul className="notifications pull-right reset">
						<li><a className="orders.html"><i className="fi dinner"></i> <span>5</span></a></li>
						<li><a className="others"><i className="fi notification"></i> <span>12</span></a></li>
					</ul>
				</div>
			</header>
		]
    }

}

export default HeaderPage;