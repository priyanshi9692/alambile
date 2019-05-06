import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Map from "../Map";

class Volunteer extends Component {

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
		<div>
            <div className="row paddingtop">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <h3>Volunteer Dashboard</h3>
            </div>
            <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row mapsize">
            <div className="col-md-3"></div>
            <div className="col-md-6 mapsize"> 
                <Map />
            </div>
            <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6"> 
            </div>
            <div className="col-md-3"></div>
            </div>
		</div>
		)
  }
}

export default Volunteer;