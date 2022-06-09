
let theNumber = (Math.floor(Math.random() * (100 - 1 + 1) + 1));
console.log(theNumber)
/*Function to get a random number between 1-100 both number included*/

let numberOfGuess = 0;
/*the user can have max 10 guess - this is the variable which gonna count that*/

let guessField = document.querySelector("#guessed")
/*Collect the guessed numbers and make it disabled or enabled the field itself between each game*/

/*Getting the data from the form*/
let right = document.querySelector("#right"); //when guessed right
let wrong = document.querySelector("#wrong"); // when guessed wrong
let low = document.querySelector("#low"); // the guess number is lower
let high = document.querySelector("#high"); // the guess number is higher
let gameOverText = document.querySelector("#gameOver") // gameover text
let prev = document.querySelector(".prev") // show previously guessed nr

let submit = document.querySelector("#submit")
submit.addEventListener("click", guessingGame)
/*get the submit button - by clicking on that the game starts */

function guessingGame() {
    let guessedNumber = parseInt(document.querySelector("#guessed").value); //get the guessed number/value form the user from the input field

    if (guessedNumber === theNumber) { //if the guessed number is the random number - game is over by winning it - gameOverWon function start
        console.log("grat");
        gameOverWon()
        console.log(numberOfGuess)
        return numberOfGuess
    } else if (numberOfGuess === 10) { //if the user couldnt guessed the nr within 10 tries - gameOver function start - this is because of user lost
        gameOver()
    } else { //if none above happened yet - the guessed nr checked against the random nr - greater or less than 
        console.log(numberOfGuess)
        if (guessedNumber > theNumber) { //if the guessed nr greater than the random nr - the wrong, high html class shown, the rest,namely low, is removed.
            console.log("greater")
            prev.innerHTML += guessedNumber + " "
            wrong.classList.add("display")
            high.classList.add("display")
            low.classList.remove("display")
            low.classList.add("hidden")
        } else if (guessedNumber < theNumber) { //if the guessed nr less than the random nr - the wrong, low html class shown, the rest,namely high, is removed.
            console.log("smaller");
            prev.innerHTML += guessedNumber + " "
            wrong.classList.add("display")
            low.classList.add("display")
            high.classList.remove("display")
            high.classList.add("hidden")
        }
        return numberOfGuess++
    }
}

function gameOver() { //when the game is over because of out of guesses
    guessField.disabled = true //input field must be disabled- not able to write in it
    gameOverText.classList.add("display") //some guideline text needs to be hidden and gameover text needs to be shown
    wrong.classList.remove("display")
    wrong.classList.add("hidden")
    low.classList.remove("display")
    low.classList.add("hidden")
    high.classList.remove("display")
    high.classList.add("hidden")
    reset.classList.add("display") // the reset button needs to be displayed
}

function gameOverWon() { // when the game is ove rbecause we won
    guessField.disabled = true //input field must be disabled- not able to write in it
    right.classList.add("display") //some guideline text needs to be hidden and gameover text needs to be shown
    wrong.classList.remove("display")
    wrong.classList.add("hidden")
    low.classList.remove("display")
    low.classList.add("hidden")
    high.classList.remove("display")
    high.classList.add("hidden")
    reset.classList.add("display") // the reset button needs to be displayed
}

let reset = document.querySelector("#reset")
reset.addEventListener("click", resetGame)
// after the gameOver/Won function  - the reset button appaers - by clicking on it we reset the game with resetGame function

function resetGame() { // resetting the game
    theNumber = (Math.floor(Math.random() * (100 - 1 + 1) + 1)); //need new random number
    console.log(theNumber)
    numberOfGuess = 0; // the user guess starts to count from 0 again
    guessField.disabled = false // input field is open to write in it
    prev.innerHTML = "" // the previously guessed nr are cleared
    guessField.value = "" // clear the input field out
    wrong.classList.remove("display") // guidelines texts are hidden
    wrong.classList.add("hidden")
    gameOverText.classList.remove("display")
    gameOverText.classList.add("hidden")
    reset.classList.remove("display")
    reset.classList.add("hidden") // reset button hidden
}

console.log(guessingGame())

