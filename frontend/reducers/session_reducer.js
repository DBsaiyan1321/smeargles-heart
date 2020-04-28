import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const initialState = { 
    id: null
};

const SessionReducer = (oldState = initialState, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { id: action.user.id })
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, oldState, { id: null })
        default:
            return oldState; 
    }
};

export default SessionReducer;