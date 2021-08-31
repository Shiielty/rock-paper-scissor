console.log("Hello World!");

//make an array of rock paper and scissor and put them in selection variable
const selection = ["rock", "paper", "scissor"];

//make a number variable called roundNumber with initial value 1
let roundNumber = 1;

//make a number variable called computerScore with initial value 0
let computerScore = 0;

//make a number variable called playerScore with initial value 0
let playerScore = 0;

//make a new variable called computer Selection;
let computerSelection;
let playerSelection = window.prompt("Choose one: Rock, paper, or scissor?");

//[computerPlay function]:
function computerPlay() {
  //computer choose rock, paper, or scissor(selection) randomly and put the result to computerSelection variable.
  computerSelection = selection[Math.floor(Math.random() * selection.length)];
  //return computerSelection
  return computerSelection;
}

//[playerPlay function]:
//player asked to input their selection use window prompt
//while the input didn't match with any rock-paper-scissor selection, show "Wrong input, please type either rock, paper or scissor" and ask them again.
//put their selection to the playerSelection variable
//return playerSelection

//game function

//[playRound function(playerSelection, computerSelection)
function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return `Tie! Both player choose ${computerSelection}`;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissor") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissor" && playerSelection == "paper")
  ) {
    return `You lose! ${computerSelection} beat ${playerSelection}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return `You win! ${playerSelection} beat ${computerSelection}`;
  }
}

console.log(playRound(computerPlay(), playerSelection));
//compare the value between computer and player selection:
//If computer win, return "Computer win", add computerScore +1, and roundNumber +1, then show the score and round number
//Else if player win, return "You win" and, add playerScore +1, and roundNumber +1, then show the score and round number
//Else if computer and player tie, return "Tie" and add round # + 1 then show the score and round number
//Else, maybe the player didn't input the right selection, return "Please type either rock, paper, or scissor" and keep the round # as it is.

//5x playRound
//display the score
