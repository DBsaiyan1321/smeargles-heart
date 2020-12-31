import React from "react";
import { Link } from "react-router-dom";

const CommentAvatar = ({avatar, username}) => (
    <>
        { avatar ?
            <Link to={`/user/${username}`} className="comment-avatar-link"><img src={avatar} className="comment-avatar" /></Link> :
            <Link to={`/user/${username}`} className="comment-avatar-link"><div className="no-comment-avatar">:)</div></Link>
        }   
    </>
);

export default CommentAvatar;