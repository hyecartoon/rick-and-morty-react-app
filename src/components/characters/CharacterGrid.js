import React from 'react'
import CharacterItem from './CharacterItem'
import rickLoader from '../../img/rickloader.gif'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (<div id='loader'><img src={rickLoader} alt="" /></div>) : (<section className="item-container">
        {items.map(item => (
            <CharacterItem key={item.id} item={item}></CharacterItem>
        ))}
    </section>)
}

export default CharacterGrid