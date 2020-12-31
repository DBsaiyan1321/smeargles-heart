import { connect } from "react-redux";
import Comments from "./comments";
import { fetchComments, createComment, updateComment, deleteComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: ownProps.currentUser,
    comments: (state.entities.comments) ? Object.values(state.entities.comments).reverse() : [], 
    commentCount: (state.entities.comments) ? Object.values(state.entities.comments).length : 0,
    commentForeignKeys: { user_id: state.session.id, imagination_id: ownProps.imagination.id } 
});

const mapDispatchToProps = dispatch => ({
    fetchComments: imaginationId => dispatch(fetchComments(imaginationId)), 
    createComment: comment => dispatch(createComment(comment)), 
    updateComment: comment => dispatch(updateComment(comment)), 
    deleteComment: comment => dispatch(deleteComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments)