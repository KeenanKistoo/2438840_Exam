import React, { useState, useEffect } from 'react';
import Arcade from '../../Images/ArtSect/arcade_screen.png';
import FullHeart from '../../Images/ArtSect/heart_full.png';
import EmptyHeart from '../../Images/ArtSect/heart_empty.png';
import '../Game/Game.css';
import AudioData from '../../Data/Audio';

function Game() {
    // Current state of the game
    const [startGame, setStartGame] = useState(false);

    // Current Live Count
    const [lives, setLives] = useState(3);

    //Timer Counte
    const [timer, SetTimer] = useState(9);

    //Score Count
    const [score, SetScore] = useState(0)

    //Game State
    const [play, setPlay] = useState(true);

    //Prog Bar Width
    const [newWidth, setNewWidth] = useState(100)

    //current song
    const [currentSong, setCurrentSong] = useState(AudioData[0].audio);

    let audioTest = new Audio(currentSong);

    audioTest.play();

    function startTimer(){
        SetTimer(timer - 1);
        setNewWidth(timer/9 * 100)
        
    }

    
    return (
        <section className='arcade-screen'>
            <img className='arcade' src={Arcade} alt="Arcade Machine Background" />
            <section className='lives-sect'>
                <img src={lives >= 1 ? FullHeart : EmptyHeart} alt="Icon To Indicate 3 Lives" className="heart" />
                <img src={lives >= 2 ? FullHeart : EmptyHeart} alt="Icon To Indicate 2 Lives" className="heart" />
                <img src={lives >= 3 ? FullHeart : EmptyHeart} alt="Icon To Indicate 1 Life" className="heart" />
            </section>
            <section className="score-sect">
                <p className="score">{score}</p>
            </section>
            <section className="timer-sect">
                <p className="time-txt">00:0{timer}</p>
            </section>
            <section className="prog-sect">
                <div className="prog-bar" style={{width: `${newWidth}%`, transition: '0.5s ease-out linear'}}>.</div>
            </section>
            <section className="icon-sect">
                <p className={play ? "icon-pause" : "icons"}>{play ? '▐▐ ' : '▶ '}</p>
            </section>
        </section>
    );
}

export default Game;
