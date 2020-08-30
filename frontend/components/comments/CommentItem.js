import React from "react"; 
import { Link } from "react-router-dom";

const CommmentItem = props => { 
    
    return ( 
        <div className="comment-container">
            <div className="comment-main-content">
                <Link to={`/user/${props.username}`} className="all-comments-username">{props.username}</Link>
                <span className="all-comments-body">{props.body}</span>
            </div>
            {props.children}
        </div>
    )
};

export default CommmentItem;

// Made this component on August 28, 2020