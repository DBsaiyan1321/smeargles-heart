import React from "react"; 
import MainNavBar from "../main_nav_bar";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";

class ImaginationShow extends React.Component { 

    constructor(props) {
        super(props)

        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() { 
        this.props.fetchImagination(this.props.match.params.imaginationId)
    }

    deletePost() { 
        this.props.deleteImagination(this.props.imagination.id) 
        this.props.history.push("/") // This is the way to redirect the user to another page. 
    } 

    render() { 
        if (!this.props.imagination) return null 
       
        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />
                {/* {(this.props.imagination.image) ? ( */}
                    <div className="show-container">
                        <div className="image-panel"> 
                            <img src={this.props.imagination.image} alt="broke" className="shown-image" /> 
                        </div>
                        
                        <div className="bottom-half-of-show">
                            {(this.props.currentUser && (this.props.currentUser.id === this.props.imagination.artist_id))
                            ? <div className="user-owned-post">
                                <button onClick={() => this.deletePost()} className="user-owned-post-buttons"><FaRegTrashAlt /></button>
                                <Link to={this.props.match.url + "/edit"} className="user-owned-post-buttons"><RiPencilLine /></Link>
                              </div>
                            : <></>}
                            <h1 className="show-title">{this.props.imagination.title}</h1>
                            <h2 className="show-username">By *Username Here*</h2>
                            <p className="show-description">{this.props.imagination.description}</p>
                        </div>
                    </div>
                    {/* ) : <></>} */}
            </div>
        )
    }
}

export default ImaginationShow;