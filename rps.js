const choices = ["Rock", "Paper", "Scissors"]
const btns = document.querySelectorAll("button")
let computerScore = 0
let playerScore = 0
const result = document.getElementById("result")

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)]

const playRound = (playerSelection, computerSelection) =>{
    if(playerSelection === "rock" && computerSelection === choices[0] 
        || playerSelection === "paper" && computerSelection === choices[1] 
        || playerSelection === "scissors" && computerSelection === choices[2]){
        result.textContent = "It's draw"
    } else if(playerSelection === "rock" && computerSelection === choices[1] 
        || playerSelection === "paper" && computerSelection === choices[2]
        || playerSelection === "scissors" && computerSelection === choices[0]){
        computerScore++
        result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection
    } else {
        playerScore++
        result.textContent = "You win! " + playerSelection + " beats " + computerSelection
    }
}

function playGame(playerChoice){  
    playRound(playerChoice, getComputerChoice())
   
    if(playerScore === 5){
        alert("YOU WIN")
    } else if(computerScore === 5){
        alert("YOU LOSE")
    } else{
        playRound(playerChoice, getComputerChoice())
    }
}

btns.forEach(el => {
    el.addEventListener("click", () =>{
        console.log(el.id)
        playGame(el.id)
     })
})




//console.log(playGame())