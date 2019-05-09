import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.css';
import newimage1 from '../../images/bgimg3.jpeg';
import newimage2 from '../../images/holder.PNG';
import newimage3 from '../../images/qrcode.jpeg';
import newimage4 from '../../images/finished.jpg';

class NewRequest extends Component {

	state = {
        open: this.props.open,
        description: '',
        shelflife:'',
        quantity: '',
        type: '',
        image: "https://qsf.fs.quoracdn.net/-3-images.new_grid.profile_pic_default.png-26-345032f7d91f49f2.png",
        status: 'ready',
        email:localStorage.getItem("email"),
	}

	onChangeInput = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile = (e) => {
    e.preventDefault();
console.log(localStorage.getItem("email"));
		axios.post('/restaurantdetails',this.state)
			.then(res => {
        console.log(res);
        if(res.data== "success"){
          alert("Successfully saved details!");
        }
        else{
          alert("something went wrong, please try again!");
        }
			})
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
            <div className="col-md-6">
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={newimage1} />
    <Card.Body>
      <Card.Title><h1>Step 1</h1></Card.Title>
      <Card.Text>
        Before you donate your food, inspect your food and make sure that it is packaged securely for our volunteers. Then, take an image and upload so that volunteer and food bank know what they are about to receive
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={newimage3} />
    <Card.Body>
      <Card.Title><h1>Step 2</h1></Card.Title>
      <Card.Text>
        Fill out the rest of the form and request for the pickup. When a volunteer arrives to pickup your request, please ask to take the QR code given to the volunteer. This will authenticate that the correct volunteer has shown up.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={newimage4} />
    <Card.Body>
      <Card.Title><h1>Step 3</h1></Card.Title>
      <Card.Text>
      When a volunteer arrives to pickup your request, please ask to take the QR code given to the volunteer. This will authenticate that the correct volunteer has shown up.
      Congratulations, you have just reduced waste while helping those in need!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>;
            </div>
            <div className="col-md-4">    
            <form className="registerform" onSubmit={this.onSubmitProfile}>
                <div style={{ width: "30%" }} className="form-group">
				Food Image
				<img
                    class="profile_photo_img"
                    src={this.state.image}
                    alt="Food Image"
                    height="200"
                    width="200"
                />
                <br />
                <input type="file" onChange={this.fileChangedHandler} />
				</div>
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
				<div style={{ width: "60%" }} className="form-group">
				Shelf Life
                    <select
                        className="form-control"
                        value={this.state.shelflife}
                        onChange={(event) => {
                            this.setState({
                              shelflife: event.target.value
                            });
                        }}
                    >
                        <option value="tonight">Tonight</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="years">Years</option>
                    </select>
				</div>
				<div style={{ width: "60%" }} className="form-group">
				Quantity
				<input
					onChange={this.onChangeInput}
					type="text"
					className="form-control"
								name="quantity"
					placeholder="quantity in lbs"
				/> lbs
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
            <div className="col-md-2">

            </div>
            </div>
		</div>
		)
  }
}

export default NewRequest;