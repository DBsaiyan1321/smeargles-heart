import React from "react"; 

class ImaginationShow extends React.Component { 
    componentDidMount() { 
        // debugger
        this.props.fetchImagination(this.props.match.params.imaginationId)
    }

    render() { 
        if (!this.props.imagination) return null 
        // debugger
        return ( 
            (this.props.imagination.image) ? <img src={this.props.imagination.image} alt="broke" /> : <></>
        )
    }
}

export default ImaginationShow;