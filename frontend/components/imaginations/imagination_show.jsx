import React from "react"; 
import MainNavBar from "../main_nav_bar";

class ImaginationShow extends React.Component { 
    componentDidMount() { 
        // debugger
        this.props.fetchImagination(this.props.match.params.imaginationId)
    }

    render() { 
        if (!this.props.imagination) return null 
        // debugger
        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />
                {(this.props.imagination.image) ? <img src={this.props.imagination.image} alt="broke" /> : <></>}
            </div>
        )
    }
}

export default ImaginationShow;