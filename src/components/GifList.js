
import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
    </div>
  )
}
//mapping over props,
//settin up a image element
//we then set the key to the url or the gif.
//then we set the src to the gif url 
//this will display them. 
export default GifList