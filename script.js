const selection = ["rock", "paper", "scissor"];
let gameRound = 0;
let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;
let gameResult;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissor");

const resultBox = document.querySelector(".results");
const resultInfo = document.createElement("div");
const h1 = document.querySelector("h1");

// computer choose rock, paper, or scissor(selection) randomly and put the result to computerSelection variable.
function computerPlay() {
  computerSelection = selection[Math.floor(Math.random() * selection.length)];
  return computerSelection;
}

// compare the value between computer and player selection and return the result:
function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    gameRound++;
    gameResult = "Tie!";
    h1.style.cssText = "color: gray;";
    return;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissor") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissor" && playerSelection == "paper")
  ) {
    computerScore++;
    gameRound++;
    gameResult = "You lose!";
    h1.style.cssText = "color: red;";
    return;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    playerScore++;
    gameRound++;
    gameResult = "You win!";
    h1.style.cssText = "color: blue;";
    return;
  }
}

rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(computerPlay(), playerSelection);

  if (playerScore == 5 || computerScore == 5) {
    resultInfo.innerHTML = `Game Over! <br /> 
                            Your scores: ${playerScore} <br />
                            Computer scores: ${computerScore}`;
    gameRound = 0;
    playerScore = 0;
    computerScore = 0;
    h1.style.cssText = "color: black;";
  } else {
    resultInfo.innerHTML = `Round: ${gameRound} <br /> You choose ${playerSelection}, Computer choose ${computerSelection} <br /> ${gameResult} <br /> Your scores: ${playerScore} <br /> Computer scores: ${computerScore}`;
  }
  resultBox.appendChild(resultInfo);
});

paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(computerPlay(), playerSelection);

  if (playerScore == 5 || computerScore == 5) {
    resultInfo.innerHTML = `Game Over! <br /> 
                            Your scores: ${playerScore} <br />
                            Computer scores: ${computerScore}`;
    gameRound = 0;
    playerScore = 0;
    computerScore = 0;
    h1.style.cssText = "color: black;";
  } else {
    resultInfo.innerHTML = `Round: ${gameRound} <br /> You choose ${playerSelection}, Computer choose ${computerSelection} <br /> ${gameResult} <br /> Your scores: ${playerScore} <br /> Computer scores: ${computerScore}`;
  }
  resultBox.appendChild(resultInfo);
});

scissorButton.addEventListener("click", () => {
  playerSelection = "scissor";
  playRound(computerPlay(), playerSelection);

  if (playerScore == 5 || computerScore == 5) {
    resultInfo.innerHTML = `Game Over! <br /> 
                            Your scores: ${playerScore} <br />
                            Computer scores: ${computerScore}`;
    gameRound = 0;
    playerScore = 0;
    computerScore = 0;
    h1.style.cssText = "color: black;";
  } else {
    resultInfo.innerHTML = `Round: ${gameRound} <br /> You choose ${playerSelection}, Computer choose ${computerSelection} <br /> ${gameResult} <br /> Your scores: ${playerScore} <br /> Computer scores: ${computerScore}`;
  }
  resultBox.appendChild(resultInfo);
});
