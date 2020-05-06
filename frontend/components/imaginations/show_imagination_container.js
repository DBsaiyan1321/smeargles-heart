import { connect } from "react-redux";
import { fetchImagination } from "../../actions/imagination_actions";
import ImaginationShow from "./imagination_show"; 
import { logout } from "../../actions/session_actions";
import { deleteImagination } from "../../actions/imagination_actions";
import { fetchLikes } from "../../actions/like_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id], 
    imagination: state.entities.imaginations[ownProps.match.params.imaginationId]
    // imaginationLikes: Object.values(state.entities.likes)
});

const mapDispatchToProps = dispatch => ({
    fetchImagination: imaginationId => dispatch(fetchImagination(imaginationId)),
    deleteImagination: imaginationId => dispatch(deleteImagination(imaginationId)),
    logout: () => dispatch(logout()),
    fetchLikes: imaginationId => dispatch(fetchLikes(imaginationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationShow);