import React from "react";
import ReactDOM from "react-dom"; 
import * as SessionApiUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => { 

    // testing
    window.login = SessionApiUtil.login;
    window.signup = SessionApiUtil.signup; 
    window.logout = SessionApiUtil.logout;
    // end of testing

    const root = document.getElementById("root")
    ReactDOM.render(<h1>It works :D</h1>, root)
});