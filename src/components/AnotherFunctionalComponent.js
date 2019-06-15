import React, {useState, useEffect} from 'react'

const AnotherFunctionalComponent = () => {
  const [pokemonImages, setPokemonImages] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => setPokemonImages(data))
  })

  let images = pokemonImages.map(image => <img src={image.sprites.front}/>)
  return (
    <div>
      {images}
    </div>
  )
}

export default AnotherFunctionalComponent
