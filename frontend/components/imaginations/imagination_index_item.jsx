import React from "react";
import { Link } from "react-router-dom";

const ImaginationIndexItem = props => {
    return (
        <li className="imagination-index-item">

            <Link to={`/imaginations/${props.imagination.id}`}>
                <img src={props.imagination.image} alt="broke" />
            </Link>
            <div className="hover-overlay">
                <h1>{props.imagination.title}</h1>
            </div>
        </li>
    )
}

export default ImaginationIndexItem;