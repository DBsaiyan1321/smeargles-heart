import { connect } from "react-redux";
import ImaginationIndex from "./imagination_index";
import { fetchImaginations } from "../../actions/imagination_actions"
// import { fetchLikes } from "../../actions/like_actions";

const mapStateToProps = state => ({
    imaginations: Object.values(state.entities.imaginations).reverse()
});

const mapDispatchToProps = dispatch => ({
    fetchImaginations: () => dispatch(fetchImaginations())
    // fetchLikes: imaginationId => dispatch(fetchLikes(imaginationId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationIndex);