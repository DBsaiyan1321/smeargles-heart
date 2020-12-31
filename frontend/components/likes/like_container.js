import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import LikeButton from "./like_button";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    currentUser: ownProps.currentUser, 
    imagination: ownProps.imagination,
}); 

const mapDispatchToProps = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LikeButton))
// Need withRouter so I can use props like history.

