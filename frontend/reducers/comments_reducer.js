import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_IMAGINATIONS } from "../actions/imagination_actions";

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_COMMENTS:
            // return Object.assign({}, oldState, action.comments)
            return action.comments // Fixes the problem of when you make an imagination from a show page and the comments show up on it
        case RECEIVE_COMMENT: 
            return Object.assign({}, oldState, { [action.comment.id]: action.comment } )
        case REMOVE_COMMENT: 
            let newState = Object.assign({}, oldState)
            delete newState[action.commentId]
            return newState;
        case RECEIVE_IMAGINATIONS: // When I'm displaying multiple imaginations on the page I want to clear the comments from state
            return {};
        default:
            return oldState; 
    }
}

export default CommentsReducer; 