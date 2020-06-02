import React from "react"; 
import ImaginationIndexItem from "../imaginations/imagination_index_item";
import MainNavBar from "../main_nav_bar";

export default class Profile extends React.Component { 
    componentDidMount() {
        this.props.fetchUser(this.props.match.params.username)
        this.props.fetchImaginations()
    }

    render() { 
        if (!this.props.targetUser) return null

        return (
            <div> 
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout } />
                <ul className="imaginations-index"> 
                    {this.props.ownedImaginations.map(imagination => {
                        // debugger
                        return <ImaginationIndexItem imagination={imagination} key={imagination.id} artist={imagination.username} />
                    })}
    
                </ul>
            </div>
        )
            
    }
}