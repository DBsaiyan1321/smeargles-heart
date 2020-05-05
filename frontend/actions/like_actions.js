import * as LikeApiUtil from "../util/like_api_util"; 

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
});

const receiveLike = like => ({
    type: RECEIVE_LIKE, 
    like
});

const removeLike = likeId => ({
    type: REMOVE_LIKE, 
    likeId
});

export const fetchLikes = imaginationId => dispatch => {
    return LikeApiUtil.fetchLikes(imaginationId)
        .then(likes => dispatch(receiveLikes(likes)))
};

export const createLike = like => dispatch => {
    return LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
};

export const deleteLike = like => dispatch => {
    let likeId = like.id 
    return LikeApiUtil.deleteLike(like)
        .then(() => dispatch(removeLike(likeId)))
};