import { RECEIVE_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const LikesReducer = (oldState = {}, action) => { 
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_LIKES:
            return Object.assign({}, oldState, action.likes)
        case RECEIVE_LIKE:
            return Object.assign({}, oldState, action.like)
        case REMOVE_LIKE:
            let newState = Object.assign({}, oldState)
            delete newState[action.likeId]
            return newState
        default:
            return oldState 
    }
}

export default LikesReducer;