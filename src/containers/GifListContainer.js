
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs: []
  }
  //empty array as the initial state
  render() {
    return(
      <div>
        <GifSearch fetchGIFs={this.fetchGIFs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
  //render passes in a function to GiftSearch
  //and passes in the current gifs in the state of this component

  fetchGIFs = (query = "dolphins") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
      .then(res => res.json())
      .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
      })
  }
  //here we have a function that sets the query to a string
  

  componentDidMount() {
    this.fetchGIFs()
  }
}

export default GifListContainer