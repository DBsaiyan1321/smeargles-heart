import React from "react"; 
import { Link } from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import CommentAvatar from "./CommentAvatar";

class Comments extends React.Component { 
    constructor(props) { 
        super(props) 

        this.state = { 
            // rerender: false, // To manually trigger a rerender for componentDidUpdate
            clicked: false,
            comment: props.comment,
            formType: "create"
        };

        this.typingInTextarea = this.typingInTextarea.bind(this);
        this.createComment = this.createComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.cancelCreateComment = this.cancelCreateComment.bind(this);
        this.cancelEditComment = this.cancelEditComment.bind(this);
        this.renderEditComment = this.renderEditComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }

    componentDidMount() { 
        // debugger
        this.props.fetchComments(this.props.imagination.id)
    }

    // componentDidUpdate(prevProps) { 
    //     if (prevProps.comments !== this.props.comments) { 
    //         this.setState({ rerender: !this.state.rerender})
    //     }
    // }

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
            .then(() => { 
                let comment = this.state.comment
                comment["body"] = ""
                this.setState({ clicked: false, comment })
            })
    }

    updateComment(e) {
        e.preventDefault();
        this.props.updateComment(this.state.comment)
            .then(() => {
                let comment = this.state.comment
                comment.body = ""
                this.setState({ formType: "create", comment, clicked: false })
            })
    }

    cancelCreateComment(e) {
        e.preventDefault()
        this.setState({ clicked: false })
    }

    cancelEditComment(e) {
        e.preventDefault();
        this.setState({ clicked: false, comment: this.props.comment, formType: "create" });
    }

    renderEditComment(e, selectedComment) {
        e.preventDefault();
        window.scrollTo({ top: 700, behavior: "smooth" })
        this.setState({ comment: selectedComment, formType: "edit" });
    }

    deleteComment(e, selectedComment) {
        e.preventDefault();
        this.props.deleteComment(selectedComment);
    }

    renderForm(type) {
        if (this.props.currentUser) {
            if (this.state.clicked && type === "create") {
                return ( // For some reason you have to click the input field twice to start typing. This only started happening when I changed it to the CommentForm component
                    <CommentForm
                        action={this.createComment}
                        cancel={this.cancelCreateComment}
                        bodyLength={this.state.comment.body.trim().length}
                        value="COMMENT">
                        <textarea className="comment-input-field" onChange={this.typingInTextarea("body")} value={this.state.comment.body} />
                    </CommentForm>
                )
            } else if (type === "create") {
                return (
                    <form onSubmit={this.createComment} className="comment-form">
                        <textarea className="comment-input-field" onChange={this.typingInTextarea("body")} onFocus={e => {
                            e.preventDefault()
                            this.setState({ clicked: true })
                        }} value={this.state.comment.body} placeholder="Add a new comment..." />
                    </form>
                )
            } else if (type === "edit") {
                return ( // The edit works perfect even after the CommentForm
                    <CommentForm
                        action={this.updateComment}
                        cancel={this.cancelEditComment}
                        bodyLength={this.state.comment.body.trim().length}
                        value="UPDATE">
                        <textarea className="comment-input-field" onChange={this.typingInTextarea("body")} value={this.state.comment.body} />
                    </CommentForm>
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

    render() {
        // console.log(this.state)
        return (
            <div className="comments-container">

                <h2>COMMENTS</h2> {/* <span>{this.props.commentCount}</span> Add this later and adjust the styling for it */}
                {this.renderForm(this.state.formType)}

                <ul className="all-comments">
                    {this.props.comments.map((comment) => {

                        if (this.props.currentUser) { 
                            if (this.props.currentUser.username === comment.username && this.state.formType === "create") { 
                                return <li key={comment.id} className="comment-box">
                                    <CommentAvatar avatar={comment.avatar} username={comment.username} />
                                    <CommentItem username={comment.username} body={comment.body}>
                                        <div className="owned-comments-buttons-container">
                                            <button onClick={e => this.renderEditComment(e, comment)} className="owned-comments-buttons">Edit</button>
                                            <button onClick={e => this.deleteComment(e, comment)} className="owned-comments-buttons">Delete</button>
                                        </div>
                                    </CommentItem>
                                </li> // Never forget to return in .map
                            } else { // Needed this extra else condition because it would only render my comments if I didn't have it here
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
        )
    }
}

export default Comments