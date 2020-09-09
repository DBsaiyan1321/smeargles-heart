import React from "react";

const CommentForm = ({action, cancel, bodyLength, value, children}) => {
    return ( 
        <form onSubmit={action} className="comment-form">
            {children}
            <div className="comment-form-button-container">
                <button onClick={cancel} className="comment-cancel">CANCEL</button>
                {(bodyLength > 0) ?
                    <input type="submit" value={value} className="comment-submit-form" /> :
                    <input type="submit" value={value} className="comment-submit-form-faded" />}
            </div>
        </form>
    ) 
};

export default CommentForm;