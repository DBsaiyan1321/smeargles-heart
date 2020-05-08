import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return Object.assign({}, oldState, action.comments)
        case RECEIVE_COMMENT: 
            return Object.assign({}, oldState, { [action.comment.id]: action.comment } )
        case REMOVE_COMMENT: 
            let newState = Object.assign({}, oldState)
            delete newState[action.commentId]
            return newState;
        default:
            return oldState; 
    }
}

export default CommentsReducer; 