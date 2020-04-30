import { connect } from "react-redux"; 
import ImaginationForm from "./imagination_form";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationForm)

// I'm going to have to use ownProps here to fetch the Imagination id from the url or somewhere else.
// ownProps.match.params.imagination_id