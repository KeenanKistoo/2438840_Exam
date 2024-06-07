import React from 'react'
import '../GenreTab/GenreTab.css'
import Games from '../../Data/Games'
import RanImg from '../../Images/GameImgs/ageof.png'
import SteamLogo from '../../Images/steam_icon_white.png'
import XboxLogo from '../../Images/xbox_corr.png'
import PSLogo from '../../Images/ps_corr.png'

function GenreTab(props) {
    const {activeGenre} = props
    return (
      <section className="genre-tab">
        <section className="head-sect">
            <h4 className="game-head">
                {activeGenre ? 'Popular ' + activeGenre.btnTitle + ' Games' : 'ERROR, Please Reselect Genre'}
            </h4>
        </section>
        <section className="game-sect-cards">
            <section className="game-card">
                <h5 className='game-card-head'>Age Of Empires</h5>
                <img className='game-card-img' src={RanImg} alt="" />
                <h5 className="game-card-head">Available On:</h5>
                <section className="comp-logo">
                    <img className='plat-logo' src={XboxLogo} alt="" />
                    <img className='plat-logo' src={SteamLogo} alt="" />
                    <img className='plat-logo' src={PSLogo} alt="" />
                </section>
            </section>
        </section>
      </section>
    )
  }


export default GenreTab