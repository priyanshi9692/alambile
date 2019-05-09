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
        type:'',
        error: {}
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: '',
            type:''
            
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(Object.entries(this.validate()).length === 0) {
            let data = {};
            data = {
                user_email: this.state.username,
                user_password: this.state.password,
                type:this.state.type
            }
            console.log(data);
            axios.post('/signin', data)
                .then(response => {
                    console.log(response);
                    if(response.data === "User Successfully login!!"){
                        alert("Success");
                        if(data.type === "restaurants"){
                            localStorage.setItem("email",this.state.username);

                            window.location.href='http://localhost:3000/restaurant'
                        }
                        else{
                            localStorage.setItem("email",this.state.username);
                            
                            window.location.href='http://localhost:3000/volunteer'
                        }
                    }
                    else if(response.data ==="Incorrect EmailId")
                    {
                        alert("Incorrect EmailId");
                    }
                    else{
                        alert("Incorrect Password");
                    }
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
                                label="username"
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
                        <div className="form-group">
                        
                            <select 
                                value={this.state.type}
                                onChange={(event) => {
                                this.setState({
                                    type: event.target.value
                                });
                            }}>
                            <option value="" > Select Role</option>
                                <option value="volunteer" > Volunteer</option>
                                <option value="restaurants">Restaurant</option>
                            </select>
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