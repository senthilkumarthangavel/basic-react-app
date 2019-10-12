import React, { Component } from 'react';

import Store from './store';
import Actions from './actions';
import RestaurantItem from './_item';


class RestaurantsPage extends Component {
    constructor(props) {
        super(props);

        this.state = Store.getState();

        this.getSearch = this.getSearch.bind(this);
    }

    componentDidMount() {
        this.getData();
        
        window.scrollTo(0, 0);
        this.unsubscribeStore = Store.subscribe(this.onStoreChange.bind(this));
    }

    componentWillUnmount() {
        
        Actions.emptyList();

        this.unsubscribeStore();
    }

    onStoreChange() {

        this.setState(Store.getState());
    }

    getData() {
        let url = 'https://opentable.herokuapp.com/api/restaurants?state=IL';
        Actions.getData(url);
    }

    getListItem() {
        let restaurants = this.state.restaurants_list;
        let data, loading_data;
        
        if (restaurants === undefined || restaurants.length === 0) {
            /*for loader*/
            loading_data = [1, 2, 3, 4, 5].map((value, index) => {
                return <RestaurantItem 
                            key={index} 
                            data={{}} 
                            index={index} 
                            loading={true} />
            })
        }

        data = restaurants.length > 0 ? restaurants.map((value, index) => {
            return <RestaurantItem 
                        key={index} 
                        data={value} 
                        index={index} 
                        loading={this.state.list_loading} />
        }) : loading_data;

        return data;
    }

    getSearch(value) {
        Actions.getSearch(value);
    }

    render() {
        return (
            <div className="page_content full_row">
                <div className="container">
                    <ul className="breadcrumb reset">
                        <li><a href="#">Home</a></li>
                        <li>Restaurents</li>
                    </ul>
                    
                    <a href="map-view.html" className="map_view" data-toggle="tooltip" title="Map view" data-placement="left">
                        <img src="images/map_view.png" />
                    </a>
                    
                    <div className="full_row">
                        <div className="row relative" data-sticky_parent>
                            <div id="filter" className="col-xs-3 sticky sidebar_main" data-sticky_column>
                                <div className="sidebar">
                                    <h4><a data-toggle="collapse" href="#filter_1">Cuisines</a></h4>
                                    <ul id="filter_1" className="reset collapse in">
                                        <li>
                                            <input id="cb_Italian" type="checkbox" className="hide" />
                                            <label htmlFor="cb_Italian" className="checkbox">Italian</label>
                                        </li>
                                        <li>
                                            <input id="cb_Indian" type="checkbox" className="hide" defaultChecked="true" />
                                            <label htmlFor="cb_Indian" className="checkbox">Indian</label>
                                        </li>
                                        <li>
                                            <input id="cb_Maxican" type="checkbox" className="hide" />
                                            <label htmlFor="cb_Maxican" className="checkbox">Maxican</label>
                                        </li>
                                        <li>
                                            <input id="cb_American" type="checkbox" className="hide" />
                                            <label htmlFor="cb_American" className="checkbox">American</label>
                                        </li>
                                        <li>
                                            <input id="cb_Chinese" type="checkbox" className="hide" />
                                            <label htmlFor="cb_Chinese" className="checkbox">Chinese</label>
                                        </li>
                                        <li>
                                            <input id="cb_Desserts" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_Desserts" className="checkbox">Indian Desserts</label>
                                        </li>
                                        <li>
                                            <input id="cb_International" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_International" className="checkbox">International Desserts</label>
                                        </li>
                                        <li>
                                            <input id="cb_North" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_North" className="checkbox">North Indian</label>
                                        </li>
                                        <li>
                                            <input id="cb_Rajasthani" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_Rajasthani" className="checkbox">Rajasthani</label>
                                        </li>
                                        <li>
                                            <input id="cb_South" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_South" className="checkbox">South Indian</label>
                                        </li>
                                    </ul>
                                    
                                    <h4><a data-toggle="collapse" href="#filter_2">Food Type</a></h4>
                                    <ul id="filter_2" className="reset collapse in">
                                        <li>
                                            <input id="cb_Veg" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_Veg" className="checkbox">Veg</label>
                                        </li>
                                        <li>
                                            <input id="cb_NonVeg" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_NonVeg" className="checkbox">Non Veg</label>
                                        </li>
                                    </ul>
                                    
                                    <h4><a data-toggle="collapse" href="#filter_3">Nearest</a></h4>
                                    <ul id="filter_3" className="reset collapse in">
                                        <li>
                                            <input id="cb_15min" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_15min" className="checkbox">0 - 15min</label>
                                        </li>
                                        <li>
                                            <input id="cb_30min" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_30min" className="checkbox">15min - 30min</label>
                                        </li>
                                        <li>
                                            <input id="cb_40min" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_40min" className="checkbox">30min - 40min</label>
                                        </li>
                                        <li>
                                            <input id="cb_60min" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_60min" className="checkbox">45min - 60min</label>
                                        </li>
                                    </ul>
                                    
                                    <h4><a data-toggle="collapse" href="#filter_4">Delivery Type</a></h4>
                                    <ul id="filter_4" className="reset collapse in">
                                        <li>
                                            <input id="cb_Company" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_Company" className="checkbox">Company</label>
                                        </li>
                                        <li>
                                            <input id="cb_Vendor" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_Vendor" className="checkbox">Vendor</label>
                                        </li>
                                    </ul>
                                    
                                    <h4><a data-toggle="collapse" href="#filter_5">Min.Order Value</a></h4>
                                    <ul id="filter_5" className="reset collapse in">
                                        <li>
                                            <input id="cb_All" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_All" className="checkbox">All</label>
                                        </li>
                                        <li>
                                            <input id="cb_100" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_100" className="checkbox">Under 100</label>
                                        </li>
                                        <li>
                                            <input id="cb_200" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_200" className="checkbox">Under 200</label>
                                        </li>
                                        <li>
                                            <input id="cb_300" type="checkbox" className="hide"/>
                                            <label htmlFor="cb_300" className="checkbox">Under 300</label>
                                        </li>
                                    </ul>
                                </div>              
                            </div>
                            
                            <div className="col-xs-6 listing" data-sticky_column>
                                <form className="search_listing full_row">
                                    <input className="form-control" placeholder="Search" onChange={ (e) => {this.getSearch(e.target.value) }} value={this.state.search}/>
                                    <i className="fa fa-search"></i>
                                </form>

                                { this.getListItem() }
    
                                <div className="load_more full_row">
                                    <a className="btn line">Load More <i className="fa fa-spinner"></i></a>
                                </div>
                            </div> 
                            
                            <div id="sorting" className="col-xs-3 sidebar_main" data-sticky_column>
                                <div className="sidebar">
                                    <h4><a data-toggle="collapse" href="#filter_type">Listing Type</a></h4>
                                    <ul id="filter_type" className="reset collapse in">
                                        <li>
                                            <input id="cb_Restaurant" name="Type" type="radio" className="hide" defaultChecked="true" />
                                            <label htmlFor="cb_Restaurant" className="radio">Restaurant</label>
                                        </li>
                                        <li>
                                            <input id="cb_Truck" name="Type" type="radio" className="hide"/>
                                            <label htmlFor="cb_Truck" className="radio">Food Truck</label>
                                        </li>
                                    </ul>
                                    
                                    <h4><a data-toggle="collapse" href="#filter_sort">Sort By</a></h4>
                                    <ul id="filter_sort" className="reset collapse in">
                                        <li>
                                            <input id="cb_Popularity" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_Popularity" className="radio">Popularity</label>
                                        </li>
                                        <li>
                                            <input id="cb_AZ" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_AZ" className="radio">A- Z</label>
                                        </li>
                                        <li>
                                            <input id="cb_Delivery" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_Delivery" className="radio">Fast Delivery</label>
                                        </li>
                                        <li>
                                            <input id="cb_Recommended" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_Recommended" className="radio">Recommended</label>
                                        </li>
                                        <li>
                                            <input id="cb_Ratings" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_Ratings" className="radio">Ratings</label>
                                        </li>
                                        <li>
                                            <input id="cb_New" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_New" className="radio">New</label>
                                        </li>
                                        <li>
                                            <input id="cb_Fee" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_Fee" className="radio">Delivery Fee</label>
                                        </li>
                                        <li>
                                            <input id="cb_Open" name="sort" type="radio" className="hide"/>
                                            <label htmlFor="cb_Open" className="radio">Open</label>
                                        </li>
                                    </ul>                       
                                </div> 
                            </div> 
                        </div>
                        
                        <a className="sidebar_submit">Submit</a>
                        <div className="mobile_option">
                            <a className="btn_filter col-xs-4">Filter</a>
                            <a className="btn_sort col-xs-4">Sorting</a>
                            <a href="map-view.html" className="btn_map col-xs-4">Map View</a>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}


export default RestaurantsPage;
