import React from "react";
import { Link } from "react-router-dom";

const ImaginationIndexItem = props => {
    // debugger 
    return (
        <li className="imagination-index-item">

            <Link to={`/imaginations/${props.imagination.id}`}>
                <img src={props.imagination.image} alt="broke" />
            </Link>
            <div className="hover-overlay">
                <h1 className="index-item-title">{props.imagination.title}</h1>
                <p className="index-item-username">*Username Here*</p>
                 {/* artist={this.props.users[imagination.artist_id - 1]}  */}
            </div>
        </li>
    )
}

export default ImaginationIndexItem;