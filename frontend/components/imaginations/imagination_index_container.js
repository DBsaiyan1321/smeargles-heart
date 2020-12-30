import { connect } from "react-redux";
import ImaginationIndex from "./imagination_index";
import { fetchImaginations } from "../../actions/imagination_actions"

const mapStateToProps = state => ({
    imaginations: Object.values(state.entities.imaginations).reverse() //, So the latest ones are first. I will implement a filter and sort function later
    // users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchImaginations: () => dispatch(fetchImaginations())
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationIndex);