import React, { Component } from 'react'
import axios from "axios";
import "./style.css";

class RegisterShelter extends Component {

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
		axios.post('/registershelter',this.state)
			.then(res => {
				console.log(res);
			})
	};

	render() {
		return (
		<div>
			<div className="container col-md-8 col-md-offset-5">
			<h3>Food Shelter Registration</h3>
			<img
				class="profile_photo_img"
				src="https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png"
				alt="prof pic"
				height="200"
				width="200"
			/>
			<br />
			<form className="registerform" onSubmit={this.onSubmitProfile}>
				<div style={{ width: "80%" }} className="form-group">
				Username
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
								name="username"
					placeholder="username"
				/>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Password
				<input
					onChange={this.onChangeInput}
					type="password"
					className="form-control"
								name="password"
					placeholder="password"
				/>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Full Name
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
								name="fullName"
					placeholder="full name"
				/>
				</div>

				<div style={{ width: "80%" }} className="form-group">
				Email
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="email"
					placeholder="email"
				/>
				</div>

				<div style={{ width: "80%" }} className="form-group">
				Address:
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="address"
					placeholder="address"
				/>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Credentials
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="credentials"
					placeholder="credentials"
				/>
				</div>
				<div style={{ width: "80%" }}>
				<button
					onClick={this.onSubmitProfile}
					className="btn btn-success"
					type="submit"
				>
					Register!
				</button>
				</div>
			</form>
			</div>
		</div>
		)
  }
}

export default RegisterShelter;