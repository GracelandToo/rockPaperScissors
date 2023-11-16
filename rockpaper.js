console.log("Welcome to Rock, Paper, Scissors")
let result = 0;
let computerDispScore = 0;
let playerDispScore = 0;

function getComputerChoice(){
    const selector = Math.floor(Math.random() * 3)
    let strSelect
    if (selector === 0){
        strSelect = "rock"
    } else if (selector === 1){
        strSelect = "paper"
    }else if (selector === 2){
        strSelect = "scissor"
    }
    return strSelect
}

function game(playerChoice){
    const computerChoice = getComputerChoice()
    console.log(playerChoice)
    console.log(computerChoice)

    if (computerChoice === playerChoice){
        console.log("Tied!");
        return (0);
    }else if (playerChoice === "rock" && computerChoice === "paper"){
        console.log("lost");
        return(-1);
    }else if (playerChoice === "paper" && computerChoice === "scissor"){
        console.log("loss");
        return(-1);
    }else if (playerChoice === "scissor" && computerChoice === "rock"){
        console.log("loss");
        return(-1);
    }else{
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
    
}

function handleButtonClick(event) {
    const finalScore = document.getElementById("finalScore");
    console.log("The button was clicked!");
    const playerChoice = event.target.value;
    result = game(playerChoice);
    if (result > 0){
        playerDispScore++;
        finalScore.style.backgroundColor = 'green';
        finalScore.innerHTML = "won";
    } else if (result < 0){
        computerDispScore++;
        finalScore.style.backgroundColor = 'red';
        finalScore.innerHTML = "lost";
    } else{
        finalScore.style.backgroundColor = 'yellow';
        finalScore.innerHTML = "tied";
    }
    console.log(computerDispScore);
    updateScore(result, computerDispScore, playerDispScore);
}

function initialize(){
    const rockButton = document.getElementById("rockButton");
    const scissorButton = document.getElementById("scissorButton");
    const paperButton = document.getElementById("paperButton");

    rockButton.addEventListener("click", handleButtonClick)
    scissorButton.addEventListener("click", handleButtonClick)
    paperButton.addEventListener("click", handleButtonClick)

}

