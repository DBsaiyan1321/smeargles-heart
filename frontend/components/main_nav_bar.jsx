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
                    <div className="home-tab"> 
                        <Link to="/" className="main-nav-bar-element">HOME</Link>
                    </div>
                    <div className="username-tab">
                        <h2 className="main-nav-bar-element username-nav">{props.currentUser.username}</h2>
                        <ul className="username-dropdown">
                            {/* <li className="dropdown-item dropdown-item-username">{props.currentUser.username}</li> Add this when you make the profile feature */}
                            <li className="dropdown-item" onClick={() => props.logout()}>Log Out</li>
                        </ul>
                    </div>
                </div>
            ) : (
                    <div className="main-nav-bar-content">
                        <div className="home-tab">
                            <Link to="/" className="main-nav-bar-element">HOME</Link>
                        </div>
                        <div className="user-auth-links">
                            <Link to="/signup" className="main-nav-bar-element">JOIN</Link>
                            <br />
                            <Link to="/login" className="main-nav-bar-element">LOG IN</Link>
                        </div>
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