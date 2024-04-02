const choices = ["Rock", "Paper", "Scissors"]
const btns = document.querySelectorAll("button")
const result = document.getElementById("result")
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const finalResult = document.getElementById("final-score")
let computerScore = 0
let playerScore = 0

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
            computer.innerHTML = computerScore
            result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection
    } else {
        playerScore++
        player.innerHTML = playerScore
        result.textContent = "You win! " + playerSelection + " beats " + computerSelection
    }
}

function playGame(playerChoice){  
    playRound(playerChoice, getComputerChoice())

    if(playerScore === 5){
        finalResult.textContent = "YOU WIN"
    } else if (computerScore === 5) {
        finalResult.textContent = "YOU LOSE"
    } 

    console.log(playerScore, computerScore)
}

btns.forEach(el => {
    el.addEventListener("click", () =>{
        console.log(el.id)
        playGame(el.id)
     })
})






//console.log(playGame())