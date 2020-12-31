import React from "react";

const CommentForm = ({ action, cancel, bodyLength, value, showButtons, children}) => ( 
    <form onSubmit={action} className="comment-form">
        {children}
        { showButtons ? 
            <div className="comment-form-button-container">
                <button onClick={cancel} className="comment-cancel">CANCEL</button>
                {
                    (bodyLength > 0)
                        ? <input type="submit" value={value} className="comment-submit-form" />
                        : <input type="submit" value={value} className="comment-submit-form-faded" />
                }
            </div> : 
            null 
        }
    </form>
);

export default CommentForm;