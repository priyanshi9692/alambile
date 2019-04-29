import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../../api/API';
import SignIn from "./SignIn2";
import Message from "./Message";
//import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import Map from "./Map";
import SignUp from "./SignUp2";
//import UpdateProfile from "./UpdateProfile";
import {Button} from "react-bootstrap";
import bgImage from '../images/frontpage.jpeg';

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
        if (userdata.type === "Restaurant") {

        } else if (userdata.type === "Collector") {

        } else if (userdata.type === "Collection") {

        } else {
            this.props.history.push(`/register?username=${userdata.username}`);
        }
    };
   
    render() {


        return (
 

 <div>

                <div className="col-md-12">
                <div className="row justify-content-md-center ">
                    <div className="col-md-10 col-md-offset-5">
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

            <Route exact path="/home" render={() => (
                   <div className ="row">
                        <div className="col-md-6 put-bg">
                            
                            <img id="special"  src={bgImage}/>

  
                        </div>
                       
                        <div className="col-md-6 box-position">
                                <div className="col-md-10"> 
                        
                                     <div className="box-position">
                                        <SignUp handleRegister={this.handleRegister}/>
                                    
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-6 box-position">
                                <div className="col-md-10"> 
                        

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
        {/* <Route exact path="/updateprofile" render={() => (
     <UpdateProfile {...this.state}/>
     )}/> */}

    <div className="row justify-content-md-center upper-padding"> 
        <div className="col-md-12">
            <div className="row justify-content-md-center">
                <div className="col-md-4 col-md-offset-5" >

                    <h1 className="fontsize-big">Why Work with Us?</h1>
                </div>

            </div>
            <hr/>
            </div>
    </div>

    <div className="row justify-content-md-center"> 
        <div className="col-md-12">
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                <div className="col-md-2">
                    <span class="step">1</span>
                    </div>
                    <div className="col-md-10">
                    <p>"A food waste reduction hierarchy-feeding people first, then animals, then recycling, then composting-serves to show how productive use can be made of much of the excess food that is currently contributing to leachate and methane formation in landfills. Carol Browner"</p>
                    </ div>
                </div>
                <div className="col-md-4">
                <div className="col-md-2">
                    <span class="step">2</span>
                    </div>
                    <div className="col-md-10">
                    <p>“Abundance is the success story of the human species. You look back at the creation of agriculture - 12,000 years ago - that was all about creating surplus … The problem is now that all rich countries in the world (in North America & Northern Europe) have between 150 - 200% of the food that they actually need.” -Tristram Stuart (@TristramStuart)</p>
                    </ div>
                </div>
                <div className="col-md-4">
                    <div className="col-md-2">
                    <span class="step">3</span>
                    </div>
                    <div className="col-md-10">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                    </ div>
                    
                </div>

            </div>
            <hr/>
            </div>
    </div>
    <div className="row justify-content-md-center"> 
        <div className="form-group col-md-10 col-md-offset-5">
            <Button
                bsStyle="primary"
                >
                Sign Up Now
            </Button>
        </div>
    </div>
    <div className="row justify-content-md-center"> 
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
            <p>Group Project</p>
        </div>
        <div className="col-md-4">
            
        </div>
    </div>

</div>
             


 
             );
        
  


       
    }
}

export default withRouter(HomePage);