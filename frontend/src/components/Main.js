import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Home';
import UpdatePhoto from './UpdatePhoto';
import Dashboard from './Dashboard';
import Search from './Search';
import DisplayPage from './Other/HomePage';
import DisplayMap from './Other/Map';
import RegisterVolunteer from "./Other/RegisterVolunteer";
import RegisterRestaurant from "./Other/RegisterRestaurant";
import RegisterVolunteerExtra from "./Other/RegisterVolunteerExtra";
import RegisterShelter from "./Other/RegisterShelter";
import RegisterSuccess from "./Other/RegisterSuccess";
// import RegisterShelter from "./Other/RegisterShelter";
import test from "./Other/test";
import Restaurant from "./Other/Dashboard/Restaurant";
import Volunteer from "./Other/Dashboard/Volunteer";
import Signin from "./Other/Signin";
import Extra from "./extra";

import './style.css';


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div className="grey-background">
                {/*Render Different Component based on Route*/}
        
                <Switch>
                <Route path="/home" component={Home}/>
                <Route exact path="/" component={DisplayPage}/>
                
                
                <Route path="/updatePhoto" component={UpdatePhoto}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/map" component={DisplayMap}/>
                <Route path="/search" component={Search}/>
                <Route path="/registervolunteer" component={RegisterVolunteer}/>
                <Route path="/registerrestaurant" component={RegisterRestaurant}/>
                <Route path="/registervolunteerextra" component={RegisterVolunteerExtra}/>
                <Route path="/registershelter" component={RegisterShelter}/>
                <Route path="/registersuccess" component={RegisterSuccess}/>
                <Route path="/test" component={test}/>
                <Route path="/restaurant" component={Restaurant}/>
                <Route path="/volunteer" component={Volunteer}/>
                <Route path="/extra" component={Extra}/>
                </Switch>
               
              
                
  
              
           {/*        <Route path="/courseMenu" render={(props)=> <Dashboard{...props} targetId={""}/>} /> */}
          {/*      <Route exact strict path="/dashboard/:handle" component={Assignment} /> */}
          {/* <Route  path="/dashboard/course/:courseid/:user_type" render={(props)=> <CourseMenu{...props} targetId={""} />} /> */}
            </div>
        )
        
    }
}
//Export The Main Component
export default Main;
