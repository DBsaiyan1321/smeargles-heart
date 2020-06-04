import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_IMAGINATIONS } from "../actions/imagination_actions";

const LikesReducer = (oldState = {}, action) => { 
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_LIKES:
            // return Object.assign({}, oldState, action.likes)
            return action.likes
        case RECEIVE_LIKE:
            return Object.assign({}, oldState, { [action.like.id]: action.like })
        case REMOVE_LIKE:
            let newState = Object.assign({}, oldState)
            delete newState[action.likeId]
            return newState
        case RECEIVE_IMAGINATIONS: // When I'm displaying multiple imaginations on the page I want to clear the likes from state
            return {};
        default:
            return oldState 
    }
}

export default LikesReducer;