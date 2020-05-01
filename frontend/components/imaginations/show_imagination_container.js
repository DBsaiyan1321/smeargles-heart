import { connect } from "react-redux";
import { fetchImagination } from "../../actions/imagination_actions";
import ImaginationShow from "./imagination_show"; 
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id], 
    imagination: state.entities.imaginations[ownProps.match.params.imaginationId]
});

const mapDispatchToProps = dispatch => ( {
    fetchImagination: imaginationId => dispatch(fetchImagination(imaginationId)), 
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationShow)