import React, { useEffect, useState } from 'react';
import '../Rank/Rank.css';
import Platforms from '../../Data/Platforms';
import Rankings from '../../Data/Rankings';

function Rank() {

  //Controls the ID in this page to avoid using props. 
  const [plat, setPlat] = useState("STEAM");

  function handlePlat(platName) {
    setPlat(platName);
  }

  useEffect(() => {
    //console.log('Platform: ' + plat);
  }, [plat]); //Plat dependency to make sure  changes render immediately. This was just a debug check.

  //Check the array for the matching id
  const currentPlatform = Platforms.find(platform => platform.id === plat);

  return (
    <>
      <section className="select-sect">
        <button onClick={() => handlePlat('STEAM')} className="select-btn">Steam</button>
        <button onClick={() => handlePlat('XBOX')} className="select-btn">Xbox</button>
        <button onClick={() => handlePlat('PS')} className="select-btn">PlayStation</button>
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
          <section className='rank-child'>
          <p className="rank-txt">{Rankings[0].rank}</p>
          <img src={Rankings[0].img} alt="" className='rank-img'/>
          <p className="plat-name">{Rankings[0].gameName}</p>
          <p className="price-txt">{Rankings[0].price}</p>
  
          </section>
        </section>
      </section>
    </>
  );
}

export default Rank;

//Array.find() reference: https://medium.com/@ariefbadal21/learn-reactjs-with-me-array-find-dbbdeafe4633#:~:text=The%20find()%20method%20returns,not%20change%20the%20orginal%20array.