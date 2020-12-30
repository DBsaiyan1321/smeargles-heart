import React from "react";
import { Link } from "react-router-dom";

const ImaginationIndexItem = ({imagination}) => (
    <li className="imagination-index-item">
        <Link to={`/imaginations/${imagination.id}`}>
            <img src={imagination.image} alt="broke" />
        </Link>
        <div className="hover-overlay">
            <h1 className="index-item-title">{imagination.title}</h1>
            <p className="index-item-username">{imagination.username}</p>
        </div>
    </li>
)


export default ImaginationIndexItem;