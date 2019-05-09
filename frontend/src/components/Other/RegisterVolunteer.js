import React, { Component } from 'react'
import axios from "axios";
import "./style.css";

import bgImage from '../images/bgimg2.jpeg';

class RegisterVolunteer extends Component {

	state = {
	password: '',
	firstname: '',
	email: '',
	address: '',
	zipcode: '',
	city: '',
	image: 'https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png',
	file: '',
	error: {},
	}

	onChangeInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile = (e) => {
		e.preventDefault();
		console.log(Object.entries(this.validate()).length);
		if(Object.entries(this.validate()).length === 0) {
			axios.post('/registervolunteer',this.state)
				.then(res => {
					console.log(res);
				})
			}
			this.props.history.push("/registervolunteerextra");
	};

  getBase64(file, cb) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
          cb(reader.result)
      };
      reader.onerror = function (error) {
          console.log('Error: ', error);
      };
  }

  fileChangedHandler = (e) => {

      let idCardBase64 = '';
      this.getBase64(e.target.files[0], (result) => {
          idCardBase64 = result;
      });

      const file = e.target.files[0]
      const reader = new FileReader();

      reader.onloadend = () => {
          this.setState({
              image: idCardBase64
          })
      }
      if (file) {
          reader.readAsDataURL(file);
          this.setState({
              image: idCardBase64
          })
      }
      else {
          this.setState({
              image: ""
          })
      }
	}
  fileChangedHandler2 = (e) => {

		let idCardBase64 = '';
		this.getBase64(e.target.files[0], (result) => {
				idCardBase64 = result;
		});

		const file = e.target.files[0]
		const reader = new FileReader();

		reader.onloadend = () => {
				this.setState({
						file: idCardBase64
				})
		}
		if (file) {
				reader.readAsDataURL(file);
				this.setState({
						file: idCardBase64
				})
		}
		else {
				this.setState({
						file: ""
				})
		}
}

  uploadHandler = () => {
      console.log(this.state.image)
  }

  validate(){
	const error = {};
	if(!this.state.firstname){
		error.firstname = 'Enter First Name';
	}
	if(!this.state.email){
		error.email = 'Enter Email';
	}
	if(!this.state.city){
		error.city = 'Enter City';
	}
	if(!this.state.address){
		error.address = 'Enter address';
	}
	if(!this.state.zipcode){
		error.zipcode = 'Enter Zip';
	}else if(!new RegExp("^[0-9]{5}$|^[0-9]{5}\-[0-9]{4}$").test(this.state.zipcode)){
		error.zipcode = 'Enter Valid Zip';
	}
	if(!this.state.password){
		error.password = 'Enter Password';
	}else if(!new RegExp("^(?=[a-zA-Z])(?=.*[0-9])(?=.*[#\$_%!@.~^:?()+&\/*-])(?=.*[A-Z])(?=.*[a-z])(?!.*[^a-zA-Z0-9#\$_%!@.~^:?()+&\/*-])(?!.*\s).{3,15}$").test(this.state.password)){
		error.password = 'Enter a Stronger Password';
	}
	this.setState({error: error});
	return error;
}

	render() {
		return (
		<div className="bigfrontreg">
					<div className="row justify-content-md-center top-padding clearbg loginimage">
							<img className="loginimage" id="special"  src={bgImage}/>
							<hr/>
					</div>
			<div className="col-md-8 col-md-offset-5">

			<form className="registerform" onSubmit={this.onSubmitProfile}>
				<h1>Volunteer Registration</h1>
				Profile Image
				<img
					class="profile_photo_img"
					src={this.state.image}
					alt="Prof Image"
					height="200"
					width="200"
				/>
				<input type="file" onChange={this.fileChangedHandler}/>
				<br />
				
				<div style={{ width: "80%" }} className="form-group">
				First Name
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
								name="firstname"
					placeholder="first name"
				/>
				<p className='error'>{this.state.error.firstname}</p>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Address
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="address"
					placeholder="address"
				/>
				<p className='error'>{this.state.error.address}</p>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				City
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="city"
					placeholder="city"
				/>
				<p className='error'>{this.state.error.city}</p>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Zip Code
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
					name="zipcode"
					placeholder="zipcode"
				/>
				<p className='error'>{this.state.error.zipcode}</p>
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
				<p className='error'>{this.state.error.email}</p>
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
				<p className='error'>{this.state.error.password}</p>
				</div>
				<div style={{ width: "80%" }} className="form-group">
				Image of Food Handler Card
                <br />
                <input type="file" onChange={this.fileChangedHandler2} />
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

export default RegisterVolunteer;