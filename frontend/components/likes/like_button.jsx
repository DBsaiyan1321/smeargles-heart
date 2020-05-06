import React from "react"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

class LikeButton extends React.Component {
    constructor(props) { 
        super(props)
        this.state = this.props.localState

        this.likeOrUnlike = this.likeOrUnlike.bind(this)
    }

    // componentDidMount() { 
    //     this.props.fetchLikes(this.props.imagination.id)
    // }

    likeOrUnlike(e) {
        let like; 
        if (!this.state.likeId) { 
            like = { imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id }
        } else ( 
            like = { id: this.state.likeId, imagination_id: this.props.imagination.id, user_id: this.props.currentUser.id  }
        )

        if (this.state.liked && this.props.currentUser) { 
            this.props.deleteLike(like)
        } else if (!this.state.liked && this.props.currentUser) { 
            this.props.createLike(like)
        } else { 
            this.props.history.push("/signup")
        }
        // debugger
        this.setState({ liked: !this.state.liked })
    }

    render() { 
        return (
            (this.state.liked) ? <button onClick={e => this.likeOrUnlike(e)}><AiFillStar /></button> : <button onClick={e => this.likeOrUnlike(e)}><AiOutlineStar /></button>
        )
    }
};

export default LikeButton;