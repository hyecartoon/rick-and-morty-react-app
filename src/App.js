import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import axios from 'axios'
import './App.css'
// a Plumbus will provide you with a lifetime of better living and happiness
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const Characters = 'https://www.rickandmortyapi.com/api/character'
    axios.get(Characters)
      .then(function (response) {
        const episodeId = response.data.results.map(function (completeData) {
          let charData = {
            id: completeData.id,
            name: completeData.name,
            status: completeData.status,
            species: completeData.species,
            location: completeData.location.name,
            image: completeData.image
          }
          axios.get(completeData.episode[0]).then(function (episodeInfo) {
            charData.firstSeenIn = episodeInfo.data.episode
          })
        })
        setItems(Promise.all(episodeId))
        setIsLoading(false)
      })
      .catch(err => {
        console.error(err, err.stack)
      })
  }, [])
  return (
    <div className="container animate-top">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};
export default App;
