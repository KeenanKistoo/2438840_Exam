import React from 'react'
import '../YouTube/YouTube.css'
import YoutubeVideos from '../../Data/YoutubeVideos';

 function YouTube (props){

    const {activeGenre, activeTable} = props;

    return (
      <section className=  {`you-sect-cards ${activeTable ? '' : 'hide'}`}>
        <section className="you-card">
            <h4 className='you-head'>Upcoming Releases:</h4>
            {YoutubeVideos.map((vid, index) => (
                activeGenre && activeGenre.btnTitle === vid.genre && 
        <iframe 
            key={index}
            id={index === 0 ? 'initial' : ''} 
            src={`https://www.youtube.com/embed/${vid.embedId}?si=ooYIJaDHk_EldX2U`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    ))}
        
        </section>
      </section>
    )
  }

  export default YouTube;

  //https://www.youtube.com/watch?v=xNRJwmlRBNU - Link to video to integrate iFrame into react.