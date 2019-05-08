import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

import './style.css'

class SignUp extends Component {

    static propTypes = {
        handleRegister: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        email : '',
        name:'',
        type:'volunteer',

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
            
           <div className="justify-content-md-center signup-bg">
                <div>
                    <form id="special">
                        <div className="form-group">
                            <h1>Join Us Today!</h1>
                        </div>
                        <div className="form-group">
                            <h2>Are you a...?</h2>
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
                                
                            </select>
                        </div>
                        <div className="form-group">
                            <Button
                                bsStyle="primary"
                                onClick={() => this.props.handleRegister(this.state.type)}>
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