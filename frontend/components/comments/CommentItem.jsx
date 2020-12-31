import React from "react"; 
import { Link } from "react-router-dom";

const CommmentItem = ({username, body, children}) => ( 
        <div className="comment-container">
            <div className="comment-main-content">
                <Link to={`/user/${username}`} className="all-comments-username">{username}</Link>
                <span className="all-comments-body">{body}</span>
            </div>
            {children}
        </div>
    );

export default CommmentItem;

// Made this component on August 28, 2020