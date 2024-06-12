import React, { useState, useEffect } from 'react';
import Arcade from '../../Images/ArtSect/arcade_screen.png';
import FullHeart from '../../Images/ArtSect/heart_full.png';
import EmptyHeart from '../../Images/ArtSect/heart_empty.png';
import '../Game/Game.css';
import AudioData from '../../Data/Audio';


function Game() {

    // Current Live Count
    const [lives, setLives] = useState(3);

    //Timer Counte
    const [timer, setTimer] = useState(9);

    //Score Count
    const [score, SetScore] = useState(0)

    //Game State
    const [play, setPlay] = useState(true);

    //Prog Bar Width
    const [newWidth, setNewWidth] = useState(100)

    //Array of songs
    const [songs, setSongs] = useState(AudioData)

    //Question Tracker
    const [tracker, setTracker] = useState(0);


    function handleTimer(){
        if(timer > 0){
        setTimer(timer - 1);
    }
    }

    //let timerInt = setInterval(handleTimer, 1000);

    //Random Selection of 5 Songs
    function genSongs(){
        let availNumbers = [0,1,2,3,4,5,6,7]
        let tracker = 5;
        let copyArray = [...songs];

        while(tracker > 0){
            let ranNum = Math.floor(Math.random () * availNumbers.length)
            availNumbers.splice(ranNum, 1);
            tracker--;
        }     

        for(let i=0; i < copyArray.length; i++){
            if(i === availNumbers[0] || i === availNumbers[1] || i === availNumbers[2]){
                copyArray[i].selected = false
            }else{
                copyArray[i].selected = true;
            }
        }
        setSongs(copyArray);
        //console.log(songs);
}

    function playSongs(){
        let copyArray = [...songs]
        let TestAudio = new Audio(copyArray[tracker].audio)

        TestAudio.play();
    }
    //***NOTE:comment out this hook
    useEffect(() => {
        genSongs();
        //playSongs();

        if(timer > 0){
            setNewWidth(timer * 10);
        }else {
            console.log("Interval Cleared")
        }
    },[timer]); // This line is for testing purposes. The function needs to be called on button click. NOTE:comment out this hook

    
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
            <section className="answer-sect">
                <button className="ans-btn">Colours 1</button>
                <button className="ans-btn">Answer 2</button>
                <button className="ans-btn">Answer 3</button>
                <button className="ans-btn">Answer 4</button>
            </section>
        </section>
    );
}

export default Game;


/*  STEPS TO CREATE GAME:

    1) Randomise song list to get 7 songs.
        - Save song list is state[]
    
    2) Randomise button answers
        - Assign 1 correct answer + 3 incorrect answers
    
    3) Countdown for song
        - Give user 3 second warning

    4) Play Song
        - Every song is 9 seconds

    5) Answer Time
        - IF user answers while song is playing, stop song and complete answer check
        - IF user does not answer, give 3 seconds after 
    
    6) Check answer
        - Correct: Turn Button Green + Add Points to scoreboard
        - Incorrect: Remove a life

    7)  Life Check
        -If loses a life, is it last life? 
            Yes > End Game
            No > Continue Game
    
    8) Song Count Check
        - Last song?
            Yes > End Game Check
            No > COntinue as usual
*/

/*  Notes:
    Random Number Genrator:
    https://www.w3schools.com/js/js_random.asp
    I used an RNG to select songs. I generate a number between 0,1.
    In C#, the RNG is based on parameters. For example, ranNum = Random.Range(min (inclusive), max(exclusive)).
    However, in JS, it is the number being multiplied. In my code 'ranNum = Math.floor(Math.random() * 2)', the
    2 represents the exclusive number and the range if values. 

    It was actually shocking how much time I wasted on this. Instead of reading the link above properly, 
    I thought I knew better and just wrote 'Math.floor(Math.random(0,2))' and catching an error when 
    my code did not select enough songs.
*/