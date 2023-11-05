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

function game(){
    const computerChoice = getComputerChoice()
    console.log(computerChoice)
    const playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
    console.log(playerChoice)
    if (computerChoice === playerChoice){
        return ("You tied!")
    }
}
game()