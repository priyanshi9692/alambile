// App.js

import React, { Component } from 'react';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
import './App.css';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
      
        {/* App Child Component Main*/}
        <Main />
     
    </BrowserRouter>
    );
  }
  
}

export default App;



