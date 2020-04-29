import React from "react";
import ReactDOM from "react-dom"; 
import * as SessionActions from "./actions/session_actions";
import configureStore from "./store/store";
import Root from "./components/root";

import * as ImaginationAPIUtil from "./util/imagination_api_util";

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

    window.fetchImaginations = ImaginationAPIUtil.fetchImaginations
    window.fetchImagination = ImaginationAPIUtil.fetchImagination 
    window.createImagination = ImaginationAPIUtil.createImagination
    window.updateImagination = ImaginationAPIUtil.updateImagination
    window.deleteImagination = ImaginationAPIUtil.deleteImagination
    // end of testing

    ReactDOM.render(<Root store={store} />, root)
});