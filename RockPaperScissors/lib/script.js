
let playerScore = 0
let computerScore = 0
let roundWinner = ''

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


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        roundWinner = "tie"
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS")
    ) {
        computerScore++
        roundWinner = "computer"
    }
    if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        playerScore++
        roundWinner = "player"
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// UI
const rockBtn = document.getElementById("rockBtn")
const paperBtn = document.getElementById("paperBtn")
const scissorsBtn = document.getElementById("scissorsBtn")
const playerScorePara = document.getElementById("playerScore")
const computerScorePara = document.getElementById("computerScore")
const scoreInfo = document.getElementById("scoreInfo")
const scoreMessage = document.getElementById("scoreMessage")
const endGameModal = document.getElementById("endGameModal")
const endGameMsg = document.getElementById("endGameMsg")
const overlay = document.getElementById("overlay")
const restartBtn = document.getElementById("restartBtn")
const playerSign = document.getElementById("playerSign")
const computerSign = document.getElementById("computerSign")

rockBtn.addEventListener("click", () => handleClick("ROCK"))
paperBtn.addEventListener("click", () => handleClick("PAPER"))
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"))
overlay.addEventListener("click", closeEndGameModal)
restartBtn.addEventListener("click", restartGame)


function handleClick(playerSelection) {
    if (isGameOver()) {
        openEndGameModal()
        return
    }

    const computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    updateScore()
    updateIcon(playerSelection, computerSelection)

    if (isGameOver()) {
        openEndGameModal()
        setFinalMsg()
    }
}

function updateIcon(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            playerSign.className = "rock"
            break
        case "PAPER":
            playerSign.className = "paper"
            break
        case "SCISSORS":
            playerSign.className = "scissors"
            break
    }

    switch (computerSelection) {
        case "ROCK":
            computerSign.className = "rock"
            break
        case "PAPER":
            computerSign.className = "paper"
            break
        case "SCISSORS":
            computerSign.className = "scissors"
            break
    }
}

function updateScore() {
    if (roundWinner === "tie") {
        scoreInfo.textContent = "Its a Tie."
    }
    else if (roundWinner === "player") {
        scoreInfo.textContent = "You Win!"
    }
    else if (roundWinner === "computer") {
        scoreInfo.textContent = "You Lose."
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'tie') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} ties with ${capitalizeFirstLetter(computerSelection)}`
        return
    }
    else if (roundWinner === "player") {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}`
        return
    }
    else if (roundWinner === "computer") {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} loses to ${capitalizeFirstLetter(computerSelection)}`
        return
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function openEndGameModal() {
    endGameModal.classList.add("active")
    overlay.classList.add("active")
}

function closeEndGameModal() {
    endGameModal.classList.remove("active")
    overlay.classList.remove("active")
}

function setFinalMsg() {
    if (playerScore === 5) {
        endGameMsg.textContent = "You Win!"
    }
    else if (computerScore === 5) {
        endGameMsg.textContent = "You Lose."
    }
}


function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.className = "sign"
    computerSign.className = "sign"
    closeEndGameModal()


}