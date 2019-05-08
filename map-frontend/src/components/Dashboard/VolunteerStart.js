import React, { Component } from 'react'
import axios from "axios";
import "./style.css";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import QRCode from 'qrcode-react';

import Table from 'react-bootstrap/Table'
import Map from "../Map";
import foodimage from '../images/food2.jpg'
import foodimage2 from '../images/food1.jpg'

import './style.css';

class VolunteerStart extends Component {

	state = {
        open: [{
            id: '123',
            weight: '25 lbs',
            address: 'Chois Korean Restaurant',
            number: '(408) 282-1165',
            type: 'Vegetarian',
            image: foodimage,
            shelf: 'Tonight',
            description: '',
            status: true,
            name: 'Request from Choi',
            lat: 37.336768, lng: -121.889057,


        },
        {
            id: '124',
            weight: '30 lbs',
            address: 'Subway',
            number: '(408) 535-4800',
            type: 'Dessert',
            image: foodimage2,
            shelf: 'Years',
            description: '',
            status: true,
            name: 'Donating extra can food',
            lat: 37.333049, lng: -121.875410,
        }],
        closed: [{
            id: '123',
            weight: '25 lbs',
            type: 'Vegetarian',
            image: foodimage,
            shelf: 'Tonight',
            description: '',
            status: false,
        }],
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
        btn1accept: false,
        btn2accept: false

	}

	onChangeInput = (e) => {
	    this.setState({ [e.target.name]: e.target.value });
	}

	onSubmitProfile1 = (e) => {
        e.preventDefault();
        this.setState({ btn1accept: !this.state.btn1accept });
		axios.post('/registerrestaurant',this.state)
			.then(res => {
				console.log(res);
			})
    };
	onSubmitProfile2 = (e) => {
        e.preventDefault();
        this.setState({ btn2accept: !this.state.btn2accept });
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

    displayButton(name) {
        console.log(this.state.btn1accept);
        if (name === this.state.open[0].name)
            if (!this.state.btn1accept) {
                
                return (<div>
                        <button
                            onClick={this.onSubmitProfile1}
                            className="btn btn-success"
                            type="submit"
                        >
                            Accept!
                        </button>
                        </div>
                        )
            } else {
                return (
                <div>
                <button
                    onClick={this.onSubmitProfile1}
                    className="btn btn-danger nicepadding"
                    type="submit"
                >
                    Cancel!
                </button>
                <QRCode  value={name} />
                </div>
                )
            }
        else {
            if (!this.state.btn2accept) {
                
                return (<button
                            onClick={this.onSubmitProfile2}
                            className="btn btn-success"
                            type="submit"
                        >
                            Accept!
                        </button>)
            } else {
                return (
                    <div>
                    <button
                        onClick={this.onSubmitProfile2}
                        className="btn btn-danger nicepadding"
                        type="submit"
                    >
                        Cancel!
                    </button>
                    <QRCode  value={name} />
                    </div>
                    )
            }
        }
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
                    <Link to={'/volunteer'} >History</Link> &nbsp;
                </div>
                <div className="col-md-3"></div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3">
                <h3>Open Requests</h3>
                {this.state.open.map((i) => (
                    <React.Fragment key={i.name}>
                        <ul>
                            {/* <Link to={`/profileother/${i.followerID._id}`} onClick={() => window.location.refresh()}> */}
                                <div className="row">
                                    <div className="col-md-6">
                                    <p>{i.name}</p>
                                    <p className="cred">{i.address}</p>
                                    <p className="cred">{i.number}</p>
                                    <p className="cred">{i.weight}</p>
                                    </div>
                                    <div className="col-md-3">
                                        {this.displayButton(i.name)}
                                    </div>
                                </div>
                            <hr />
                        </ul>
                    </React.Fragment>
                    ))}
                </div>
                <div className="col-md-7 mapsize"> 
                    <Map banks={this.state.open} />
                </div>
                <div className="col-md-1"></div>
            </div>
		</div>
		)
  }
}

export default VolunteerStart;