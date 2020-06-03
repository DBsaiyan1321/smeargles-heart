import { fetchUser } from "../../actions/user_actions"; 
import { connect } from "react-redux";
import Profile from "./profile";
import { logout } from "../../actions/session_actions";
import { fetchImaginations } from "../../actions/imagination_actions";

const mapStateToProps = (state, ownProps) => {
    let targetUser; 
    Object.values(state.entities.users).forEach(user => { 
        if (user.username === ownProps.match.params.username) { 
            targetUser = user
        }
    });

    let ownedImaginations;
    if (state.entities.imaginations) ownedImaginations = Object.values(state.entities.imaginations).filter(imagination => imagination.artist_id === targetUser.id)
    return { 
        targetUser, 
        currentUser: state.entities.users[state.session.id],
        ownedImaginations
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: username => dispatch(fetchUser(username)), 
    logout: () => dispatch(logout()), 
    fetchImaginations: () => dispatch(fetchImaginations())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)