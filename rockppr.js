// ROCK PAPER SCISSORS
const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const Result = document.getElementById("Result");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "It's a TIE !!!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You WIN !" : " You LOOSE !!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You WIN !" : " You LOOSE !!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You WIN !" : " You LOOSE !!";
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `PLAYER: ${computerChoice}`;
    Result.textContent = result;
}