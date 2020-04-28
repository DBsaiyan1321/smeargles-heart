import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const SessionErrorsReducer = (oldState = [], action) => { 
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, oldState, { errors: action.errors.responseJSON })
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { errors: [] })
        default:
            return oldState; 
    }
};

export default SessionErrorsReducer