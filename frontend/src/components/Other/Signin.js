import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'
import axios from "axios";

import bgImage from '../images/bgimg2.jpeg';
import './style.css';

class Signin extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        images: [],
        error: {},
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: '',
            images :[]
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(Object.entries(this.validate()).length === 0) {
            let data = {};
            data = {
                user_email: this.state.username,
                user_password: this.state.password
            }
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:5000/login', data)
                .then(response => {
                    console.log("Success, but get user authorization")
                })
        }
    }

    validate(){
        const error = {};
        if(!this.state.username){
            error.username = 'Enter Username';
        }
        if(!this.state.password){
            error.password = 'Enter Password';
        }
        this.setState({error: error});
        return error;
    }

    render() {
        return (
            <div>
            <div className="row justify-content-md-center top-padding clearbg loginimage">
                <img className="loginimage" id="special"  src={bgImage}/>
                    
                <hr/>
            </div>
            <div className="row justify-content-md-center biggerfont bringfront">
    
                <div>
                    <form>
                        <div className="form-group">
                            <h1 className="bigfontlogin">Login</h1>
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control bigloginfont"
                                type="text"
                                label="Username"
                                placeholder="Enter Username"
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                            <p className='error'>{this.state.error.username}</p>
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control bigloginfont"
                                type="password"
                                label="password"
                                placeholder="Enter Password"
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                            <p className='error'>{this.state.error.password}</p>
                        </div>
                        <div className="form-group bigfontlogin">
                            <Button
                                bsStyle="primary"
                                onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Signin;