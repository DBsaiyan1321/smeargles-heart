import { connect } from "react-redux";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";
import LikeButton from "./like_button";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    debugger
    let bool; 
    let existingLikeId
    let likeIds = ownProps.imagination.likes
    for (let i = 0; i < likeIds.length; i++) { 
        let likeId = likeIds[i]
        // debugger

        // currentUser and likes are empty on the first pass through, which is why I have to have those first two conditions. I need to figure out why this is.
        if (ownProps.currentUser && state.entities.likes[likeId] && (state.entities.likes[likeId].user_id === ownProps.currentUser.id)) { 
            bool = true
            existingLikeId = likeId
            break // Must have this, or else bool will be false every time (unless the last like was from the currentUser)
        } else { 
            bool = false 
            existingLikeId = null
        }
    }
    // debugger
    return { 
        currentUser: ownProps.currentUser, 
        imagination: ownProps.imagination,
        localState: { likeId: existingLikeId, liked: bool },
        likeCount: ownProps.imagination.likes.length
    }
}; 

const mapDispatchToProps = dispatch => ({
    // fetchLikes: imaginationId => dispatch(fetchLikes(imaginationId)), 
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButton))
// Need withRouter so I can use props like history.

