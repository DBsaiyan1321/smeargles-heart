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
        this.formSubmission = this.formSubmission.bind(this);
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
                    <form onSubmit={this.formSubmission}>
                        <textarea onChange={this.typingInTextarea("body")} value={this.state.comment.body} />
                        <button onClick={e => {
                            e.preventDefault()
                            this.setState({ clicked: false })
                        }}>Cancel</button>
                        <input type="submit" value="Comment" />
                    </form>
                )
            } else if (!type) {
                return (
                    <form onSubmit={this.formSubmission}>
                        <textarea onChange={this.typingInTextarea("body")} onFocus={e => {
                            e.preventDefault()
                            this.setState({ clicked: true })
                        }} value={this.state.comment.body} />
                    </form>
                )
            } else if (type) { 
                return (
                    <form onSubmit={this.updateComment}>
                        <textarea onChange={this.typingInTextarea("body")} value={this.state.comment.body} />
                        <button onClick={e => {
                            e.preventDefault()
                            this.setState({ clicked: false, comment: this.props.comment, formType: null })
                        }}>Cancel</button>
                        <input type="submit" value="Update" />
                    </form>
                )
            }
        } else { 
            return (
                <form onSubmit={this.formSubmission}>
                    <Link to="/signup"><textarea /></Link>
                </form>
            )
        }
    }

    typingInTextarea(type) { // This is how you handle nested objects in state
        return e => {
            let comment = this.state.comment
            comment[type] = e.target.value
            this.setState({ comment })
        }
    }

    formSubmission(e) { 
        e.preventDefault();
        this.props.createComment(this.state.comment)
    }

    renderEditComment(e, selectedComment) {
        e.preventDefault();
        this.setState({ comment: selectedComment, formType: "edit" });
        console.log(this.state)
    }

    updateComment(e) {
        e.preventDefault();
        // console.log(this.state.comment);
        this.props.updateComment(this.state.comment);
    }

    deleteComment(e, selectedComment) {
        e.preventDefault();
        this.props.deleteComment(selectedComment);
    }

    render() {
        console.log(this.state)
        return <div className="comments">
                {this.renderForm(this.state.formType)}
                <ul>
                    {this.props.comments.map((comment) => {
                        if (this.props.currentUser) { 
                            if (this.props.currentUser.username === comment.username) { 
                                return <li key={comment.id}>
                                    <p>{comment.username}</p>
                                    {comment.body}
                                    <button onClick={e => this.renderEditComment(e, comment)}>Edit</button>
                                    <button onClick={e => this.deleteComment(e, comment)}>Delete</button>
                                </li> // Never forget to return in .map
                            } else { // Needed this extra else condition because it would only render my comments if I didn't have it here
                                return <li key={comment.id}>
                                    <p>{comment.username}</p>
                                    {comment.body}
                                </li>
                            }
                        } else { 
                            return <li key={comment.id}>
                                <p>{comment.username}</p>
                                {comment.body}
                            </li>
                        }
                    })}
                </ul>
            </div>
    }
}

export default Comments