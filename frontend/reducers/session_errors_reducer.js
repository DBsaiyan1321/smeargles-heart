import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const SessionErrorsReducer = (oldState = [], action) => { 
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ERRORS:
            // return Object.assign([], oldState, action.errors.responseJSON )
            return action.errors.responseJSON
        case RECEIVE_CURRENT_USER:
            // return Object.assign([], oldState, [] )
            return []
        default:
            return oldState; 
    }
};

export default SessionErrorsReducer