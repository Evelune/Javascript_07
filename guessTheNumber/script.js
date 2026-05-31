let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guess");
const submit = document.querySelector("#submit");

const previousGuess = document.querySelector(".previousGuess");
const remainingGuess = document.querySelector("#guessRemaining");
const suggestion = document.querySelector(".loworHig");
const display = document.querySelector(".display");

const para = document.createElement("p");

let pg = [];
let gameActive = true;
let numGuess = 0;

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (!gameActive) return;

  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    displayMessage("Please enter a valid number between 1 and 100");
  } else {
    pg.push(guess);
    numGuess++;
    displayGuess();

    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! Number was ${randomNumber}`);
    endGame();
  } else if (numGuess >= 10) {
    displayMessage(`Game over! Random number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is too low");
  } else {
    displayMessage("Number is too high");
  }
}

function displayGuess() {
  userInput.value = "";
  previousGuess.innerHTML = pg.join(", ");
  remainingGuess.innerHTML = 10 - numGuess;
}

function displayMessage(message) {
  suggestion.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  submit.setAttribute("disabled", "");

  para.classList.add("button");
  para.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
  display.appendChild(para);

  gameActive = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newgame");

  newGameBtn.addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);

    pg = [];
    numGuess = 0;
    gameActive = true;

    previousGuess.innerHTML = "";
    remainingGuess.innerHTML = 10;
    suggestion.innerHTML = "";

    userInput.removeAttribute("disabled");
    submit.removeAttribute("disabled");

    para.remove();
  });
}
