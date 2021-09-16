import React from 'react'

const Characters = ({ charactersItems, isLoading }) => {

    return isLoading ? (<h1>Loading...</h1>) : (
        <div className= "cards">
            {charactersItems.map((item) => (
                <h1 key={item.char_id}>
                    {item.name}
                </h1>
            ))}
        </div>
    )
    
}

export default Characters
