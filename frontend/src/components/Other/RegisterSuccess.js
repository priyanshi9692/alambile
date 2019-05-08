import React, { Component } from 'react'
import axios from "axios";
import Modal from 'react-bootstrap/Modal'
import "./style.css";

import bgImage from '../images/bgimg2.jpeg';

class RegisterSuccess extends Component {

	state = {
	username: '',
	password: '',
	fullName: '',
	email: '',
	address: '',

	}

	onChangeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile = (e) => {
		e.preventDefault();
		axios.post('/registervolunteerextra',this.state)
			.then(res => {
				console.log(res);
			})
	};

	render() {
		return (
		<div>
			<div className="bigfrontreg">
		            <div className="row justify-content-md-center top-padding clearbg loginimage">
                <img className="loginimage" id="special"  src={bgImage}/>
                    
                <hr/>
            </div>
			<div className="col-md-8 col-md-offset-5">
			<form className="registerform" onSubmit={this.onSubmitProfile}>
            <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Submission Complete</h4>
  <p>Thank you for your submission. We are glad to have you onboard! </p>
  <hr/>
  <p class="mb-0">...</p>
</div>
			</form>
			</div>
		</div>
		</div>
		)
  }
}

export default RegisterSuccess;