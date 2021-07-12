import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query = "dolphin") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=zfP5x4ooau7rQZ00igbtAl9tCuHhcnu1&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifs: json.data.map(gif => ({url: gif.images.original.url}))
      })
    })
  }

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer