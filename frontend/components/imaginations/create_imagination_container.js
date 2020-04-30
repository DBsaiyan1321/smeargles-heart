import { connect } from "react-redux"; 
import ImaginationForm from "./imagination_form";

const mapStateToProps = state => ({
    pop: "av"
});

const mapDispatchToProps = dispatch => ({
    pops: "av"
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaginationForm)