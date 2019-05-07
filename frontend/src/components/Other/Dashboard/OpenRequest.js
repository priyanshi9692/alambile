import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

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
						<Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>;
            </div>
            <div className="col-md-3"></div>
            </div>
		</div>
		)
  }
}

export default OpenRequest;