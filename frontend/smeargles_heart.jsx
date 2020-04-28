import React from "react";
import ReactDOM from "react-dom"; 
import * as SessionApiUtil from "./util/session_api_util";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => { 
    const root = document.getElementById("root")
    const store = configureStore(); 

    // testing
    window.login = SessionApiUtil.login;
    window.signup = SessionApiUtil.signup; 
    window.logout = SessionApiUtil.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // end of testing

    ReactDOM.render(<h1>It works :D</h1>, root)
});