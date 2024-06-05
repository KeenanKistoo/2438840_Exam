import React, { useEffect, useState } from 'react';

import '../Rank/Rank.css';
import Platforms from '../../Data/Platforms';
import Rankings from '../../Data/Rankings';

function Rank() {

  //Controls the ID in this page to avoid using props. 
  const [plat, setPlat] = useState("STEAM");


  function handlePlat(platName) {
    setPlat(platName);
    console.log(currentPlatform.id)
  }

  function handleLink(url){
    window.open(url, '_blank');
  }

  useEffect(() => {
    //console.log('Platform: ' + plat);
  }, [plat]); //Plat dependency to make sure  changes render immediately. This was just a debug check.

  //Check the array for the matching id
  const currentPlatform = Platforms.find(platform => platform.id === plat);
  console.log(currentPlatform.id);

  return (
    <>
      <section className="select-sect">
        <button onClick={() => handlePlat('STEAM')}
         className={currentPlatform && currentPlatform.id === 'STEAM' ? 'active-view' : 'select-btn'}>Steam</button>
        <button onClick={() => handlePlat('XBOX')}
        className={currentPlatform && currentPlatform.id === 'XBOX' ? 'active-view' : 'select-btn'}>Xbox</button>
        <button onClick={() => handlePlat('PS')}
         className={currentPlatform && currentPlatform.id === 'PS' ? 'active-view' : 'select-btn'}>PlayStation</button>
      </section>
      <section className="rank-sect">
        <section>
          <h3 className="subsect-head">
            Top 10 Games on {currentPlatform ? currentPlatform.platName : 'UNKNOWN INPUT'} <span>
              <img 
              src={currentPlatform ? currentPlatform.img : null}
              alt={currentPlatform ? currentPlatform.alt : 'UNKNOWN INPUT'}
              className="logo" />
            </span> Platforms
          </h3>
        </section>
        <section className="rankings-sect">
          { Rankings.map((rankCard, index) => (
            rankCard.platform === currentPlatform.id && (
          <section key={index} className='rank-child'>
            <p className="rank-txt">#0{rankCard.rank}</p>
            <img src={rankCard.img} alt="" className='rank-img'/>
            <button className='plat-name' onClick={() => handleLink(rankCard.url)}>{rankCard.gameName} →</button>
            <p className="price-txt">{rankCard.price}</p>
          </section>
            )))}
        </section>
      </section>
    </>
  );
}

export default Rank;




//Array.find() reference: https://medium.com/@ariefbadal21/learn-reactjs-with-me-array-find-dbbdeafe4633#:~:text=The%20find()%20method%20returns,not%20change%20the%20orginal%20array.