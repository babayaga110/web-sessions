const displayTurn = document.getElementById("displayTurn");
const player1ScoreBoard = document.getElementById("player1Board");
const player2ScoreBoard = document.getElementById("player2Board");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const button = document.getElementById("button");
const dice1Container = document.getElementById("dice1Container");
const dice2Container = document.getElementById("dice2Container");
const resetButton = document.getElementById("newGame");

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

function rollDice() {
  const random = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    dice1.textContent = random;
    player1Score += random;
    player1ScoreBoard.textContent = player1Score;
    displayTurn.textContent = "Player 2's Turn";
    dice1Container.classList.remove("dice-active");
    dice2Container.classList.add("dice-active");
    player1Turn = false;
  } else {
    dice2.textContent = random;
    player2Score += random;
    player2ScoreBoard.textContent = player2Score;
    displayTurn.textContent = "Player 1's Turn";
    dice2Container.classList.remove("dice-active");
    dice1Container.classList.add("dice-active");
    player1Turn = true;
  }

  if (player1Score >= 20) {
    displayTurn.textContent = "Player 1 Wins!";
    button.style.display = "none";
    resetButton.style.display = "inline-block";
  } else if (player2Score >= 20) {
    displayTurn.textContent = "Player 2 Wins!";
    button.style.display = "none";
    resetButton.style.display = "inline-block";
  }
}
function resetFunction() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  dice2Container.classList.remove("dice-active");
  dice1Container.classList.remove("dice-active");
  player1ScoreBoard.textContent = player1Score;
  player2ScoreBoard.textContent = player2Score;
  dice1.textContent = "-";
  dice2.textContent = "-";
  displayTurn.textContent = "Player 1's Turn";
  button.style.display = "inline-block";
  resetButton.style.display = "none";
}

button.addEventListener("click", rollDice);

resetButton.addEventListener("click", resetFunction);
