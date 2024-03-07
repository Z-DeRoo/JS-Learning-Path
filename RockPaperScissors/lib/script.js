function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function buttonClicked(buttonNumber) {
    switch (buttonNumber) {
        case 1:
            return "ROCK"
        case 2:
            return "PAPER"
        case 3:
            return "SCISSORS"
    }
}

// const playerSelection = prompt("ROCK PAPER OR SCISSORS")

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert("Tie");
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        alert("Paper beats Rock, you lose!");
    }
    else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        alert("Rock beats Scissors, you win!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        alert("Scissors beats Paper, you win!");
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        alert("Rock beats Scissors, you lose!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "Rock") {
        alert("Paper beats Rock, you win!");
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        alert("Scissors beats Paper, you lose!");
    }

}

// UI
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")

rockBtn.addEventListener("click", () => handleClick("ROCK"))
paperBtn.addEventListener("click", () => handleClick("PAPER"))
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"))


function handleClick(playerSelection) {
    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
}