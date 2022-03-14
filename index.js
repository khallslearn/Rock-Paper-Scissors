var rps = ["ROCK","PAPER","SCISSORS"]

// Change score for me
const me = document.getElementById('me')
let meScore = 0

// Change score for you
const you = document.getElementById('you')
let youScore = 0

// function that selects a random pick
function computerPlay(){
    return rps[Math.floor(Math.random() * rps.length)]
} 


//function plays round of game
function round(playerSelection,computerSelection){
  var playerSelection = computerPlay();
    var computerSelection = computerPlay();
    if (playerSelection ==="ROCK" && computerSelection ==="PAPER") {
        
        you.textContent = "You: " + youScore ++
      }else if(playerSelection ==="ROCK" && computerSelection === "SCISSORS") {
       
        me.textContent= "Me: " + meScore ++
      } else if (playerSelection === computerSelection) {
        alert("Tie")
      }  else if(playerSelection ==="PAPER" && computerSelection === "SCISSORS") {
            
            you.textContent = "You: " + youScore ++
      } else if(playerSelection ==="PAPER" && computerSelection === "ROCK") {
       
        me.textContent= "Me: " + meScore ++
      }else if(playerSelection ==="SCISSORS" && computerSelection === "PAPER") {
           
            me.textContent= "Me: " + meScore ++
      }else if(playerSelection ==="SCISSORS" && computerSelection === "ROCK") {
                
                you.textContent = "You: " + youScore ++
       } else{
          alert("Try Again")
      }
     
    }
   
  //function runs game
   function game(){
    round(playerSelection,computerSelection)
    var playerSelection = computerPlay();
    var computerSelection = computerPlay();
    
};
//Rock Button
const rock = document.getElementById('rock')
rock.addEventListener('click', function game(){
  round(playerSelection,computerSelection)
  var playerSelection = "ROCK";
  var computerSelection = computerPlay();
  if (meScore === 6) {
    alert("you win")
  }else if(youScore === 6){
    alert("computer is winner")
  }
});

// Paper Button
const paper = document.getElementById('paper')
paper.addEventListener('click', function game(){
  round(playerSelection,computerSelection)
  var playerSelection = "PAPER";
  var computerSelection = computerPlay();
  if (meScore === 6) {
    alert("you win")
  }else if(youScore === 6){
    alert("computer is winner")
  }
});

// Scissors Button
const scissors = document.getElementById('scissors')
scissors.addEventListener('click', function game(){
  round(playerSelection,computerSelection)
  var playerSelection = "SCISSORS";
  var computerSelection = computerPlay();
  if (meScore === 6) {
    alert("you win")
  }else if(youScore === 6){
    alert("computer is winner")
  }
});


//stop game

