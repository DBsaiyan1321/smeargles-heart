import { connect } from "react-redux";
import { signup, clearErrors } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = state => ({
    errors: state.errors.session, 
    formType: "signup"
});

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors()),
    processForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
