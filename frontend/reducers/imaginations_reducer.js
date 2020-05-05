import { RECEIVE_IMAGINATIONS, RECEIVE_IMAGINATION, REMOVE_IMAGINATION } from "../actions/imagination_actions";

const ImaginationsReducer = (oldState = {}, action) => { 
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_IMAGINATIONS:
            return Object.assign({}, oldState, action.imaginations)
        case RECEIVE_IMAGINATION: 
            return { [action.imagination.id]: action.imagination }
        case REMOVE_IMAGINATION: 
            // return Object.assign({}, oldState, { [action.imaginationId]: undefined })
            let newState = Object.assign({}, oldState) 
            delete newState[action.imaginationId]
            return newState;
        default:
            return oldState;
    }
};

export default ImaginationsReducer;