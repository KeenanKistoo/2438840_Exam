import React from 'react'
import '../GenreTab/GenreTab.css'
import Games from '../../Data/Games'
import RanImg from '../../Images/GameImgs/ageof.png'
import SteamLogo from '../../Images/steam_icon_white.png'
import XboxLogo from '../../Images/xbox_corr.png'
import PSLogo from '../../Images/ps_corr.png'

function GenreTab(props) {
    const {activeGenre, activeTable} = props
    return (
      <section className={`genre-tab ${activeTable ? '' : 'hide'}`}> {/*Hide the box until a genre is selected */}
        <section className="head-sect">
            <h4 className="game-head">
                {activeGenre ? 'Popular ' + activeGenre.btnTitle + ' Games' : 'ERROR, Please Reselect Genre'}
            </h4>
        </section>
        <section className={`game-sect-cards`}>
        {Games.map((card, index) => (
        activeGenre && (activeGenre.btnTitle === card.gen1 || activeGenre.btnTitle === card.gen2 || activeGenre.btnTitle === card.gen3) &&  (
        <section key={index} className="game-card">
            <h5 className="game-card-head">{card.gameName}</h5>
            <img className="game-card-img" src={card.gameImage} alt="" />
            <h5 className="game-card-head">Available On:</h5>
            <section className="comp-logo">
                <img className={`plat-logo ${card.xbox ? '' : 'not'}`} src={XboxLogo} alt="Xbox Logo" />
                <img className={`plat-logo ${card.steam ? '' : 'not'}`}src={SteamLogo} alt="Steam Logo" />
                <img className={`plat-logo ${card.ps ? '' : 'not'}`} src={PSLogo} alt="PlayStation Logo" />
            </section>
        </section>)))}
        </section>
      </section>
    )
  }


export default GenreTab