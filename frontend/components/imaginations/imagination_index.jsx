import React from "react";
import ImaginationIndexItem from "./imagination_index_item";

class ImaginationIndex extends React.Component { 
    componentDidMount() { 
        this.props.fetchImaginations() // Causes a re-render
    }

    render() { 
        if (!this.props.imaginations) return null // First render

        return ( // 2nd render
            <div className="container"> 
                <ul className="imaginations-index">
                    {this.props.imaginations.map(imagination => {
                        return <ImaginationIndexItem imagination={imagination} key={imagination.id} artist={imagination.username} />
                    })}
                </ul>
            </div>
        )
    }
}

// Order: constructor, render, componentDidMount

export default ImaginationIndex;