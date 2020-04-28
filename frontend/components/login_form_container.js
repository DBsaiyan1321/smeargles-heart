import { connect } from "react-redux"; 
import { login } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => ({ // Don't need ownProps, I just put it there so I don't forget that they exist in the future lol.
    errors: state.errors.session, 
    formType: "login"
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);