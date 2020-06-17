import { connect } from "react-redux";
import { fetchImagination } from "../../actions/imagination_actions";
import ImaginationShow from "./imagination_show"; 
import { logout } from "../../actions/session_actions";
import { deleteImagination } from "../../actions/imagination_actions";
import { fetchLikes, createLike, deleteLike } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => {
    let imagination = state.entities.imaginations[ownProps.match.params.imaginationId]
    let currentUser = state.entities.users[state.session.id] 
    let bool;
    let existingLikeId;
    let likeIds;
    let likeCount;
    
    if (imagination) {
        likeCount = Object.keys(state.entities.likes).length 
        likeIds = Object.keys(state.entities.likes);
        for (let i = 0; i < likeIds.length; i++) {
            let likeId = likeIds[i]

            // currentUser and likes are empty on the first pass through, which is why I have to have those first two conditions. I need to figure out why this is.
            if (currentUser && state.entities.likes[parseInt(likeId)] && (state.entities.likes[parseInt(likeId)].user_id === currentUser.id)) {
                bool = true
                existingLikeId = likeId
                break // Must have this, or else bool will be false every time (unless the last like was from the currentUser)
            } else {
                bool = false
                existingLikeId = null
            }
        }
    } 

    return { 
        currentUser, 
        imagination, 
        liked: bool, 
        existingLikeId,
        likeCount
    }
}
// const mapStateToProps = (state, ownProps) => {
//     return {
//             currentUser: state.entities.users[state.session.id], 
//             imagination: state.entities.imaginations[ownProps.match.params.imaginationId]
//             // imaginationLikes: Object.values(state.entities.likes)
//         }
// };

const mapDispatchToProps = dispatch => ({
    fetchImagination: imaginationId => dispatch(fetchImagination(imaginationId)),
    deleteImagination: imaginationId => dispatch(deleteImagination(imaginationId)),
    logout: () => dispatch(logout()),
    fetchLikes: imaginationId => dispatch(fetchLikes(imaginationId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))

})

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationShow);