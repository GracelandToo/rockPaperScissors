console.log("Welcome to Rock, Paper, Scissors")
function getComputerChoice(){
    const selector = Math.floor(Math.random() * 3)
    let strSelect
    if (selector === 0){
        strSelect = "rock"
    } else if (selector === 1){
        strSelect = "paper"
    }else if (selector === 2){
        strSelect = "scissors"
    }
    return strSelect
}

function game(playerChoice){
    const computerChoice = getComputerChoice()
    console.log(computerChoice)
    console.log(playerChoice)
    if (computerChoice === playerChoice){
        console.log("Tied!");
        return (0);
    }else if (playerChoice === "rock" && computerChoice === "paper"){
        console.log("lost");
        return(-1);
    }else if (playerChoice === "rock" && computerChoice === "scissors"){
        console.log("won");
        return(1);
    }
}
function updateScore(result, computerDispScore, playerDispScore){
    console.log("inside");
    const computerScore = document.getElementById("computerScore");
    const playerScore = document.getElementById("playerScore");
    const finalScore = document.getElementById("finalScore");
    
    computerScore.innerHTML = computerDispScore;
    playerScore.innerHTML = playerDispScore;
    finalScore.style.backgroundColor = 'blue';
}

function initialize(){
    let result = 0;
    let computerDispScore = 0;
    let playerDispScore = 0;
    const rockButton = document.getElementById("rockButton");
    rockButton.addEventListener("click", function() {
    console.log("The button was clicked!");
    const playerChoice = "rock";
    result = game(playerChoice);
    if (result > 0){
        playerDispScore++;
    } else if (result < 0){
        computerDispScore++;
    }
    console.log(computerDispScore);
    updateScore(result, computerDispScore, playerDispScore);
    })

    const paperButton = document.getElementById("paperButton");
    paperButton.addEventListener("click", function() {
        console.log("The button was clicked!");
        const playerChoice = "paper";
        result = game(playerChoice);
        if (result > 0){
            playerDispScore++;
        } else if (result < 0){
            computerDispScore++;
        }
        console.log(computerDispScore);
        updateScore(result, computerDispScore, playerDispScore);
    })
    
}

