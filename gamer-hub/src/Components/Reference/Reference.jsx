import React from 'react'
import '../Reference/Reference.css'

function Reference(props){

    function handleUrl (url){
        window.open(url, '_blank')
    }
    return (
      <button onClick={() => handleUrl(props.url)} className='ref-btn'>{props.info}</button>
    )
  }


export default Reference;
