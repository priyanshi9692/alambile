import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
class SignUp extends Component {

    static propTypes = {
        handleRegister: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        email : '',
        name:'',
        type:'',

    };

    componentWillMount(){
        this.setState({
            username: '',
        password: '',
        email : '',
        name:''
        });
    }

    render() {
        return (
            
           <div className="row justify-content-md-center signup-bg">
                <div>
                    <form id="special">
                        <div className="form-group">
                            <h3>Join Us Today!</h3>
                        </div>
                        {/* <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="name"
                                placeholder="First Name"
                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="name"
                                placeholder="Last Name"
                                value={this.state.name}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                label="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value
                                    });
                                }}
                            />
                        </div> */}
{/* 
                        <div className="form-group">
                            <input
                                className="form-control"
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
                        </div> */}

                        {/* <div className="form-group">
                            <input
                                className="form-control"
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
                        </div> */}
                        <div className="form-group">
                            <h6>Are you a...?</h6>
                            <select
                                className="form-control"
                                value={this.state.type}
                                onChange={(event) => {
                                    this.setState({
                                        type: event.target.value
                                    });
                                }}
                            >
                                <option value="volunteer">Volunteer</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="shelterHomes">Shelter Home</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Button
                                bsStyle="primary"
                                onClick={() => this.props.handleRegister(this.state)}>
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        

        );
    }
}

export default SignUp;