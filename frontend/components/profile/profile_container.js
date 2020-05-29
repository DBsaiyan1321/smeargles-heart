import { fetchUser, fetchUsers } from "../../actions/user_actions"; 
import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = (state, ownProps) => {
    let targetUser; 
    Object.values(state.entities.users).forEach(user => { 
        if (user.username === ownProps.match.params.username) { 
            targetUser = user
        }
    });
    return { targetUser }
}

const mapDispatchToProps = dispatch => ({
    fetchUser: username => dispatch(fetchUser(username)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)