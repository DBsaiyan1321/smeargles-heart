import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user })
        case RECEIVE_USERS: 
            return action.users 
        case RECEIVE_USER:
            let theUser = {
                id: action.user.id,
                bio: action.user.bio, 
                username: action.user.username, 
                createdImaginationIds: action.user.createdImaginationIds,
                email: action.user.email,
                avatar: action.user.avatar
            }
            return Object.assign({}, oldState, { [action.user.id]: theUser })
        default:
            return oldState;
    }
};

export default UsersReducer;