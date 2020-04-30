import React from "react"; 
import MainNavBar from "../main_nav_bar"

class ImaginationForm extends React.Component { 
    render() { 
        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />
                <p>Imagination Form goes here</p>
            </div>
        )
    }
}

export default ImaginationForm;