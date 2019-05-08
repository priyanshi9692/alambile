import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Table from 'react-bootstrap/Table'
import Map from "../Map";

class Volunteer extends Component {

	state = {
        open: [{
            id: '123',
            date: '',
            weight: '',
            image: '',

        }],
        closed: [],
        banks: [
            {
                name: 'The Salvation Army San Jose',
                address: '359 N 4th St, San Jose, CA 95112',
                contact: '(408) 282-1165',
                lat: 37.3433354,
                lng: -121.8919698,
            },
            {
                name: 'Santa Maria Urban Ministry',
                address: '778 Almaden Avenue, San Jose, CA 95110',
                contact: '(408) 292-3314',
                lat: 37.3227434,
                lng: -121.8847125
            }
        ],
        pickupstatus: false,

	}

	onChangeInput = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile = (e) => {
		e.preventDefault();
		axios.post('/registerrestaurant',this.state)
			.then(res => {
				console.log(res);
			})
    };
    
    renderTable() {
        let returnVal = ''
        if (!this.state.pickupstatus === true) {
            this.state.banks.map((b) => {
                returnVal = returnVal + b.name + <br/>
            })
        }
        return returnVal
    }

	render() {
		return (
		<div>
            <div className="row paddingtop">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <h3>Volunteer Dashboard</h3>
                </div>
                <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6"> 
                    <Link to={'/volunteerstart'} >Open Requests</Link> &nbsp;
                    <Link to={'/volunteer'} >Food Banks</Link> &nbsp;
                    <Link to={'/restaurant'} >History</Link> &nbsp;
                </div>
                <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                <h3>Food Banks</h3>
                {this.state.banks.map((i) => (
                    <React.Fragment key={i.name}>
                        <ul>
                            {/* <Link to={`/profileother/${i.followerID._id}`} onClick={() => window.location.refresh()}> */}
                                <p>{i.name}</p>
                                <p className="cred">{i.address}</p>
                                <p className="cred">{i.contact}</p>

                            <hr />
                        </ul>
                    </React.Fragment>
                    ))}
                {/* <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Weight</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                        </tr>
                    </tbody>
                    </Table> */}
                </div>
                <div className="col-md-7 mapsize"> 
                    <Map banks={this.state.banks} />
                </div>
                <div className="col-md-1"></div>
            </div>
		</div>
		)
  }
}

export default Volunteer;