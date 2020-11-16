import React from "react";
import ImaginationIndexItem from "./imagination_index_item";
import { WaveSpinner } from "react-spinners-kit";

class ImaginationIndex extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = { fetched: false }
    }

    componentDidMount() { 
        window.scrollTo({ top: 0 })
        this.props.fetchImaginations() 
            .then(()=> this.setState({fetched: true}))
    }

    render() {
        if (!this.state.fetched) {
            return (
                <div className="index-spinner-container"> 
                    <WaveSpinner size={40} color="#4D4DFF" loading={true} />
                </div > 
            )
        } else { 
            return ( 
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
}

// Order: constructor, render, componentDidMount

export default ImaginationIndex;