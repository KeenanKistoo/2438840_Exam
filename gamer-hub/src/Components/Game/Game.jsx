import React, { useState, useEffect, useRef } from 'react';
import Arcade from '../../Images/ArtSect/arcade_screen.png';
import FullHeart from '../../Images/ArtSect/heart_full.png';
import EmptyHeart from '../../Images/ArtSect/heart_empty.png';
import '../Game/Game.css';
import AudioData from '../../Data/Audio';
import RandomSongNames from '../../Data/RandomSongNames';


function Game() {

    // Current Live Count
    const [lives, setLives] = useState(3);

    //Timer Counte
    const [timer, setTimer] = useState(3);

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
    const [answer, setAnswer] = useState();

    //Button refernces:
    let button1 = useRef();
    let button2 = useRef();
    let button3 = useRef();
    let button4 = useRef();

    //Answer PlaceHolders
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    //Random songs
    const [randomSongs, setRandomSongs] = useState(RandomSongNames);

    //Ans. Btn State
    const [btnsActive, setBtnsActive] = useState(false);

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
        let copyArray = [...songs] //Copy of Audio.js
        let answer = []; //Empty Array to store the answer
        let answerBtns = [setAnswer1, setAnswer2, setAnswer3, setAnswer4] //Create an array for button states
        //console.log("Working")
        let copyRanSongs = [...randomSongs] //Copy of random songs

        for(let i = 0; i < copyArray.length; i++){
            if(copyArray[i].selected && !copyArray[i].used){
                answer = copyArray[i];
                copyArray[i].used = true; //Set used to true to avoid reusing the same answer
                console.log("Answer Caught")
                setAnswer(answer); //Set the answer for correct/incorrect check
                break;
            }
        }
        
        let ranIndex = Math.floor(Math.random() * 4) //Select a random btn to store answer

        answerBtns[ranIndex](answer.answer); //Display answer
        answerBtns.splice(ranIndex, 1); //Remove answerBtn to avoid reiterating over the same btn
        //console.log(answerBtns)

        for(let j = 0; j < answerBtns.length; j++){
            let ranName = Math.floor(Math.random() * copyRanSongs.length) //Select a random name from the list of fifa song names
            answerBtns[j](copyRanSongs[ranName]); //Assign the song to the state
            copyRanSongs.splice(ranName, 1);    //This line is supposed to ensure no duplication per a question but, it is not working.
                                                //***Fixed: I was splicing using j instead of the index
            //console.log(copyRanSongs);
        }

        setBtnsActive(true);
    }

    function playSong(){
        let aud = new Audio(answer.audio)
        aud.play()
    }
    //https://www.youtube.com/watch?v=4_9yJXO4F2Y
    const [countdown, setCountdown] = useState(9)
    const timerId = useRef();
    const [stateCheck , setStateCheck] = useState(false);
    //***NOTE:comment out this hook
    useEffect(() => {
        timerId.current = setInterval(() => {
            if(countdown > 0){
            setCountdown(prev => prev - 1)
            if(stateCheck){
            setNewWidth(prev => prev - 11)
            }
            }
        }, 1000)
        return () => clearInterval(timerId.current)
     },[]); // This line is for testing purposes. The function needs to be called on button click. NOTE:comment out this hook

     useEffect(() =>{
        if(countdown <= 0){
            clearInterval(timerId.current);
            alert("END")
        }
     }, [countdown])
    
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
            <section className="icon-sect">
                <p className="warn">Test</p>
            </section>
            <section className="timer-sect">
                <p className="time-txt" ref={timerId}>00:0{countdown}</p>
            </section>
            <section className="prog-sect">
                <div className="prog-bar" style={{width: `${newWidth}%`, transition: '0.5s ease-out linear'}}>.</div>
            </section>
            <section className="answer-sect">
                <button ref={button1} className="ans-btn" disabled={btnsActive ? false : true}>{answer1}</button>
                <button ref={button2} className="ans-btn" disabled={btnsActive ? false : true}>{answer2}</button>
                <button ref={button3} className="ans-btn" disabled={btnsActive ? false : true}>{answer3}</button>
                <button ref={button4} className="ans-btn" disabled={btnsActive ? false : true}>{answer4}</button>
            </section>
            <section>
                <button onClick={() => genSongs()}>Test</button>
                <button onClick={() => setButtonAnswers()}>Test</button>
                <button onClick={() => playSong()}>Test</button>
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

    Random Button Answers (setButtonAnswers Function):
    https://www.shecodes.io/athena/3909-removing-an-item-from-an-array-in-javascript#:~:text=You%20can%20remove%20an%20item,be%20removed%20from%20the%20array.&text=var%20arr%20%3D%20%5B%22apple%22,splice(1%2C1)%3B
    There several checks that needed to take place in this function. 


    */