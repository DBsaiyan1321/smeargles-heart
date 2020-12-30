import React, { useEffect } from "react";
import MainNavBar from "../navbar/main_nav_bar";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import LikeButton from "../likes/like_button";
import { AiFillStar } from "react-icons/ai";
import Comments from "../comments/comments_container";
import Footer from "../footer";

const ImaginationShow = props => {
    useEffect(() => { 
        window.previousUrl = props.match.url
        window.scrollTo({ top: 0 })
        props.fetchLikes(props.match.params.imaginationId) // Why does this order matter? 
            .then(() => props.fetchImagination(props.match.params.imaginationId))
    }, [props.match.params.imaginationId]);

    const deletePost = () => {
        props.deleteImagination(props.imagination.id)
            .then(() => props.history.push("/"))
    };

    if (!props.imagination) return null

    return (
        <div>
            <MainNavBar currentUser={props.currentUser} logout={props.logout} />
            <div className="show-container">
                <div className="image-panel">
                    <img src={props.imagination.image} alt="broke" className="shown-image" />
                </div>
                <div className="bottom-half-of-show">
                    {(props.currentUser && (props.currentUser.id === props.imagination.artist_id))
                        ? <div className="user-owned-post">
                            <LikeButton {...props} />
                            <div>
                                <button onClick={() => deletePost()} className="user-owned-post-buttons"><FaRegTrashAlt /></button>
                                <Link to={props.match.url + "/edit"} className="user-owned-post-buttons"><RiPencilLine /></Link>
                            </div>
                        </div>
                        : <div className="unowned-post">
                            <LikeButton {...props} />
                        </div>}
                    <div className="title-container">
                        <h1 className="show-title">{props.imagination.title}</h1>
                        <div className="like-count"><AiFillStar /><p>{props.likeCount}</p></div>
                    </div>
                    <div className="author">
                        <span className="by">BY</span>
                        <span className="show-username"><Link to={`/user/${props.imagination.username}`}>{props.imagination.username}</Link></span>
                    </div>
                    <p className="show-description">{props.imagination.description}</p>
                    <Comments imagination={props.imagination} currentUser={props.currentUser} />
                </div>
            </div>
            <Footer />
        </div>
    )
};


export default ImaginationShow;