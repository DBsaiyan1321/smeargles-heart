import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const LikeButton = props => {
    const [likeId, setLikeId] = useState(props.existingLikeId); 
    const [liked, setLiked] = useState(props.liked); 

    const componentCleanup = () => {
        if (props.currentUser) {
            let like;
            if (!likeId) {
                like = { imagination_id: props.imagination.id, user_id: props.currentUser.id }
            } else {
                like = { id: likeId, imagination_id: props.imagination.id, user_id: props.currentUser.id }
            }


            if (Boolean(liked && props.currentUser && !likeId)) {
                props.createLike(like)
            } else if (Boolean(!liked && props.currentUser && likeId)) {
                props.deleteLike(like)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('beforeunload', componentCleanup);

        return () => {
            componentCleanup();
            window.removeEventListener('beforeunload', componentCleanup);
        };
    }, []);

    useEffect(() => {
        setLikeId(props.existingLikeId);
        setLiked(props.liked);
    }, [props.liked]);

    const likeOrUnlike = e => {
        if (!props.currentUser) {
            props.history.push("/login")
        }

        if (props.currentUser) {
            let like;
            if (!props.existingLikeId) {
                like = { imagination_id: props.imagination.id, user_id: props.currentUser.id }
            } else {
                like = { id: props.existingLikeId, imagination_id: props.imagination.id, user_id: props.currentUser.id }
            }

            if (Boolean(!props.liked && props.currentUser && !props.existingLikeId)) {
                props.createLike(like)
            } else if (Boolean(props.liked && props.currentUser && props.existingLikeId)) {
                props.deleteLike(like)
            }
        }
    }

    return (
        props.currentUser ? (
            liked
                ? <div className="like-div" onClick={e => likeOrUnlike(e)}>
                    <div className="like-button"><AiFillStar /></div>
                    <h1 className="like-text">LIKED</h1>
                </div>
                : <div className="like-div" onClick={e => likeOrUnlike(e)}>
                    <div className="like-button"><AiOutlineStar /></div>
                    <h1 className="like-text">LIKE THIS IMAGINATION</h1>
                </div>
        ) : (
                <div className="like-div" onClick={e => likeOrUnlike(e)}>
                    <div className="like-button"><AiOutlineStar /></div>
                    <h1 className="like-text">LOG IN TO LIKE THIS IMAGINATION</h1>
                </div>
            )
    )
};

export default LikeButton;