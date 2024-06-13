import React, { useState, useEffect, useRef } from 'react';
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

    //Answer For Round
    const [answer, setAnswer] = useState("");

    //Button refernces:
    let button1 = useRef();


    function handleTimer(){
        if(timer > 0){
        setTimer(timer - 1);
    }
    }

    //let timerInt = setInterval(handleTimer, 1000);

    //Random Selection of 5 Songs ***Add this function to the start button.
    function genSongs(){
        let availNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19] //Random Number Array Set ***Does not need to be reset
        let TrackerNum = 7 //Max Question Count
        let copyArray = [...songs]; //Songs array copy due to mutability... I think that's a word... PS: its 01:58... I'm tired
        let trackerUpdate = 0; //Secondary counter

        //Set all selected properties to false. Allows the game to be restarted without refreshing the page.
        for(let i = 0; i < copyArray.length; i++){
            copyArray[i].selected = false;
        }

        //Assigns 7 Random Songs
        while(TrackerNum > 0){
            let ranNum = Math.floor(Math.random () * availNumbers.length)
            copyArray[ranNum].selected = true; //Sets selected song for future usage
            availNumbers.splice(ranNum, 1); //Remove Option From Array
            TrackerNum--;   //Decrements the tracker by 1 to ensure the correct number of questions are available.
                            /* ***Bug 1: Even though this check happens, I sometimes get 1/2 questions less on some occassions */
        }

        //Double check the number of questions. 
        /*  Improvise For Bug 1: Instead of spending time trying to figure out why there is one less questions 2/10 times,
            I created a tracker so that the game can still start if there is not exactly 7 questions. For example, if there
            are only 6 items with selected == true, the game will only ask 6 questions instead of 7. 
        */
        for(let i = 0; i < copyArray.length; i++){
            if(copyArray[i].selected){
                trackerUpdate++;
            }
        }

        //console.log(copyArray);
        setTracker(trackerUpdate); //Update Number of Questions
        setSongs(copyArray); //Update Song List 
        //console.log(tracker);
}

    function setButtonAnswers(){
        let copyArray = [...songs]
        let answer = [];
        console.log("Working")

        for(let i = 0; i < copyArray.length; i++){
            if(copyArray[i].selected && !copyArray[i].used){
                answer = copyArray[i];
                console.log("Answer Caught")
                break;
            }
        }
        console.log(button1)

        
    }

    //***NOTE:comment out this hook
    /* useEffect(() => {
         genSongs();
         //playSongs();
        

         if(timer > 0){
             setNewWidth(timer * 10);
         }else {
             console.log("Interval Cleared")
         }
     },[]);*/ // This line is for testing purposes. The function needs to be called on button click. NOTE:comment out this hook

    
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
                <button ref={button1}className="ans-btn">Colours 1</button>
                <button className="ans-btn">Answer 2</button>
                <button className="ans-btn">Answer 3</button>
                <button className="ans-btn">Answer 4</button>
            </section>
            <section>
                <button onClick={() => genSongs()}>Test</button>
                <button onClick={() => setButtonAnswers()}>Test</button>
            </section>
        </section>
    );
}

export default Game;


/*  STEPS TO CREATE GAME:

    1) Randomise song list to get 7 songs. **Complete
        - Save song list is state[] -> Did not do it in this way. Added selected bool. set the bool to true.
                                    -> Also have a bool if it has already been played.
    
    2) Randomise button answers
        - Assign 1 correct answer + 3 incorrect answers
        - useRef?
    
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