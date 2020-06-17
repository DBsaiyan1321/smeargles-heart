import React from "react"; 
import { Link } from "react-router-dom";

class Comments extends React.Component { 
    constructor(props) { 
        super(props) 

        this.state = { 
            rerender: false, // To manually trigger a rerender for componentDidUpdate
            clicked: false, // Change to false later when you figure out how to 
            comment: props.comment,
            formType: null
        };

        this.renderForm = this.renderForm.bind(this);
        this.typingInTextarea = this.typingInTextarea.bind(this);
        this.createComment = this.createComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.renderEditComment = this.renderEditComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
    }

    componentDidMount() { 
        this.props.fetchComments(this.props.imagination.id)
    }

    componentDidUpdate(prevProps) { 
        if (prevProps.comments !== this.props.comments) { 
            this.setState({ rerender: !this.state.rerender})
        }
    }

    renderForm(type) { 
        if (this.props.currentUser) { 
            if (this.state.clicked && !type) {
                return (
                    <form onSubmit={this.createComment} className="comment-form">
                        <textarea className="comment-input-field" onChange={this.typingInTextarea("body")} value={this.state.comment.body} />
                        <div className="comment-form-button-container">
                            <button onClick={e => {
                                e.preventDefault()
                                this.setState({ clicked: false })
                            }} className="comment-cancel">CANCEL</button>
                            {(this.state.comment.body.trim().length > 0) ?
                            <input type="submit" value="COMMENT" className="comment-submit-form" /> : 
                            <input type="submit" value="COMMENT" className="comment-submit-form-faded" />}
                        </div>
                    </form>
                )
            } else if (!type) {
                return (
                    <form onSubmit={this.createComment} className="comment-form">
                        <textarea className="comment-input-field" onChange={this.typingInTextarea("body")} onFocus={e => {
                            e.preventDefault()
                            this.setState({ clicked: true })
                        }} value={this.state.comment.body} placeholder="Add a new comment..." />
                    </form>
                )
            } else if (type) { 
                return (
                    <form onSubmit={this.updateComment} className="comment-form">
                        <textarea className="comment-input-field" onChange={this.typingInTextarea("body")} value={this.state.comment.body} />
                        <div className="comment-form-button-container">
                            <button onClick={e => {
                                e.preventDefault()
                                this.setState({ clicked: false, comment: this.props.comment, formType: null })
                            }} className="comment-cancel">CANCEL</button>
                            {(this.state.comment.body.trim().length > 0) ?
                                <input type="submit" value="UPDATE" className="comment-submit-form" /> :
                                <input type="submit" value="UPDATE" className="comment-submit-form-faded" />}
                        </div>
                    </form>
                )
            }
        } else { 
            return (
                <form onSubmit={this.createComment}>
                    <Link to="/login"><textarea className="comment-input-field" placeholder="Log in to add a new comment..." /></Link>
                </form>
            )
        }
    }

    typingInTextarea(type) { // This is how you handle nested objects in state
        return e => {
            let comment = Object.assign({}, this.state.comment) // Using Object.assign here fixed the issue where when I would edit the state it would visually edit the original on screen. 
            comment[type] = e.target.value
            this.setState({ comment })
        }
    }

    createComment(e) { 
        e.preventDefault();
        this.props.createComment(this.state.comment)
            .then(() => { // I added this to clear the textbox. Everything was working before, so take this out if it breaks anything. 
                let comment = this.state.comment
                comment["body"] = ""
                this.setState({ clicked: false, comment })
            })
    }

    renderEditComment(e, selectedComment) {
        e.preventDefault();
        window.scrollTo({ top: 700, behavior: "smooth"})
        this.setState({ comment: selectedComment, formType: "edit" });
    }

    updateComment(e) {
        e.preventDefault();
        this.props.updateComment(this.state.comment)
            .then(() => { // I added this to clear the textbox. Everything was working before, so take this out if it breaks anything. 
                let comment = this.state.comment
                comment.body = ""
                this.setState({ formType: null, comment, clicked: false })
            })
    }

    deleteComment(e, selectedComment) {
        e.preventDefault();
        this.props.deleteComment(selectedComment);
    }

    render() {
        // console.log(this.state)
        return (
            <div className="comments-container">

                <h2>COMMENTS</h2> {/* <span>{this.props.commentCount}</span> Add this later and adjust the styling for it */}
                {this.renderForm(this.state.formType)}

                <ul className="all-comments">
                    {this.props.comments.map((comment) => {

                        if (this.props.currentUser) { 
                            if (this.props.currentUser.username === comment.username && !this.state.formType) { 
                                return <li key={comment.id} className="comment-box">
                                    { (comment.avatar) ? 
                                    <Link to={`/user/${comment.username}`} className="comment-avatar-link"><img src={comment.avatar} className="comment-avatar" /></Link> : 
                                    <Link to={`/user/${comment.username}`} className="comment-avatar-link"><div className="no-comment-avatar">:)</div></Link> 
                                    }
                                    <div className="comment-container">
                                        <div className="comment-main-content">
                                            <Link to={`/user/${comment.username}`} className="all-comments-username">{comment.username}</Link>
                                            <span className="all-comments-body">{comment.body}</span>
                                        </div>
                                        <div className="owned-comments-buttons-container">
                                            <button onClick={e => this.renderEditComment(e, comment)} className="owned-comments-buttons">Edit</button>
                                            <button onClick={e => this.deleteComment(e, comment)} className="owned-comments-buttons">Delete</button>
                                        </div>
                                    </div>
                                </li> // Never forget to return in .map
                            } else { // Needed this extra else condition because it would only render my comments if I didn't have it here
                                return <li key={comment.id} className="comment-box">
                                    {(comment.avatar) ?
                                        <Link to={`/user/${comment.username}`} className="comment-avatar-link"><img src={comment.avatar} className="comment-avatar" /></Link> :
                                        <Link to={`/user/${comment.username}`} className="comment-avatar-link"><div className="no-comment-avatar">:)</div></Link>
                                    }                                    
                                    <div className="comment-container">
                                        <div className="comment-main-content">
                                            <Link to={`/user/${comment.username}`} className="all-comments-username">{comment.username}</Link>
                                            <span className="all-comments-body">{comment.body}</span>
                                        </div>
                                    </div>
                                </li>
                            }
                        } 
                        
                        else { 
                            return <li key={comment.id} className="comment-box">
                                {(comment.avatar) ?
                                    <Link to={`/user/${comment.username}`} className="comment-avatar-link"><img src={comment.avatar} className="comment-avatar" /></Link> :
                                    <Link to={`/user/${comment.username}`} className="comment-avatar-link"><div className="no-comment-avatar">:)</div></Link>
                                }
                                <div className="comment-container"> 
                                    <div className="comment-main-content">
                                        <Link to={`/user/${comment.username}`} className="all-comments-username">{comment.username}</Link>
                                        <span className="all-comments-body">{comment.body}</span>
                                    </div>
                                </div>
                            </li>
                        }

                    })}
                </ul>

            </div>
        )
    }
}

export default Comments