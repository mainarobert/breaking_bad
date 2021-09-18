import React from 'react'
import CharacterItem from './CharacterItem'

const Characters = ({ charactersItems, isLoading }) => {

    return isLoading ? (<h1>Loading...</h1>) : (
        <div className= "cards">
            {charactersItems.map((item) => (
                <CharacterItem key = {item.char_id} item = {item}></CharacterItem>
            ))}
        </div>
    )
    
}

export default Characters
