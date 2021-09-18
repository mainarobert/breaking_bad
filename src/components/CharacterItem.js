import React from 'react'

const CharacterItem = ({ item}) => {
    console.log(item)

    return (
        <div>
            {item.name}
        </div>
    )
}

export default CharacterItem
