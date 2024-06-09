import React from 'react'
import '../Text/Text.css'

 function Text(props){
    return (
      <p className="gen-txt" key={props.index}>{props.info}</p>
    )
  }

  export default Text;