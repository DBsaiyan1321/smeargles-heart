import React from "react";
import ImaginationIndexItem from "./imagination_index_item";
import { CubeSpinner, FireworkSpinner, WaveSpinner } from "react-spinners-kit";

class ImaginationIndex extends React.Component { 
    constructor(props) { 
        super(props)

        this.state = { fetched: false }
    }
    componentDidMount() { 
        this.props.fetchImaginations() // Causes a re-render
            .then(()=> this.setState({fetched: true}))
    }

    render() {
        if (!this.state.fetched) {
            return ( // First render
                <div className="index-spinner-container"> 
                    {/* <CubeSpinner size={40} frontColor="black" backColor="#4D4DFF" loading={true} /> */}
                    {/* <FireworkSpinner size={40} color="#4D4DFF" loading={true} /> */}
                    <WaveSpinner size={40} color="#4D4DFF" loading={true} />
                </div > 
            )
        } else { 
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
}

// Order: constructor, render, componentDidMount

export default ImaginationIndex;