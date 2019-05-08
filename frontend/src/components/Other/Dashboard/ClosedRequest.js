import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

import foodimage from '../../images/food2.jpg'

class ClosedRequest extends Component {

	state = {
				open: this.props.open,
				image: '',
				description: '',
				weight: '',
				type: '',
				date: '',
				status: '',
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
						<Card style={{ width: '36rem' }}>
							<Card.Img className="card-img-top" variant="top" src={foodimage} />
							<Card.Body>
								<Card.Title>Burger Request</Card.Title>
								<Card.Text>
                                    <ListGroup>
                                    <ListGroup.Item disabled>Status: <span class="badge badge-pill badge-success pickstatus">Success</span></ListGroup.Item>
                                    <ListGroup.Item disabled>Full untouched cheeseburger, still warm, can be stored for days</ListGroup.Item>
                                    <ListGroup.Item>May 8 2019</ListGroup.Item>
                                    </ListGroup>
								</Card.Text>
							</Card.Body>
						</Card>
            </div>
						
            <div className="col-md-3"></div>
            </div>
		</div>
		)
  }
}

export default ClosedRequest;