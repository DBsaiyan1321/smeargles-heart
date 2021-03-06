import { connect } from "react-redux"; 
import ImaginationForm from "./imagination_form";
import { logout } from "../../actions/session_actions";
import { fetchImagination, updateImagination } from "../../actions/imagination_actions";
import React, { useEffect } from "react";

const Edit = props => {
    useEffect(() => {
        props.fetchImagination(props.match.params.imaginationId)
    }, []);

    return props.imagination ? <ImaginationForm {...props} /> : null
};

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    imagination: state.entities.imaginations[ownProps.match.params.imaginationId],
    formType: "Edit",
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchImagination: imaginationId => dispatch(fetchImagination(imaginationId)), 
    action: imagination => dispatch(updateImagination(imagination))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

// I'm going to have to use ownProps here to fetch the Imagination id from the url or somewhere else.
// ownProps.match.params.imagination_id