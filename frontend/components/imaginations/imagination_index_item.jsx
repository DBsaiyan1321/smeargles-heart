import React from "react"; 

const ImaginationIndexItem = props => {
    return (
        <li className="imagination-index-item">
            <div>
                <h1>{props.imagination.title}</h1>
                <p>{props.imagination.description}</p>
            </div>
        </li>
    )
}

export default ImaginationIndexItem;