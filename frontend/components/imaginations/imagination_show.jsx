import React from "react"; 
import MainNavBar from "../main_nav_bar";
import { Link } from "react-router-dom";

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
                {/* {(this.props.imagination.image) ? ( */}
                    <div>
                        <div className="image-panel"> 
                            <img src={this.props.imagination.image} alt="broke" className="shown-image" /> 
                        </div>
                            { ( this.props.currentUser && (this.props.currentUser.id === this.props.imagination.artist_id)) 
                            ? <Link to={this.props.match.url + "/edit"}>Edit</Link> : <></> }
                            <h1>{this.props.imagination.title}</h1>
                            <p>{this.props.imagination.description}</p>
                    </div>
                    {/* ) : <></>} */}
            </div>
        )
    }
}

export default ImaginationShow;