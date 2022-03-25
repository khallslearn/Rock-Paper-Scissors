var rps = ["ROCK","PAPER","SCISSORS"]

// Change score for me
const me = document.getElementById('me')
let meScore = 1

// Change score for you
const you = document.getElementById('you')
let youScore = 1

// function that selects a random pick
function computerPlay(){
    return rps[Math.floor(Math.random() * rps.length)]
} 
function userPlay(){
  return rps[Math.floor(Math.random() * rps.length)]
} 


//function plays round of game
function round(playerSelection,computerSelection){
    var playerSelection = computerPlay();
    var computerSelection = computerPlay();
    if (playerSelection === rps[0] && computerSelection ===rps[1]) {
        
        you.textContent = "You: " + youScore ++
      }else if(playerSelection ===rps[0] && computerSelection === rps[2]) {
       
        me.textContent= "Me: " + meScore ++
      } else if (playerSelection === computerSelection) {
        alert("Tie")
      }  else if(playerSelection ===rps[1] && computerSelection === rps[2]) {
            
            you.textContent = "You: " + youScore ++
      } else if(playerSelection === rps[1] && computerSelection === rps[0]) {
       
        me.textContent= "Me: " + meScore ++
      }else if(playerSelection === rps[2] && computerSelection === rps[1]) {
           
            me.textContent= "Me: " + meScore ++
      }else if(playerSelection === rps[2] && computerSelection === rps[0]) {
                
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
  var playerSelection = rps[0];
  var computerSelection = computerPlay();
  if (meScore === 6) {
    alert("you win")
  }else if(youScore === 6){
    alert("computer is winner")
  }
  console.log(playerSelection,computerSelection)
});

// Paper Button
const paper = document.getElementById('paper')
paper.addEventListener('click', function game(){
  round(playerSelection,computerSelection)
  var playerSelection = rps[1];
  var computerSelection = computerPlay();
  if (meScore === 6) {
    alert("you win")
  }else if(youScore === 6){
    alert("computer is winner")
  }
  console.log(playerSelection,computerSelection);
});

// Scissors Button
const scissors = document.getElementById('scissors')
scissors.addEventListener('click', function game(){
  round(playerSelection,computerSelection)
  var playerSelection = rps[2];
  var computerSelection = computerPlay();
  if (meScore === 6) {
    alert("you win")
  }else if(youScore === 6){
    alert("computer is winner")
  }
  console.log(playerSelection,computerSelection)
});

//Reset Button
function clean(){
  meScore = 0
  me.textContent= "Me: " + meScore
  youScore = 0
  you.textContent = "You: " + youScore 
 
}


//stop game


