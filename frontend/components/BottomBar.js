import React from "react";
import { Link } from "react-router-dom";

const BottomBar = () => (
    <div className="bottom-bar">
        <p>Join the most creative mind you will ever witness.</p>
        <div className="bottom-bar-btns">
            <Link to="/login" className="bottom-bar-element bb-l">LOG IN</Link>
            <br />
            <Link to="/signup" className="bottom-bar-element bb-s">JOIN</Link>
        </div>
    </div>
);

export default BottomBar;