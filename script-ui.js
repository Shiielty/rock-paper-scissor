const selection = ["rock", "paper", "scissor"];
let roundNumber = 0;
let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

// computer choose rock, paper, or scissor(selection) randomly and put the result to computerSelection variable.
function computerPlay() {
  computerSelection = selection[Math.floor(Math.random() * selection.length)];
  return computerSelection;
}

// compare the value between computer and player selection and return the result:
function playRound(computerSelection, playerSelection) {
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
    return `Input error: please type either "rock", "paper", or "scissor" :)`;
  }
}

rockButton.addEventListener("click", () => {
  console.log(playRound(computerPlay(), "rock"));
});

paperButton.addEventListener("click", () => {
  console.log(playRound(computerPlay(), "paper"));
});

scissorButton.addEventListener("click", () => {
  console.log(playRound(computerPlay(), "scissor"));
});
