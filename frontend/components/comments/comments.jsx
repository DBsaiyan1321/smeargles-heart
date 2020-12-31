import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import CommentAvatar from "./CommentAvatar";

const Comments = props => {
    const [id, setId] = useState(null);
    const [body, setBody] = useState("");
    const [formType, setFormType] = useState("create");
    const [showFormButtons, setShowFormButtons] = useState(false);
 
    useEffect(() => {
        props.fetchComments(props.imagination.id); 
    }, []);

    const createComment = e => {
        e.preventDefault();
        const comment = { ...props.commentForeignKeys, body };
        props.createComment(comment)
            .then(() => {
                setBody("");
                setFormType("create");
                setShowFormButtons(false);
            });
    };

    const updateComment = e => {
        e.preventDefault();
        const comment = { id, body, ...props.commentForeignKeys };
        props.updateComment(comment)
            .then(() => {
                setBody("");
                setId(null);
                setFormType("create");
            });
    };

    const cancelCreateComment = e => {
        e.preventDefault();
        setFormType("create");
        setShowFormButtons(false);
    };

    const cancelEditComment = e => {
        e.preventDefault();
        setId(null);
        setBody("");
        setFormType("create");
    };

    const renderEditComment = (e, selectedComment) => {
        e.preventDefault();
        window.scrollTo({ top: 700, behavior: "smooth" })
        setId(selectedComment.id);
        setBody(selectedComment.body);
        setFormType("edit");
    };

    const deleteComment = (e, selectedComment) => {
        e.preventDefault();
        props.deleteComment(selectedComment);
    }
    
    const renderForm = type => {
        if (props.currentUser) {
            if (type === "create") {
                return ( 
                    <CommentForm
                        action={createComment}
                        cancel={cancelCreateComment}
                        bodyLength={body.trim().length}
                        value="COMMENT"
                        showButtons={showFormButtons}>
                        <textarea className="comment-input-field" onChange={e => setBody(e.currentTarget.value)} value={body} placeholder="Add a new comment..." onFocus={() => setShowFormButtons(true)} />
                    </CommentForm>
                )
            } else if (type === "edit") {
                return (
                    <CommentForm
                        action={updateComment}
                        cancel={cancelEditComment}
                        bodyLength={body.trim().length}
                        value="UPDATE"
                        showButtons={true}>
                        <textarea className="comment-input-field" onChange={e => setBody(e.currentTarget.value)} value={body} />
                    </CommentForm>
                )
            }
        } else {
            return (
                <form onSubmit={createComment}>
                    <Link to="/login"><textarea className="comment-input-field" placeholder="Log in to add a new comment..." /></Link>
                </form>
            )
        }
    }

    return (
        <div className="comments-container">
            <h2>COMMENTS</h2> {/* <span>{props.commentCount}</span> Add this later and adjust the styling for it */}
            {renderForm(formType)}
            <ul className="all-comments">
                {props.comments.map((comment) => {
                    if (props.currentUser) {
                        if (props.currentUser.username === comment.username && formType === "create") {
                            return <li key={comment.id} className="comment-box">
                                <CommentAvatar avatar={comment.avatar} username={comment.username} />
                                <CommentItem username={comment.username} body={comment.body}>
                                    <div className="owned-comments-buttons-container">
                                        <button onClick={e => renderEditComment(e, comment)} className="owned-comments-buttons">Edit</button>
                                        <button onClick={e => deleteComment(e, comment)} className="owned-comments-buttons">Delete</button>
                                    </div>
                                </CommentItem>
                            </li>
                        } else {
                            return <li key={comment.id} className="comment-box">
                                <CommentAvatar avatar={comment.avatar} username={comment.username} />
                                <CommentItem username={comment.username} body={comment.body} />
                            </li>
                        }
                    } else {
                        return <li key={comment.id} className="comment-box">
                            <CommentAvatar avatar={comment.avatar} username={comment.username} />
                            <CommentItem username={comment.username} body={comment.body} />
                        </li>
                    }
                })}
            </ul>
        </div>
    );
};

export default Comments;