import React from "react"
import { Link } from "react-router-dom";

const MainNavBar = props => {
    return ( 
        <div className="main-nav-bar">
            <div className="main-nav-bar-top-left home"> {/* Instead of this div, maybe make it a link and see if that works */}
                <Link to="/" className="home"><img src={window.smeargleURL} alt="logo" className="main-nav-bar-logo" /></Link>
                <Link to="/" className="home"><h1>SMEARGLE'S HEART</h1></Link>
            </div>
            <div className="vertical-bar"></div>

            {(props.currentUser) ? (
                <div className="main-nav-bar-content">
                    <Link to="/" className="main-nav-bar-element home">HOME</Link>
                    <h2 className="main-nav-bar-element">WELCOME {props.currentUser.username}</h2>
                    <button className="main-nav-bar-element" onClick={() => props.logout()}>LOGOUT</button>
                </div>
            ) : (
                    <div className="main-nav-bar-content">
                        <Link to="/" className="main-nav-bar-element">HOME</Link>
                        <Link to="/signup" className="main-nav-bar-element">JOIN</Link>
                        <br />
                        <Link to="/login" className="main-nav-bar-element">LOG IN</Link>
                    </div>
                )}
            <div className="vertical-bar"></div>
            <div className="top-right-nav-bar">
                <Link to="/new" className="main-nav-bar-element main-nav-submit">SUBMIT</Link>
            </div>
        </div>
    )
}

export default MainNavBar;