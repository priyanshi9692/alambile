import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/API';
import SignIn from "./SignIn";
import Message from "./Message";
//import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import Map from "./Map";
import SignUp from "./SignUp";
import {Button} from "react-bootstrap";

class HomePage extends Component {

    state = {
        isLoggedIn: false,
        message: "Welcome",
        username: '',
        Images:[],
        dashboard:false
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((status) => {
                   if(status===201){
                    console.log("after SignIn response");
                    this.setState({
                        isLoggedIn: true,
                        message: "You have succesully registered..!!",
                        username: userdata.username,
                        dashboard:true
                    });
                    console.log("inside handle submit state");
                    console.log(this.state);
                    this.props.history.push("/dashboard");
                }
                else{

                     console.log("after SignIn response");
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username and password..!!",
                        username: userdata.username,
                        dashboard:false

                    });
                    console.log("inside handle submit state for wrong username");
                    console.log(this.state);
                    this.props.history.push("/");

                }
                
            }).catch((error)=> {
                this.setState({
                        isLoggedIn: false,
                        message: "Error While logging in!!",
                        username: userdata.username,
                        Images:[]
                    });  
                this.props.history.push('"/');
            });
    };


    handleRegister = (userdata) => {
        API.doRegister(userdata)
            .then((status) => {
                console.log("inside handleRegister");
                if (status === 201) {
                    console.log("after Register");
                    this.setState({
                        isLoggedIn: true,
                        message: "You have registered .. SignIn to continue",
                        username: userdata.username,
                        
                    });
            
                    this.props.history.push("/");
                } else if (status === 401) {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
   
    render() {


        return (
 

 <div>

                <div className="col-md-12">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                         <Message message={this.state.message}/>
                    </div>

                </div>
                <hr/>
               </div>

        <div className="row justify-content-md-center"> 
                <Route exact path="/SignIn" render={() => (
                    <div className="row">
                        <div className="col-md-6">
                            
                            <img src = "https://img3.stockfresh.com/files/l/lenm/m/26/7084766_stock-vector-icon-fast-food-delivery.jpg"/>

  
                        </div>
                       
                        <div className="col-md-6">
                             
                                
                                  
                                   <div className="col-md-10"> 
                                       <SignIn handleSubmit={this.handleSubmit}/>
                                   </div>
                        
                                  <div className="col-md-10">
                                    <Button bsStyle="primary" onClick={() => {
                                    this.props.history.push("/SignUp");
                                    }}>
                                        Register
                                    </Button>
                                   </div>
                        </div>
                     </div>   
                )}/>

            <Route exact path="/" render={() => (
                   <div className ="row">
                        <div className="col-md-6 put-bg">
                            
                            <img src = "https://dropboxmainblog.files.wordpress.com/2015/09/team-feature.png?w=650&h=325"/>

  
                        </div>
                       
                        <div className="col-md-6 box-position">
                                <div className="col-md-10"> 
                        
                                     <div className="box-position">
                                        <SignUp handleRegister={this.handleRegister}/>
                                    
                                    </div>
                                </div>
                          </div>

                    </div>      
                            )}/> 
       </div>


                
             
        

        <Route exact path="/dashboard" render={() => (
     <Dashboard {...this.state}/>
     )}/>
        <Route exact path="/map" render={() => (
     <Map {...this.state}/>
     )}/>
</div>
             


 
             );
        
  


       
    }
}

export default withRouter(HomePage);