
import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </form>
      </div>
    )
  }

}
//we set a form up, when submitted it will trigger handleSubmit function
//we have a input, with a value set to the current state 
//we also have the onChange event listener that passes 
//an event, and sets the state

// onChange={event => this.setState({query: event.target.value})
export default GifSearch