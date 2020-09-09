import React from "react";
import ImaginationIndexContainer from "./imaginations/imagination_index_container";
import MainNavBar from "./main_nav_bar";
import Footer from "./footer";
import BottomBar from "./BottomBar";

const Greeting = props => {
    window.previousUrl = props.match.url

    return (
        <div>
            <MainNavBar currentUser={props.currentUser} logout={props.logout}/>
            <ImaginationIndexContainer />
            { props.currentUser ? <></> : <BottomBar /> }
            <Footer />
        </div>
    );
};

export default Greeting;