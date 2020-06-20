import React, { useState } from "react" 

const Search = props => {
    const [input, setInput] = useState("")

    return (
        <div> 
            <input value={input} onChange={setInput} />
        </div>
    )
}

export default Search 