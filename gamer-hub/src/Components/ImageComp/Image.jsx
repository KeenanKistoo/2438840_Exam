import React from 'react'
import '../ImageComp/Image.css'

 function ImageComp(props){
    return (
      <img className="gen-img" src={props.image} alt='Wireframe Images' key={props.key}/>
    )
  }

  export default ImageComp;