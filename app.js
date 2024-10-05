let randomNumber;
let attempts = 0;

const startButton = document.getElementById("startButton");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const restartButton = document.getElementById("restartButton");
const message = document.getElementById("message");
const gameDiv = document.getElementById("game");

startButton.addEventListener('click', startGame);
guessButton.addEventListener('click', makeGuess);
restartButton.addEventListener('click', startGame);

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "Zgadnij liczbę od 1 do 100!";
    guessInput.value = "";
    gameDiv.style.display = 'block';
    startButton.style.display = 'none';
    restartButton.style.display = 'none';
}

function makeGuess() {

    const userGuess = Number(guessInput.value);
    attempts++;

    if(userGuess < 1 || userGuess > 100) {
        message.textContent = "Proszę wpisać liczbę 1-100";
    } else if (userGuess < randomNumber) {
        message.textContent = "Za mało";

    } else if (userGuess > randomNumber) {
        message.textContent = 'Za dużo';
    } else {
        message.textContent = "Gratulacje";
        guessButton.style.display = 'none';
        restartButton.style.display = 'inline';
    }
}