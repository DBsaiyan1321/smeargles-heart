import React from "react";
import ImaginationIndexContainer from "./imaginations/imagination_index_container";
import MainNavBar from "./navbar/main_nav_bar";
import Footer from "./footer";
import BottomBar from "./BottomBar";

const Greeting = props => {
    window.previousUrl = props.match.url
    const { currentUser, logout } = props; 
    return (
        <div>
            <MainNavBar currentUser={currentUser} logout={logout}/>
            <ImaginationIndexContainer />
            { currentUser ? <></> : <BottomBar /> }
            <Footer />
        </div>
    );
};

export default Greeting;