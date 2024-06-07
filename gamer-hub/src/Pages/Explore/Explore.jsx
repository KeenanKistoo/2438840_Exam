import React, {useState, useEffect, useRef} from 'react'
import '../Explore/Explore.css'
import Subhead from '../../Components/Subhead/Subhead'
import GenreTab from '../../Components/GenreTab/GenreTab'


 function Explore()  {
  let genres = ['Adventure', 'Card','Fighting','FPS','Platformer','Racing','RPG','Sim','Sports','Strategy']

  const [toggleDrop, setToggleDrop] = useState(false);

  const dropdownRef = useRef(null); 

  const [selectedOption, setSelectedOption] = useState(null);

  function handleToggleDrop(){
    setToggleDrop(!toggleDrop);
  }

  function handleSelectedOption(genre){
    setSelectedOption(genre);
    handleToggleDrop();
  }

  useEffect(()=>{

    function handleOffClick(e){
      if(dropdownRef.current){
        if(!dropdownRef.current.contains(e.target)){
          setToggleDrop(false);
        }
      }
    }

    document.addEventListener('click', handleOffClick)

    return () => {
      document.removeEventListener('click', handleOffClick)
    }
  })
    return (
      <main className="exp-main">
        <section className="intro">
          <Subhead 
          heading={"Explore"}
          />
          <p className="ex-text">
            The objective of this website is to help gamers explore different video games, whether they are within their comfort zone or not. Select a genre you would like to explore and stay up to date with upcoming releases and the most popular games in each genre. </p>

          <p className='ex-text'><span className='note'>PLEASE NOTE:</span> Some genres do not have major eSports competitions, which is why those sections may be excluded for certain genres.</p>
          <p className='ex-text'>
            Enjoy, and happy gaming!
          </p>
          </section>
        <section className="genre-select">
          <section className="dropdown" ref={dropdownRef}>
            <button onClick={() => handleToggleDrop()} className='toggle'>
              <span>{selectedOption === null ? 'Select Genre:' : selectedOption}</span>
              <span className='arrow'>{toggleDrop ? '⬆' : '⬇' }</span>
            </button>
            <section className={`options ${toggleDrop ? '' : 'hidden'}`}>
              {genres.map((genre, index) =>{
                  return(
                  <button className={`option-btn ${selectedOption === genre ? 'active-choice' : ''}`} 
                  onClick={() => handleSelectedOption(genre)} key={index}>{genre}</button>
              )})}
            </section>
          </section>
          <GenreTab/>
        </section>
      </main>
    )
  }

export default Explore;