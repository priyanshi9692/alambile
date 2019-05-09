import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
//import Welcome from "./Welcome";
import Dashboard from "./Dashboard";
import Map from "./Map";
import SignUp from "./SignUp2";
//import UpdateProfile from "./UpdateProfile";
import {Button} from "react-bootstrap";
import bgImage from '../images/cover_image.PNG';
import infoimg1 from '../images/titleinfo1.jpeg';
import infoimg2 from '../images/titleinfo2.jpeg';
import infoimg3 from '../images/titleinfo3.jpeg';
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
 

 <div className="overflow">
    <Header />  
    <div className="row justify-content-md-center top-padding ">
        <img id="special"  src={bgImage}/>
            
        <hr/>
    </div>

        {/* <div className="row justify-content-md-center bg-block"> 
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
       </div> */}

        <Route exact path="/dashboard" render={() => (
     <Dashboard {...this.state}/>
     )}/>
        <Route exact path="/map" render={() => (
     <Map {...this.state}/>
     )}/>
        {/* <Route exact path="/updateprofile" render={() => (
     <UpdateProfile {...this.state}/>
     )}/> */} 
    <div className="row justify-content-md-center bgwhite"> 
        <div className="row justify-content-md-center nicepadding">
            <div className="col-md-12extra-padding fontdetails">
                <div className="col-md-2"></div>
                <div className="col-md-6 col-md-offset-1 centertext">
                <h3><strong>What Alambile Means</strong></h3>
                <p>‘Alambile’ in Zulu means ‘not hungry’.</p>
                <h3><strong>Did you know ?</strong></h3>
                <p>According to the Natural Resources Defense Council (NRDC) America wastes 40% of its food. This food could have been fed to 25 million Americans.</p>
                <h3><strong>What’s our Mission?</strong></h3>
                <p>Our mission to feed lesser privileged children and adults in shelter homes across America. We make it possible by collecting surplus food prepared in restaurants and offering it to all nearby shelters. We involve passionate volunteers who can sign up for our cause !</p>
                </ div>
            </div>
        </div>
        <hr/>
    </div>

    <section class="jumbotron text-center">
        <div class="container">
        <div className="col-md-8 col-md-offset-2">
        
            <p class="lead text-muted">
            "A food waste reduction hierarchy-feeding people first, then animals, then recycling, then composting-serves to show how productive use can be made of much of the excess food that is currently contributing to leachate and methane formation in landfills." - Carol Browner
            </p>
        </div>
        </div>
    </section>


    <div className="row justify-content-md-center"> 
        <div className="col-md-10 ">
        <div className="row justify-content-md-center">
                <div className="col-md-4 col-md-offset-2" >

                    <h1 className="fontsize-big alambiletitle">Why Alambile?</h1>
                </div>

            </div>
            <div className="row justify-content-md-center fontdetails">
                <div className="col-md-4">
                <div className="col-md-2 numberpadding">
                    <span class="step">1</span>
                    </div>
                    <div className="col-md-10">
                    <h2>What</h2>
                    <p></p>
                    <p className="paddingleft">Surplus food from restaurants are waiting to be collected to give to those who value it the most</p>
                    </ div>
                </div>
                <div className="col-md-4">
                <div className="col-md-2 numberpadding">
                    <span class="step">2</span>
                    </div>
                    <div className="col-md-10">
                    <h2>How</h2>
                    <p className="paddingleft">We provide you with the platform to instantly connect restaurants with food banks through the help of our local community</p>
                    </ div>
                </div>
                <div className="col-md-4">
                    <div className="col-md-2 numberpadding">
                    <span class="step">3</span>
                    </div>
                    <div className="col-md-10">
                    <h2>Why</h2>
                    <p className="paddingleft">Contribute to your local community by reducing waste, feeding the needy, all without commitment, and within your flexibility</p>
                    </ div>
                    
                </div>
            </div>
        <hr/>
        </div>
    </div>
    <div className="row justify-content-md-center"> 
        <div className="row justify-content-md-center">
            <div className="col-md-5 col-md-offset-1 extra-padding fontdetails">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                <h3><strong>Are you are Volunteer?</strong></h3>
                <p>Valuable food is wasted everyday by restaurants in our local community. Volunteers can accept requests from restaurants to pickup surplus food, which can then be donated to your local food bank. No commitment is required, and you can participate whenever you'd like. To join our cause, register as a volunteer, and we will review your application to become a part of our volunteer community.</p>
                </ div>
            </div>
            <div class="vertical-line"></div>
            <div className="col-md-5 extra-padding fontdetails">
                <div className="col-md-2"></div>
                <div className="col-md-9">
                <h3><strong>Are you are Restaurant?</strong></h3>
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
    <div className="dispblock justify-content-md-center padding-below"> 
        <div className ="row " >
            <div className="col-md-3 box-position">

            </div>
            <div className="col-md-6 box-position ">
                    <div className="col-md-12"> 
            
                            <div className="box-position">
                            <SignUp handleRegister={this.handleRegister}/>
                        
                        </div>
                    </div>
            </div>
            <div className="col-md-3 box-position">
                    <div className="col-md-10"> 
            

                    </div>
            </div>

        </div>      
    </div>
    <hr />

</div>
             


 
             );
        
  


       
    }
}

export default withRouter(HomePage);