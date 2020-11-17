import React from "react";
import ReactDOM from "react-dom"; 
import configureStore from "./store/store";
import Root from "./components/root";

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

    ReactDOM.render(<Root store={store} />, root)
});

// DOMContentLoaded - event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// configureStore - refer to the store.js file under the store folder
// ReactDOM.render - render the Root component in place of the HTML element with the "root" id in the root.html.erb view from the Rails part of the application