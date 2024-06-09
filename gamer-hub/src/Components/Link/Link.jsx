import React from 'react'
import '../Link/Link.css'


 function Link(props){

    function handleLink(url){
        window.open(url, '_blank');
    }
    
    return (
      <button className='link-btn' onClick={() => handleLink(props.url)}>Link To External Website</button>
    )
  }

  export default Link;