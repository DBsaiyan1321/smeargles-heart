import React from "react";
import ImaginationIndexItem from "./imagination_index_item";

class ImaginationIndex extends React.Component { 
    componentDidMount() { 
        // for(let i = this.props.imaginations.length; i >= 0; i--) { 
        //     this.props.fetchLikes(this.props.imaginations[i])
        // }
        this.props.fetchImaginations() // Causes a re-render
    }

    render() { 
        if (!this.props.imaginations) return null // First render

        return ( // 2nd render
            <div className="container"> 
                <ul className="imaginations-index">
                    {this.props.imaginations.map(imagination => {
                        return <ImaginationIndexItem imagination={imagination} key={imagination.id} />
                    })}
                </ul>
            </div>
        )
    }
}

// Order: constructor, render, componentDidMount

export default ImaginationIndex;