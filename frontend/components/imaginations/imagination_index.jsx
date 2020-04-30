import React from "react";
import ImaginationIndexItem from "./imagination_index_item";

class ImaginationIndex extends React.Component { 
    componentDidMount() { 
        this.props.fetchImaginations()
    }

    render() { 
        if (!this.props.imaginations) return null 

        return (
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

export default ImaginationIndex;