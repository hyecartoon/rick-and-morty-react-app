import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='item animate-fade'>
            <div className='item-img'>
                <img src={item.image} alt='' />
            </div>
            <div className='item-info'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <strong>Status:</strong> {item.status}
                    </li>
                    <li>
                        <strong>Species:</strong> {item.species}
                    </li>
                    <li>
                        <strong>Last Known Location:</strong> {item.location}
                    </li>
                    <li>
                        <strong>First Seen In:</strong> {item.firstSeenIn}
                    </li>
                </ul>
            </div>
        </div>
    )


}

export default CharacterItem