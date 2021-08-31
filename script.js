console.log("Hello World!");

//make an array of rock paper and scissor and put them in selection variable
const selection = ["rock", "paper", "scissor"];

//make a number variable called roundNumber with initial value 0
let roundNumber = 0;

//make a number variable called computerScore with initial value 0
let computerScore = 0;

//make a number variable called playerScore with initial value 0
let playerScore = 0;

//make a new variable called computer Selection;
let computerSelection;
let playerSelection;

function playerPlay() {
  playerSelection = window
    .prompt("Choose one: Rock, paper, or scissor?")
    .toLowerCase();

  return playerSelection;
}

//[computerPlay function]:
function computerPlay() {
  //computer choose rock, paper, or scissor(selection) randomly and put the result to computerSelection variable.
  computerSelection = selection[Math.floor(Math.random() * selection.length)];
  //return computerSelection
  return computerSelection;
}

//[playRound function(playerSelection, computerSelection)
function playRound(computerSelection, playerSelection) {
  //compare the value between computer and player selection:
  if (computerSelection == playerSelection) {
    roundNumber++;
    return `ROUND ${roundNumber}!!
You choose ${playerSelection}, Computer choose ${computerSelection}
Tie! Both player choose ${computerSelection}
Your score = ${playerScore} || Computer score = ${computerScore}`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissor") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissor" && playerSelection == "paper")
  ) {
    computerScore++;
    roundNumber++;
    return `ROUND ${roundNumber}!!
You choose ${playerSelection}, Computer choose ${computerSelection}
You lose! ${computerSelection} beat ${playerSelection}
Your score = ${playerScore} || Computer score = ${computerScore}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    playerScore++;
    roundNumber++;
    return `ROUND ${roundNumber}!!
You choose ${playerSelection}, Computer choose ${computerSelection}
You win! ${playerSelection} beat ${computerSelection}
Your score = ${playerScore} || Computer score = ${computerScore}`;
  } else {
    return `Input error: please type either "rock", "paper", or scissor" :)`;
  }
}

window.alert(
  `Hey there! Let's play Rock-Paper-Scissor game with me!\nOpen the console in your browser and type "game()" to start the game!`
);

function game() {
  console.log(playRound(computerPlay(), playerPlay()));
  console.log(playRound(computerPlay(), playerPlay()));
  console.log(playRound(computerPlay(), playerPlay()));
  console.log(playRound(computerPlay(), playerPlay()));
  console.log(playRound(computerPlay(), playerPlay()));
}

//5x playRound
//display the score
