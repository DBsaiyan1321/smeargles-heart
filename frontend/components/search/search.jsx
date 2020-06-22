import React, { useState, useEffect } from "react" 

const Search = props => {
    const [searchInput, setSearchInput] = useState("") 

    // props.search(searchInput)

    

    return (
        <div> 
            <input value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        </div>
    )
}

export default Search 