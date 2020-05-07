import React from "react"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class LikeButton extends React.Component {
    constructor(props) { 
        super(props)
        // debugger
        this.state = { likeId: props.existingLikeId, liked: props.liked } // not this.props because I am in the constructor function

        this.likeOrUnlike = this.likeOrUnlike.bind(this)
    }

    // componentDidMount() { 
    //     this.props.fetchLikes(this.props.imagination.id)
    // }

    componentWillUnmount() { 
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

    componentDidUpdate(prevProps) { 
        if (this.props.liked !== prevProps.liked) { 
            this.setState( { liked: this.props.liked })
        }
    }

    likeOrUnlike(e) { // Right now, this only causes a re-render of the like_container, not the show itself. This is causing a lot of bugs. 

        // let like; 
        // if (!this.state.likeId) { 
        //     like = { imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id }
        // } else ( 
        //     like = { id: this.state.likeId, imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id  }
        // )

        // // debugger

        // if (this.state.liked && this.props.currentUser) { 
        //     this.props.deleteLike(like)
        // } else if (!this.state.liked && this.props.currentUser) { 
        //     this.props.createLike(like)
        // } else { 
        //     this.props.history.push("/signup")
        // }
        if (!this.props.currentUser) { 
            this.props.history.push("/signup")
        }
        // debugger
        this.setState({ liked: !this.state.liked })
    }

    render() { 
        // debugger
        return (
            (this.state.liked) 
            ? <div className="like-div" onClick={e => this.likeOrUnlike(e)}> 
                    <div className="like-button"><AiFillStar /></div> {/* {this.props.likeCount} */}
                <h1 className="like-text">LIKED</h1>
              </div>
            : <div className="like-div" onClick={e => this.likeOrUnlike(e)}>
                <div className="like-button"><AiOutlineStar /></div> 
                <h1 className="like-text">LIKE THIS IMAGINATION</h1>
              </div>
            // null
        )
    }
};

export default LikeButton;