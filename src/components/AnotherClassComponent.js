import React, {Component} from 'react'

class AnotherClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      pokemonImages: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => {
      this.setState({pokemonImages: data})
    })
  }

  render() {
    let images = this.state.pokemonImages.map(image => <img src={image.sprites.front}/>)
    return (
      <div>
        {images}
      </div>
    )
  }
}

export default AnotherClassComponent
