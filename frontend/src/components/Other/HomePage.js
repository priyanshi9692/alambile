import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
//import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import Map from "./Map";
import SignUp from "./SignUp2";
//import UpdateProfile from "./UpdateProfile";
import {Button} from "react-bootstrap";
import bgImage from '../images/cover_image.PNG';
import Header from "../Header";


class HomePage extends Component {

    state = {
        isLoggedIn: false,
        message: "Welcome",
        username: '',
        Images:[],
        dashboard:false
    };


    handleRegister = (userdata) => {
        console.log("Register",userdata);
        if (userdata === "restaurant") {
            this.props.history.push('/registerrestaurant');
        } else if (userdata === "volunteer") {
            this.props.history.push('/registervolunteer');
        } else if (userdata === "shelter") {
            this.props.history.push('/registershelter');
        } else {
            this.props.history.push('/');
        }
    };
   
    render() {


        return (
 

 <div>
    <Header />
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div class="col-md5 p-lg-5 mx-auto my-5">
        </div>
        <div></div>
    </div>
    <div className="row justify-content-md-center top-padding">
        <img id="special"  src={bgImage}/>
            
        <hr/>
    </div>

        <div className="row justify-content-md-center bg-block"> 
            <Route exact path="/SignIn" render={() => (
                <div className="row">
                    <div className="col-md-6">        
                        <img src = "https://img3.stockfresh.com/files/l/lenm/m/26/7084766_stock-vector-icon-fast-food-delivery.jpg"/>
                    </div>
                    
                    <div className="col-md-6">          
                        <div className="col-md-10"> 

                        </div>
            
                        <div className="col-md-10">
                        <Button bsStyle="primary" onClick={() => {
                        this.handleRegister("");
                        }}>
                            Register
                        </Button>
                        </div>
                    </div>
                    </div>   
            )}/>

            <Route exact path="/home" render={() => (
                <div className ="row ">
                    <div className="col-md-3 box-position">

                    </div>
                    <div className="col-md-6 put-bg"> 
                        <img id="special"  src={bgImage}/>
                    </div>
                    <div className="col-md-3 box-position">
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

    <section class="jumbotron text-center">
        <div class="container">
        <div className="col-md-8 col-md-offset-2">
        
            <p class="lead text-muted">
            "A food waste reduction hierarchy-feeding people first, then animals, then recycling, then composting-serves to show how productive use can be made of much of the excess food that is currently contributing to leachate and methane formation in landfills." - Carol Browner
            </p>
        </div>
        </div>
    </section>


    <div className="row justify-content-md-center upper-padding"> 
        <div className="col-md-8 col-md-offset-2">
        <div className="row justify-content-md-center">
                <div className="col-md-4 col-md-offset-4" >

                    <h1 className="fontsize-big">Why Alambile?</h1>
                </div>

            </div>
            <div className="row justify-content-md-center">
                <div className="col-md-4">
                <div className="col-md-2">
                    <span class="step">1</span>
                    </div>
                    <div className="col-md-8">
                    <h3>What</h3>
                    <p></p>
                    <p>Surplus food from restaurants are waiting to be collected to give to those who value it the most</p>
                    </ div>
                </div>
                <div className="col-md-4">
                <div className="col-md-2">
                    <span class="step">2</span>
                    </div>
                    <div className="col-md-8">
                    <h3>How</h3>
                    <p>We provide you with the platform to instantly connect restaurants with food banks through the help of our local community</p>
                    </ div>
                </div>
                <div className="col-md-4">
                    <div className="col-md-2">
                    <span class="step">3</span>
                    </div>
                    <div className="col-md-8">
                    <h3>Why</h3>
                    <p>Contribute to your local community by reducing waste, feeding the needy, all without commitment, and within your flexibility</p>
                    </ div>
                    
                </div>
            </div>
        <hr/>
        </div>
    </div>
    <div className="row justify-content-md-center"> 
        <div className="row justify-content-md-center">
            <div className="col-md-5 col-md-offset-1 extra-padding">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                <h3>Are you are Volunteer?</h3>
                <p>Valuable food is wasted everyday by restaurants in our local community. Volunteers can accept requests from restaurants to pickup surplus food, which can then be donated to your local food bank. No commitment is required, and you can participate whenever you'd like. To join our cause, register as a volunteer, and we will review your application to become a part of our volunteer community.</p>
                </ div>
            </div>
            <div class="vertical-line"></div>
            <div className="col-md-5 extra-padding">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                <h3>Are you are Restaurant?</h3>
                <p>The next time you have surplus food, instead of disregarding it as waste, submit a pickup request. Willing members in our volunteer community will come and accept the request, and it will be donated to those who value it the most. To join our cause, register today to become a member of our community of participating restaurants. </p>
                </ div>
            </div>
        </div>
        <hr/>
    </div>
    {/* <div className="row justify-content-md-center"> 
        <div className="form-group col-md-10 col-md-offset-5">
            <Button
                bsStyle="primary"
                >
                Sign Up Now
            </Button>
        </div>
    </div> */}
    <div className="row justify-content-md-center"> 
        <div className ="row">
            <div className="col-md-4 box-position">

            </div>
            <div className="col-md-4 box-position">
                    <div className="col-md-12"> 
            
                            <div className="box-position">
                            <SignUp handleRegister={this.handleRegister}/>
                        
                        </div>
                    </div>
            </div>
            <div className="col-md-4 box-position">
                    <div className="col-md-10"> 
            

                    </div>
            </div>

        </div>      
    </div>

</div>
             


 
             );
        
  


       
    }
}

export default withRouter(HomePage);