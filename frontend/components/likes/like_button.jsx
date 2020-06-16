import React from "react"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class LikeButton extends React.Component {
    constructor(props) { 
        super(props)
        // debugger
        this.state = { likeId: props.existingLikeId, liked: props.liked } // not this.props because I am in the constructor function

        this.likeOrUnlike = this.likeOrUnlike.bind(this)
        this.componentCleanup = this.componentCleanup.bind(this)
    }

    /**************************************************************************/
    // Got this from stackoverflow, and I like using Vanilla JS for the DOM because it gives me more skills

    componentCleanup() { 
        if (this.props.currentUser) {
            let like;
            if (!this.state.likeId) {
                like = { imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id }
            } else (
                like = { id: this.state.likeId, imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id }
            )

            // debugger
            if (Boolean(this.state.liked && this.props.currentUser && !this.state.likeId)) {
                this.props.createLike(like)
            } else if (Boolean(!this.state.liked && this.props.currentUser && this.state.likeId)) {
                this.props.deleteLike(like)
            }
        }
    }

    componentDidMount() { 
        window.addEventListener('beforeunload', this.componentCleanup);
    }

    componentWillUnmount() { 
        this.componentCleanup();
        window.removeEventListener('beforeunload', this.componentCleanup);
    }

    /**************************************************************************/

    componentDidUpdate(prevProps) { // Mike's help
        if (this.props.liked !== prevProps.liked) { 
            this.setState( { likeId: this.props.existingLikeId, liked: this.props.liked })
        }
    }

    likeOrUnlike(e) {
        if (!this.props.currentUser) { 
            this.props.history.push("/login")
        }
        // debugger
        this.setState({ liked: !this.state.liked })
    }

    render() { 
        // debugger
        return (
            (this.state.liked) 
            ? <div className="like-div" onClick={e => this.likeOrUnlike(e)}> 
                    <div className="like-button"><AiFillStar /></div> 
                <h1 className="like-text">LIKED</h1>
              </div>
            : <div className="like-div" onClick={e => this.likeOrUnlike(e)}>
                <div className="like-button"><AiOutlineStar /></div> 
                <h1 className="like-text">LIKE THIS IMAGINATION</h1>
              </div>
        )
    }
};

export default LikeButton;