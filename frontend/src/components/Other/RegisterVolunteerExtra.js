import React, { Component } from 'react'
import axios from "axios";
import "./style.css";

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
		axios.post('/registervolunteerextra',this.state)
			.then(res => {
				console.log(res);
			})
	};

	render() {
		return (
		<div>
			<div className="container col-md-8 col-md-offset-5">
			<h3>Volunteer Questionaire</h3>
			<img
				class="profile_photo_img"
				src="https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png"
				alt="Ankita Chikodi"
				height="200"
				width="200"
			/>
			<br />
			<form className="registerform" onSubmit={this.onSubmitProfile}>
            <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span>
            As you are a new volunteer, we would like to know more about you before we proceed!
            </div>
				<div style={{ width: "80%" }} className="form-group">
				Why do you want to be a volunteer?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Hve you had previous volunteering experience?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>	
				<div style={{ width: "80%" }} className="form-group">
				Are you a certified food handler?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				What are you other hobbies and/or interests?
                <textarea style={{ width: "120%", height: "200%" }} onChange={this.onChangeInput}/>
				</div>
				<div style={{ width: "30%" }} className="form-group">
				Credentials
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="credentials"
					placeholder="credentials"
				/>
				</div>
                <div style={{ width: "30%" }} className="form-group">
				Own a car?
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
		)
  }
}

export default RegisterVolunteerExtra;