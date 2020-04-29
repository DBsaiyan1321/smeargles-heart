import React from "react";
import { Link } from "react-router-dom";


const Greeting = props => {
    return (
        <div className="main-nav-bar"> 
            <div className="main-nav-bar-top-left">
                <img src={window.smeargleURL} alt="logo" className="main-nav-bar-logo" />
                <h1>SMEARGLE'S HEART</h1>
            </div>
            <div className="right-vertical-bar"></div>
            {(props.currentUser) ? (
                <div className="main-nav-bar-content">
                    <h2 className="main-nav-bar-element">Welcome {props.currentUser.username}</h2>
                    <button className="main-nav-bar-element" onClick={() => props.logout()}>LOGOUT</button>
                </div>
            ) : (
                <div className="main-nav-bar-content">
                    <Link to="/login" className="main-nav-bar-element">LOG IN</Link>
                    <br />
                    <Link to="/signup" className="main-nav-bar-element right-vertical-bar">SIGN UP</Link>
                </div>
            )}
        </div>
    );
};

export default Greeting;