import React from "react";
import ReactDOM from "react-dom"; 
import configureStore from "./store/store";
import Root from "./components/root";

import * as SearchAPIUtil from "./util/search_api_util";
import * as UserAPIUtil from "./util/user_api_util";

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
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // window.fetchUsers = UserAPIUtil.fetchUsers;
    // window.fetchUser = UserAPIUtil.fetchUser;
    // window.updateUser = UserAPIUtil.updateUser;
    window.search = SearchAPIUtil.search
    // end of testing

    ReactDOM.render(<Root store={store} />, root)
});