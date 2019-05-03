import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Signin from './SignIn';
import Signup from './SignUp';
import Home from './Home';
import DispProfile from './DispProfile';
import UpdateProfile from './UpdateProfile';
import UpdatePhoto from './UpdatePhoto';
import Dashboard from './Dashboard';
import Search from './Search';
import EnrollCourse from './EnrollCourse';
import DropCourse from './DropCourse';
import CourseMenu from './CourseMenu';
import ViewSub from './ViewSub';
import DisplayPage from './Other/HomePage';
import DisplayMap from './Other/Map';
import Register from './Register';


//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
        
                <Switch>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home}/>
                <Route  path="/" component={DisplayPage}/>
                
                </Switch>
                
                <Route path="/dispProfile" component={DispProfile}/>
                <Route path="/updatePhoto" component={UpdatePhoto}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route path="/map" component={DisplayMap}/>
                <Route path="/search" component={Search}/>
                <Route path="/enrollCourse" component={EnrollCourse}/>
                <Route path="/dropCourse" component={DropCourse}/>
                <Route path="/ViewSub" component={ViewSub}/>
               
              
                
  
              
           {/*        <Route path="/courseMenu" render={(props)=> <Dashboard{...props} targetId={""}/>} /> */}
          {/*      <Route exact strict path="/dashboard/:handle" component={Assignment} /> */}
          <Route  path="/dashboard/course/:courseid/:user_type" render={(props)=> <CourseMenu{...props} targetId={""} />} />
            </div>
        )
        
    }
}
//Export The Main Component
export default Main;