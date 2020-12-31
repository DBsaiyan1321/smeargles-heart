import React from "react"
import { Link } from "react-router-dom";
import LoggedInNavBar from "./logged_in_nav_bar";
import LoggedOutNavBar from "./logged_out_nav_bar"; 
import Search from "../search/search_container";

const MainNavBar = ({ currentUser, logout }) => (
    <nav className="main-nav-bar">
        <div className="main-nav-bar-top-left home"> {/* Instead of this div, maybe make it a link and see if that works */}
            <Link to="/" className="home"><img src="https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargle-Head.png" alt="logo" className="main-nav-bar-logo" /></Link>
            <Link to="/" className="home"><h1>SMEARGLE'S HEART</h1></Link>
        </div>
        <div className="vertical-bar"></div>

        {currentUser ? <LoggedInNavBar currentUser={currentUser} logout={logout} /> : <LoggedOutNavBar /> }
        <div className="vertical-bar"></div>
        <div className="top-right-nav-bar">
            <Link to="/new" className="main-nav-bar-element main-nav-submit">SUBMIT</Link>
        </div>
    </nav>
);

export default MainNavBar;