import { connect } from "react-redux";
import ImaginationIndex from "./imagination_index";
import { fetchImaginations } from "../../actions/imagination_actions"
// import { fetchLikes } from "../../actions/like_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = state => ({
    imaginations: Object.values(state.entities.imaginations).reverse(),
    users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchImaginations: () => dispatch(fetchImaginations()),
    // fetchLikes: imaginationId => dispatch(fetchLikes(imaginationId)),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationIndex);