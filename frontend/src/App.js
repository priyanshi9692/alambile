import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Main from "./components/HomePage";


    class App extends Component {
        render() {
            return (
                <div className="App">
                 
                    <BrowserRouter>
                      <Main/>
                    </BrowserRouter>
                </div>
            );
        }
    }

    export default App;
