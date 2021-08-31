window.alert(
  `Hey there! Let's play Rock-Paper-Scissor game with me!\nOpen the console in your browser to start the game!`
);
console.log(
  `Hey there! Let's play Rock-Paper-Scissor game with me!\nType "game()" in this console and press enter to start the game!`
);

const selection = ["rock", "paper", "scissor"];
let roundNumber = 0;
let computerScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;

function computerPlay() {
  //computer choose rock, paper, or scissor(selection) randomly and put the result to computerSelection variable.
  computerSelection = selection[Math.floor(Math.random() * selection.length)];
  return computerSelection;
}

function playerPlay() {
  //ask the player to choose between rock, paper, or scissor
  playerSelection = window
    .prompt("Choose Rock, Paper, or Scissor!")
    .toLowerCase();
  return playerSelection;
}

function playRound(computerSelection, playerSelection) {
  //compare the value between computer and player selection and return the result:
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

function game() {
  //play 5 round game in the console
  while (roundNumber < 5) {
    console.log(playRound(computerPlay(), playerPlay()));
  }

  //show the final result to the player
  window.alert(
    `Game end! Your scores is:
Win: ${playerScore}
Lose: ${computerScore}
Tie: ${5 - playerScore - computerScore}
Thanks for playing with me! Type "game()" again in the console if you want to do a rematch.`
  );
  playerScore = 0;
  computerScore = 0;
}
