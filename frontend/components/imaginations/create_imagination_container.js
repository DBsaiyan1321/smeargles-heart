import { connect } from "react-redux"; 
import ImaginationForm from "./imagination_form";
import { logout } from "../../actions/session_actions";
import { createImagination } from "../../actions/imagination_actions";

const mapStateToProps = state => ({
    imagination: { title: "", description: "", artist_id: state.session.id, imageFile: null, imageUrl: null }, 
    currentUser: state.entities.users[state.session.id], 
    formType: "Create",
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    action: imagination => dispatch(createImagination(imagination))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationForm)