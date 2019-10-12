import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';

// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
// console.log($)

class LanguagePage extends Component {
	
	componentDidMount() {
		
		
		/*custom Script Load*/
        // const script = document.createElement("script");
        // script.src = [
        //     '/js/custom.js'
		// ];
		
		// //script.async = true;
		// console.log('script: ', script);
		// document.body.appendChild(script);
		
		// $('.scrollbar-inner').scrollbar({
		// 	scrollx: false
		// });
	}

	render() {
		
		return (
			<section className="site_content language.html">
				<form className="search full_row">
					<h1 className="mb10">Choose Your Languages</h1>
					<p className="sub_desc">You can choose upto 3 languages to view your site in 3 languages.</p>
					
					<div className="form-group icon mb0">
						<input id="email" type="text" className="form-control" placeholder="Search your language..." />
						<i className="fi search"></i>
					</div> 
					
					<a href="branch-setup/address.html" className="btn circle" data-toggle="tooltip" data-placement="bottom" title="Save & Continue"><i className="la la-angle-right"></i></a>
				</form> 

				<div className="scrollbar-inner">
					<ul className="language reset">
						<li>
							<input id="id_1" type="checkbox" className="hide" />
							<label for="id_1"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_2" type="checkbox" className="hide" />
							<label for="id_2"><i>Al</i><span>Albania</span><span>Albania</span></label>
						</li>
						<li>
							<input id="id_3" type="checkbox" className="hide" checked />
							<label for="id_3"><i>Al</i><span>Algeria</span><span>Algeria</span></label>
						</li>
						<li>
							<input id="id_4" type="checkbox" className="hide" />
							<label for="id_4"><i>An</i><span>Andorra</span><span>Andorra</span></label>
						</li>
						<li>
							<input id="id_5" type="checkbox" className="hide" />
							<label for="id_5"><i>An</i><span>Angola</span><span>Angola</span></label>
						</li>
						<li>
							<input id="id_6" type="checkbox" className="hide" checked />
							<label for="id_6"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_7" type="checkbox" className="hide" />
							<label for="id_7"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_8" type="checkbox" className="hide" />
							<label for="id_8"><i>Al</i><span>Albania</span><span>Albania</span></label>
						</li>
						<li>
							<input id="id_9" type="checkbox" className="hide" />
							<label for="id_9"><i>Al</i><span>Algeria</span><span>Algeria</span></label>
						</li>
						<li>
							<input id="id_10" type="checkbox" className="hide" />
							<label for="id_10"><i>An</i><span>Andorra</span><span>Andorra</span></label>
						</li>
						<li>
							<input id="id_11" type="checkbox" className="hide" checked />
							<label for="id_11"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_12" type="checkbox" className="hide" />
							<label for="id_12"><i>Al</i><span>Albania</span><span>Albania</span></label>
						</li>
						<li>
							<input id="id_13" type="checkbox" className="hide" />
							<label for="id_13"><i>Al</i><span>Algeria</span><span>Algeria</span></label>
						</li>
						<li>
							<input id="id_14" type="checkbox" className="hide" />
							<label for="id_14"><i>An</i><span>Andorra</span><span>Andorra</span></label>
						</li>
						<li>
							<input id="id_15" type="checkbox" className="hide" />
							<label for="id_15"><i>An</i><span>Angola</span><span>Angola</span></label>
						</li>
						<li>
							<input id="id_16" type="checkbox" className="hide" />
							<label for="id_16"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_17" type="checkbox" className="hide" />
							<label for="id_17"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_18" type="checkbox" className="hide" />
							<label for="id_18"><i>Al</i><span>Albania</span><span>Albania</span></label>
						</li>
						<li>
							<input id="id_19" type="checkbox" className="hide" />
							<label for="id_19"><i>Al</i><span>Algeria</span><span>Algeria</span></label>
						</li>
						<li>
							<input id="id_20" type="checkbox" className="hide" />
							<label for="id_20"><i>An</i><span>Andorra</span><span>Andorra</span></label>
						</li>
						<li>
							<input id="id_21" type="checkbox" className="hide" />
							<label for="id_21"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_22" type="checkbox" className="hide" />
							<label for="id_22"><i>Al</i><span>Albania</span><span>Albania</span></label>
						</li>
						<li>
							<input id="id_23" type="checkbox" className="hide" />
							<label for="id_23"><i>Al</i><span>Algeria</span><span>Algeria</span></label>
						</li>
						<li>
							<input id="id_24" type="checkbox" className="hide" />
							<label for="id_24"><i>An</i><span>Andorra</span><span>Andorra</span></label>
						</li>
						<li>
							<input id="id_25" type="checkbox" className="hide" />
							<label for="id_25"><i>An</i><span>Angola</span><span>Angola</span></label>
						</li>
						<li>
							<input id="id_26" type="checkbox" className="hide" />
							<label for="id_26"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_27" type="checkbox" className="hide" />
							<label for="id_27"><i>Af</i><span>Afghanistan</span><span>Afghanistan</span></label>
						</li>
						<li>
							<input id="id_28" type="checkbox" className="hide" />
							<label for="id_28"><i>Al</i><span>Albania</span><span>Albania</span></label>
						</li>
						<li>
							<input id="id_29" type="checkbox" className="hide" />
							<label for="id_29"><i>Al</i><span>Algeria</span><span>Algeria</span></label>
						</li>
						<li>
							<input id="id_30" type="checkbox" className="hide" />
							<label for="id_30"><i>An</i><span>Andorra</span><span>Andorra</span></label>
						</li>
					</ul> 
				</div>
			</section>
		)
	}
}

export default LanguagePage;
