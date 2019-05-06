import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class NewRequest extends Component {

	state = {
        open: this.props.open,
        description: '',
        weight: '',
        type: '',
        image: '',
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

        const file    = e.target.files[0]
        const reader  = new FileReader();
    
        reader.onloadend = () => {
            this.setState({
                image: idCardBase64
            })
        }
        if (file) {
            reader.readAsDataURL(file);
            this.setState({
                image :idCardBase64
            })
        } 
        else {
            this.setState({
                image: ""
            })
        }
    }

	render() {
		return (
		<div>
            <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">    
            <form className="registerform" onSubmit={this.onSubmitProfile}>
				<div style={{ width: "60%" }} className="form-group">
				Description
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
								name="description"
					placeholder="description"
				/>
				</div>
				<div style={{ width: "60%" }} className="form-group">
				Type
                    <select
                        className="form-control"
                        value={this.state.type}
                        onChange={(event) => {
                            this.setState({
                                type: event.target.value
                            });
                        }}
                    >
                        <option value="savory">Savory</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="dessert">Dessert</option>
                        
                    </select>
				</div>
				<div style={{ width: "30%" }} className="form-group">
				Weight
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
								name="weight"
					placeholder="weight"
				/>
				</div>
                <div style={{ width: "30%" }} className="form-group">
				Image
				<img
                    class="profile_photo_img"
                    src="https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png"
                    alt="Ankita Chikodi"
                    height="200"
                    width="200"
                />
                <br />
                <input type="file" onChange={this.fileChangedHandler} />
				</div>
				<div style={{ width: "60%" }}>
				<button
					onClick={this.onSubmitProfile}
					className="btn btn-success"
					type="submit"
				>
					Request!
				</button>
				</div>
			</form>   
            </div>
            <div className="col-md-3"></div>
            </div>
		</div>
		)
  }
}

export default NewRequest;