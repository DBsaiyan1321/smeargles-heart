import React from "react";
import { Link } from "react-router-dom";


const Greeting = props => {
    return (
        (props.currentUser) ? (
            <div> 
                <h2>Welcome {props.currentUser.username}</h2>
                <button onClick={() => props.logout()}>Logout</button>
            </div>
        ) : (
            <div> 
                <Link to="/login">Login</Link>
                <br />
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    );
};

export default Greeting;