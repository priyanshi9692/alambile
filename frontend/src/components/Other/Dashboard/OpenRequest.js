import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class OpenRequest extends Component {

	state = {
				open: this.props.open,
				image: '',
				description: '',
				date: ''
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
						<div className="card" style={{"width": "18rem"}}>
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" className="card-link">Card link</a>
								<a href="#" className="card-link">Another link</a>
							</div>
						</div>
            </div>
            <div className="col-md-3"></div>
            </div>
		</div>
		)
  }
}

export default OpenRequest;