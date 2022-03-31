/*
Ariel Xavier Garcia-Duarte
3/23/2022
JavaScript for Light and Sound Memory Game
*/


// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0;


function startGame(){
    //initialize game variables
    generatePattern();
    progress = 0;
    gamePlaying = true;
    mistakes = 0;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("blink-bg");
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("blink-bg");
    playClueSequence();
}

function stopGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = false;
    clueHoldTime = 1000;
    pattern = [];
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("blink-bg");
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("blink-bg");
}

// Light Up buttons
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// Play a clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

// Play sequence of Clues
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 75;
}

// Generate a pattern
function generatePattern(){
  for(let i=0; i < 8; i++){
    var num = Math.floor(Math.random() * 8) + 1;
    pattern.push(num);
  }
  console.log(pattern);
}

// Handles guesses from the user
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER
        winGame();
      }
      else{
        //Pattern correct. next sequence run ...
        progress++;
        playClueSequence();
      }
    }
    else{
      //continue to next guess
      guessCounter++;
    }
  }
  else{
    //Guess was incorrect
    mistakes += 1;
    if (mistakes < 3){
      mistake();
      clueHoldTime += 75;
      playClueSequence();
    }
    //GAME OVER
    else{
      loseGame();
    }
  }
  
  // add game logic here
}

// mistake
function mistake(){
  var trys = 3 - mistakes;
  alert("You made a mistake. You have " + trys + " try's left!")
}

// User lost Game
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

// User Won Game
function winGame(){
  stopGame();
  alert("Congrats, YOU WON !!");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 534.6,
  6: 602.6,
  7: 670,
  8: 738.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

