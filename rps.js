const choices = ["Rock", "Paper", "Scissors"]
const rock = /rock/gi
const paper = /paper/gi
const scissor = /scissors/gi
//const playerSelection = prompt("Enter a word", "Rock")
let computerScore = 0
let playerScore = 0

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)]

const playRound = (playerSelection, computerSelection) =>{
    if(playerSelection.match(rock) && computerSelection === choices[0] 
        || playerSelection.match(paper) && computerSelection === choices[1] 
        || playerSelection.match(scissor) && computerSelection === choices[2]){
        alert("It's draw") 
    } else if(playerSelection.match(rock) && computerSelection === choices[1] 
        || playerSelection.match(paper) && computerSelection === choices[2]
        || playerSelection.match(scissor) && computerSelection === choices[0]){
        computerScore++
        alert("You Lose! " + computerSelection + " beats " + playerSelection)
    } else {
        playerScore++
        alert("You win! " + playerSelection + " beats " + computerSelection)
    }
    //console.log(playerScore, computerScore)
    //if()
}
//console.log(playRound(prompt("Enter a word", "Rock"), getComputerChoice()))

function playGame(){
    playRound(prompt("Enter a word", "Rock"), getComputerChoice())
    playRound(prompt("Enter a word", "Rock"), getComputerChoice())
    playRound(prompt("Enter a word", "Rock"), getComputerChoice())
    playRound(prompt("Enter a word", "Rock"), getComputerChoice())
    playRound(prompt("Enter a word", "Rock"), getComputerChoice())
    
    if(playerScore > computerScore){
        alert("YOU WON")
    } else if(computerScore > playerScore){
        alert("YOU LOSE")
    } else{
        alert("DRAW")
    }

    console.log(playerScore, computerScore)
}

console.log(playGame())