import { createStore, applyMiddleware } from "redux";  
import thunk from "redux-thunk"; 
import RootReducer from "../reducers/root_reducer"; 

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
    // must use 'require' (import only allowed at top of file)
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}


const configureStore = (preloadedState = {}) => { 
    return createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))
};

export default configureStore;

// The store is just the global state. It's the reason why we use Redux
// line 7 - we only add that middelware when the environment is not production
// createStore - create the store with the given parameters