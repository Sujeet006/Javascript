const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const guessNumber = document.querySelector('#guessField');
const remainingGuesses = document.querySelector('.lastResult');
const previousGuesses = document.querySelector('.guesses');
const loOrHi = document.querySelector('.loOrHi');
const resultContainer = document.querySelector('.result');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        return true;
    }
    return false;
}

function gameOver() {
    guessNumber.disabled = true;
    submit.disabled = true;
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Start New Game';
    restartButton.classList.add('restartButton');
    resultContainer.appendChild(restartButton);
    restartButton.addEventListener('click', function() {
        location.reload();
    });
}

function checkGuess() {
    const userGuess = parseInt(guessNumber.value);

    if (validateGuess(userGuess)) {
        prevGuesses.push(userGuess);
        if (numGuesses === 1) {
            previousGuesses.textContent = 'Previous Guesses: ';
        }
        previousGuesses.textContent += userGuess + ' ';

        if (userGuess === randomNumber) {
            loOrHi.textContent = 'Congratulations! You guessed the right number!';
            loOrHi.style.color = 'green';
            gameOver();
        } else if (numGuesses === 10) {
            loOrHi.textContent = `Sorry, you lost! The correct number was ${randomNumber}`;
            gameOver();
        } else {
            if (userGuess < randomNumber) {
                loOrHi.textContent = 'Too Low!';
                loOrHi.style.color = 'blue';
            } else if (userGuess > randomNumber) {
                loOrHi.textContent = 'Too High!';
                loOrHi.style.color = 'orange';
            }
        }
        numGuesses++;
        remainingGuesses.textContent = 10 - numGuesses + 1;
    }
    guessNumber.value = '';
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if (playGame) {
        checkGuess();
    }
});
