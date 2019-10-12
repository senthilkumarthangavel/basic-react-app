import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'react-content-loader';

import Actions from './actions';

class RestaurantItemPage extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.data;
        this.toggleFav = this.toggleFav.bind(this);
    }
    
    toggleFav() {
        this.setState({
            isFav: !this.state.isFav
        })
    }

    render() {
        let state = this.props.data;
        if (this.props.loading) {
            return <List key={ `restaurant_item_${this.props.index}` } width={500} animate={true} />;
        }
        return (
            <div className="list_box wow fadeInUp" key={ `restaurant_item_${this.props.index}` }>
                <div className="list_img">
                    <Link to="/detail/10">
                        <img src={ state.image_url } alt={ state.name }/>
                    </Link>
                </div>
                <div className="list_info">
                    <h4>
                        <Link to="/detail/10">
                            { state.name }
                        </Link>
                    </h4>
                    <p>Italian, Indian, Chinese, North Indian</p>
                    {
                        this.state.isFav ? (
                            <i className="fa fa-heart" onClick={ (e) => { this.toggleFav() } }>(5)</i>
                        ) : (
                            <i className="fa fa-heart-o" onClick={ (e) => { this.toggleFav() } }>(4)</i>
                        )
                    }
                    
                </div>
                <div className="rating">
                    <p><span className="starbox small unchangeable" data-start-value="0.8"></span> (4.0)</p>
                    <i className="green fa fa-circle"></i> 
                    <i className="red fa fa-circle"></i>
                </div>
                <p className="sub_info"> 
                    <span className="icon"> <i className="delivery"></i>Delivery fee : <b>SAR {this.props.index + 1}</b></span>
                    <span className="icon"> <i className="basket"></i>Min Order : <b>SAR { state.price } </b></span>
                </p>                    
            </div> 
        );
    }
}

export default RestaurantItemPage;
