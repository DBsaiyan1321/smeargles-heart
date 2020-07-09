import React from "react";
import ImaginationIndexContainer from "./imaginations/imagination_index_container";
import MainNavBar from "./main_nav_bar";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Greeting = props => {
    window.previousUrl = props.match.url
    return (
        <div>
            <MainNavBar currentUser={props.currentUser} logout={props.logout}/>
            <ImaginationIndexContainer />
            { (props.currentUser) ? <></> : (
                <div className="bottom-bar">
                    <p>Join the most creative mind you will ever witness.</p>
                    <div className="bottom-bar-btns"> 
                        <Link to="/login" className="bottom-bar-element bb-l">LOG IN</Link>
                        <br />
                        <Link to="/signup" className="bottom-bar-element bb-s">JOIN</Link>
                    </div>
                </div>
                )
            }
            <Footer />
        </div>
    );
};

export default Greeting;