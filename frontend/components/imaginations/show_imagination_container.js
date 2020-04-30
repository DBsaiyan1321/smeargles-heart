import { connect } from "react-redux";
import { fetchImagination } from "../../actions/imagination_actions";
import ImaginationShow from "./imagination_show"; 

const mapStateToProps = (state, ownProps) => ({
    imagination: state.entities.imaginations[ownProps.match.params.imaginationId]
});

const mapDispatchToProps = dispatch => ( {
    fetchImagination: imaginationId => dispatch(fetchImagination(imaginationId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationShow)