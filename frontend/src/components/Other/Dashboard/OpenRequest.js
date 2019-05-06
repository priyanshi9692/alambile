import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class OpenRequest extends Component {

	state = {
        open: this.props.open,
	}

	onChangeInput = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile = (e) => {
		e.preventDefault();
		// axios.post('/registerrestaurant',this.state)
		// 	.then(res => {
		// 		console.log(res);
		// 	})
    };
    
	render() {
		return (
		<div>
            <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">     
            </div>
            <div className="col-md-3"></div>
            </div>
		</div>
		)
  }
}

export default OpenRequest;