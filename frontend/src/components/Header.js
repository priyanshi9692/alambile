// Header.js
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Other/style.css';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header bigfontlogin">
                <a href="#" className="logo">
                    <span className="logo-lg"><Link to="/home" className="titlelink"><b>Alambile</b></Link></span>
                </a>
                <nav className="navbar header navbar-static-top">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                   {/*}       <li class="active"><Link to="/home">Home</Link></li>  {*/} 
                      <li className="nav-item"><Link to="/signin"> Sign In </Link></li>
                    {/*}        <li className="nav-item"><Link to="/signup"> Sign Up </Link></li>
                          <li className="dropdown messages-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="fa fa-envelope-o"></i>
                                    <span className="label label-success">4</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="header">You have 4 messages</li>
                                    <li>
                                        <ul className="menu">
                                            <li>
                                                <a href="#">
                                                    <div className="pull-left">
                                                        <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                                    </div>
                                                    <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                                    </h4>
                                                    <p>Why not buy a new awesome theme?</p>
                                                </a>
                                            </li>
                                            </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {*/}
                                </ul>
                            </div>
                        </nav>
                    </header>
                )
            }
        }