import React from "react"; 
import MainNavBar from "../main_nav_bar";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LikeButton from "../likes/like_button";
import { AiFillStar } from "react-icons/ai";

class ImaginationShow extends React.Component { 
    constructor(props) {
        super(props)
        
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() { 
        this.props.fetchLikes(this.props.match.params.imaginationId) // Why does this order matter? 
            .then(() => this.props.fetchImagination(this.props.match.params.imaginationId))
    }

    /**************************************************************************/

    componentDidUpdate(prevProps) { // Craziness!
        if (this.props.match.params.imaginationId !== prevProps.match.params.imaginationId) { 
            this.props.fetchLikes(this.props.match.params.imaginationId)
                .then(() => this.props.fetchImagination(this.props.match.params.imaginationId))
        }
    }

    deletePost() { 
        this.props.deleteImagination(this.props.imagination.id) 
            .then(() => this.props.history.push("/")) // This is the way to redirect the user to another page. 
    } 

    /**************************************************************************/

    componentWillUnmount() { 
        // debugger
    }

    render() { 
        if (!this.props.imagination) return null 
        // The arrows don't work as expected. Maybe when I fetch the imagination, I will fetch the one before and after it as well. So I would fetch three imaginations at a time.
        return ( 
            <div>
                <MainNavBar currentUser={this.props.currentUser} logout={this.props.logout} />

                <div className="show-container">

                    <div className="image-panel"> 
                        {/* <Link to={`/imaginations/${this.props.imagination.id - 1}`} className="show-arrows" ><IoIosArrowBack /></Link>  */}
                        <img src={this.props.imagination.image} alt="broke" className="shown-image" /> 
                        {/* <Link to={`/imaginations/${this.props.imagination.id + 1}`} className="show-arrows" ><IoIosArrowForward /></Link> */}
                    </div>
                    
                    <div className="bottom-half-of-show">

                        {(this.props.currentUser && (this.props.currentUser.id === this.props.imagination.artist_id))
                        ? <div className="user-owned-post">
                            <LikeButton {...this.props} />
                            <div>
                                <button onClick={() => this.deletePost()} className="user-owned-post-buttons"><FaRegTrashAlt /></button>
                                <Link to={this.props.match.url + "/edit"} className="user-owned-post-buttons"><RiPencilLine /></Link>
                            </div>
                          </div>
                        : <div className="unowned-post">
                            <LikeButton {...this.props} />
                          </div>}

                        <div className="title-container">
                            <h1 className="show-title">{this.props.imagination.title}</h1>
                            <div className="like-count"><AiFillStar /><p>{this.props.likeCount}</p></div>
                        </div>
                        <div className="author">
                            <span className="by">BY</span>
                            <span className="show-username">{this.props.imagination.username}</span>
                        </div>
                        <p className="show-description">{this.props.imagination.description}</p>

                    </div>
                </div>
            </div>
        )
    }
}

export default ImaginationShow;