import React from "react";
import ReactDOM from "react-dom"; 
import * as SessionActions from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";

import * as imaginationActions from "./actions/imagination_actions";

document.addEventListener("DOMContentLoaded", () => { 
    let store;
    if (window.currentUser) { 
        const preloadedState = { 
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }, 
            session: { 
                id: window.currentUser.id
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser
    } else { 
        store = configureStore(); 
    }

    const root = document.getElementById("root")

    // testing
    window.login = SessionActions.login;
    // window.signup = SessionActions.signup; 
    // window.logout = SessionActions.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    window.fetchImaginations = imaginationActions.fetchImaginations
    window.fetchImagination = imaginationActions.fetchImagination 
    window.createImagination = imaginationActions.createImagination
    window.updateImagination = imaginationActions.updateImagination
    window.deleteImagination = imaginationActions.deleteImagination
    // end of testing

    ReactDOM.render(<Root store={store} />, root)
});