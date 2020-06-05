import { RECEIVE_IMAGINATIONS, RECEIVE_IMAGINATION, REMOVE_IMAGINATION } from "../actions/imagination_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const ImaginationsReducer = (oldState = {}, action) => { 
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_IMAGINATIONS:
            return Object.assign({}, oldState, action.imaginations)
        case RECEIVE_IMAGINATION: 
            return { [action.imagination.id]: action.imagination }
        case REMOVE_IMAGINATION: 
            let newState = Object.assign({}, oldState) 
            delete newState[action.imaginationId]
            return newState;
        case RECEIVE_USER:
            let userImaginations = {}
            for(let i = 0; i < action.user.imaginations.length; i++) { 
                let imagination = action.user.imaginations[i]
                userImaginations[imagination.id] = imagination
            }
            return userImaginations;
        default:
            return oldState;
    }
};

export default ImaginationsReducer;