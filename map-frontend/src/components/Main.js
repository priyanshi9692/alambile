import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import Map from './Map';
import Volunteer from './Dashboard/Volunteer';

//Create a Main Component
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
        
                <Switch>
                    <Route exact path="/volunteer" component={Volunteer}/>
                </Switch>
               
            </div>
        )
        
    }
}
//Export The Main Component
export default Main;