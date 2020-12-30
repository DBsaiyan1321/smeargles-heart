import React, { useState, useEffect } from "react";
import ImaginationIndexItem from "./imagination_index_item";
import { WaveSpinner } from "react-spinners-kit";

const ImaginationIndex = ({ imaginations, fetchImaginations }) => {
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0 })
        fetchImaginations()
            .then(() => setFetched(true))
    }, []); 
        
    if (!fetched) {
        return (
            <div className="index-spinner-container">
                <WaveSpinner size={40} color="#4D4DFF" loading={true} />
            </div >
        )
    } else {
        return (
            <div className="container">
                <ul className="imaginations-index">
                    {imaginations.map(imagination => {
                        return <ImaginationIndexItem imagination={imagination} key={imagination.id} artist={imagination.username} />
                    })}
                </ul>
            </div>
        )
    }
};

// Order: constructor, render, componentDidMount

export default ImaginationIndex;