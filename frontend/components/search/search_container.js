import { search } from "../../actions/search_actions";
import { connect } from "react-redux";
import Search from "./search";

const mapStateToProps = state => ({ 
    results: state.entities.search
});

const mapDispatchToProps = dispatch => ({
    search: input => dispatch(search(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)