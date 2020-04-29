import React from "react";
import ImaginationIndexItem from "./imagination_index_item";

class ImaginationIndex extends React.Component { 
    componentDidMount() { 
        this.props.fetchImaginations()
    }

    render() { 
        return (
            <ul>
                {this.props.imaginations.map(imagination => {
                    return <ImaginationIndexItem imagination={imagination} key={imagination.id} />
                })}
            </ul>
        )
    }
}

export default ImaginationIndex;