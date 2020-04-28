import React from "react";
import ReactDOM from "react-dom"; 
import * as SessionActions from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => { 
    const root = document.getElementById("root")
    const store = configureStore(); 

    // testing
    window.login = SessionActions.login;
    // window.signup = SessionActions.signup; 
    // window.logout = SessionActions.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // end of testing

    ReactDOM.render(<Root store={store} />, root)
});