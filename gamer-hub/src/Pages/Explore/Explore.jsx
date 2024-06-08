import React, {useState, useEffect, useRef} from 'react'
import '../Explore/Explore.css'
import Subhead from '../../Components/Subhead/Subhead'
import GenreTab from '../../Components/GenreTab/GenreTab'
import GameGenres from '../../Data/GameGenres'


 function Explore()  {
  //List of genres for btns
  let genres = ['Adventure', 'Card','Fighting','FPS','Platformer','Racing','RPG','Sim','Sports','Strategy']

  //Set dropdown active/inactive
  const [toggleDrop, setToggleDrop] = useState(false);

  //Reference the dropdwon
  const dropdownRef = useRef(null); 

  //The option the user clicks***
  const [selectedOption, setSelectedOption] = useState(null);

  //The active genre heading
  const activeGenre = GameGenres.find(genre => genre.btnTitle === selectedOption);

  //Set the table for popular games active or inactive 
  const [activeTable, setActiveTable] = useState(false);

  //Function switches the dropdown visibile or invisible
  function handleToggleDrop(){
    setToggleDrop(!toggleDrop);
  }

  //Function switches the dropdown off and sets the selectedOption state to what the user selects
  function handleSelectedOption(genre){
    setSelectedOption(genre);
    setActiveTable(true);
    handleToggleDrop();
  }

  //Detects if the user clicks away from the dropdown
  useEffect(()=>{

    //function turns the dropdwon off if the user clicks away
    function handleOffClick(e){
      if(dropdownRef.current){
        if(!dropdownRef.current.contains(e.target)){
          setToggleDrop(false);
        }
      }
    }

    //Turns the event listener off to avoid unneccessary clicks or overlapping buttons.
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
          <p className='note'>
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
          <section className="game-sect">
            <Subhead 
            heading={activeGenre ? activeGenre.genreName + ' Games' : ''}
            />
            <p className="ex-text">{activeGenre ? activeGenre.overView : ''}</p>
            <h3 className="mech-head">{activeGenre ? 'Some Core Mechanics:': ''}</h3>
            <p className="ex-text">{activeGenre ? activeGenre.genMech : ''}</p>
          </section>
          <GenreTab 
          activeGenre={activeGenre}
          activeTable={activeTable}
          />
        </section>
      </main>
    )
  }

export default Explore;