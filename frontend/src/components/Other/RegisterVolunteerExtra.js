import React, { Component } from 'react'
import axios from "axios";
import "./style.css";

import bgImage from '../images/bgimg2.jpeg';

class RegisterVolunteerExtra extends Component {

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
		this.props.history.push("/registersuccess");
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
						<h3>Volunteer Questionaire</h3>
			<img
				class="profile_photo_img"
				src="https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png"
				alt="Prof Image"
				height="200"
				width="200"
			/>
			<br />
            <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span>
            As you are a new volunteer, we would like to know more about you before we proceed!
            </div>
				<div style={{ width: "80%" }} className="form-group" name="why">
				Why do you want to be a volunteer?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>
				<div style={{ width: "80%" }} className="form-group" name="experience">
				Have you had previous volunteering experience?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>	
				<div style={{ width: "80%" }} className="form-group" name="certification">
				Are you a certified food handler?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>
				<div style={{ width: "80%" }} className="form-group" name="hobbies">
				What are you other hobbies and/or interests?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>
                <div style={{ width: "30%" }} className="form-group" name="vehicle">
				Own a Vehicle?
				<select
                        className="form-control"
                        value={this.state.type}
                        onChange={(event) => {
                            this.setState({
                                type: event.target.value
                            });
                        }}
                    >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
				</div>
				<div style={{ width: "30%" }}>
				<button
					onClick={this.onSubmitProfile}
					className="btn btn-success"
					type="submit"
				>
					Submit!
				</button>
				</div>
			</form>
			</div>
		</div>
		</div>
		)
  }
}

export default RegisterVolunteerExtra;