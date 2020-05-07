import React from "react";
import ImaginationIndexItem from "./imagination_index_item";

class ImaginationIndex extends React.Component { 
    componentDidMount() { 
        // debugger
        this.props.fetchUsers()
        this.props.fetchImaginations() // Causes a re-render
        // debugger
        // if (this.props.imaginations.length > 0) { 
        //     for(let i = this.props.imaginations.length; i >= 0; i--) { 
        //         this.props.fetchLikes(this.props.imaginations[i].id)
        //     }
        // }   
    }

    render() { 
        if (!this.props.imaginations) return null // First render
        // debugger
        return ( // 2nd render
            <div className="container"> 
                <ul className="imaginations-index">
                    {this.props.imaginations.map(imagination => {
                        return <ImaginationIndexItem imagination={imagination} key={imagination.id}/>
                        // artist = { this.props.users[imagination.artist_id - 1] } 
                        // Really hacky way of getting the artist. Is there any other way?
                    })}
                </ul>
            </div>
        )
    }
}

// Order: constructor, render, componentDidMount

export default ImaginationIndex;