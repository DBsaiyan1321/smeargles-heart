import * as CommentApitUtil from "../util/comment_api_util"; 

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"; 
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"; 
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS, 
    comments 
}); 

const receiveComment = comment => ({
    type: RECEIVE_COMMENT, 
    comment 
}); 

const removeComment = commentId => ({ 
    type: REMOVE_COMMENT, 
    commentId
}); 

export const fetchComments = imaginationId => dispatch => {
    return CommentApitUtil.fetchComments(imaginationId) 
        .then(comments => dispatch(receiveComments(comments)))
}; 

export const createComment = comment => dispatch => { 
    return CommentApitUtil.createComment(comment) 
        .then(comment => dispatch(receiveComment(comment)))
}; 

export const updateComment = comment => dispatch => {
    return CommentApitUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
}; 

export const deleteComment = comment => dispatch => {
    let commentId = comment.id 
    return CommentApitUtil.deleteComment(comment)
        .then(() => dispatch(removeComment(commentId)))
};