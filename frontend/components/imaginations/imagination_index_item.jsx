import React from "react";
import { Link } from "react-router-dom";

const ImaginationIndexItem = props => {
    return (
        <li className="imagination-index-item">

            <Link to={`/imaginations/${props.imagination.id}`}>
                {/* <h1>{props.imagination.title}</h1>
                <p>{props.imagination.description}</p> */}
                <img src={props.imagination.image} alt="broke" />
            </Link>
        </li>
    )
}

export default ImaginationIndexItem;