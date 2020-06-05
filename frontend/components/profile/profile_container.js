import { fetchUser, updateUser } from "../../actions/user_actions"; 
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
    if (targetUser) { 
        if (state.entities.imaginations && targetUser.createdImaginationIds.length) { 
            ownedImaginations = Object.values(state.entities.imaginations)
        } else { 
            ownedImaginations = []
        }
    }
    // debugger
    return { 
        targetUser, 
        currentUser: state.entities.users[state.session.id],
        ownedImaginations
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: username => dispatch(fetchUser(username)), 
    logout: () => dispatch(logout()), 
    fetchImaginations: () => dispatch(fetchImaginations()), 
    updateUser: user => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)