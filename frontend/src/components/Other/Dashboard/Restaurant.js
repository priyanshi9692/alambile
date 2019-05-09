import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import NewRequest from "./NewRequest";
import OpenRequest from "./OpenRequest";
import ClosedRequest from "./ClosedRequest";
//import OpenRequest from "./OpenRequest";

class Restaurant extends Component {

	state = {
        open: [{
            id: '123',
            date: '',
            weight: '',
            image: '',

        }],
        closed: [],
        

	}

	onChangeInput = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile = (e) => {
		e.preventDefault();
		axios.post('/registerrestaurant',this.state)
			.then(res => {
				console.log(res);
			})
	};

	render() {
		return (
		<div className="bigfrontreg">
            <div className="row paddingtop">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <h3>Restaurant Dashboard</h3>
            </div>
            <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6"> 
                <Link to={'/restaurant'} >Create New</Link> &nbsp;
                <Link to={'/restaurant/open'} >Open Requests</Link> &nbsp;
                <Link to={'/restaurant/closed'} >Closed Requests</Link> &nbsp;
                <Link to={'/restaurant'} >History</Link> &nbsp;
            </div>
            <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-9"> 
                <Route exact path="/restaurant" render={(props) => <NewRequest {...props} open={this.state.open} />} />
                <Route path="/restaurant/open" render={(props) => <OpenRequest {...props} open={this.state.open} />} />
                <Route path="/restaurant/closed" render={(props) => <ClosedRequest {...props} open={this.state.open} />} />
                <Route path="/restaurant/history" render={(props) => <NewRequest {...props} open={this.state.open} />} />
            </div>
            <div className="col-md-1"></div>
            </div>
		</div>
		)
  }
}

export default Restaurant;