function getComputerChoice(){
   const randomNum = Math.random()
    if(randomNum < 0.33){
        return "Rock";
    }
    else if(randomNum < 0.66){
        return "Paper";
    }
    else {
        return "Scissors";
    };
};

function getHumanChoice(){
    let repeat = true;
    let choice = "";

    while (repeat){
        choice = prompt("Input your choice:");
        if (choice !== null){

            choice = choice.toLowerCase();
            if (choice === "rock" || choice === "paper" || choice ==="scissors"){
                repeat = false
            }else{
                alert("Error: Invalid choice! Please choose 'rock', 'paper', or 'scissors'.");
            }
        }
        else{alert("Input cancelled. Please refresh to try again.");} 
    }
    
    return choice

};
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}`);
    if ((computerChoice === "rock" && humanChoice === "scissors") || 
       (computerChoice === "paper" && humanChoice === "rock") ||
       (computerChoice === "scissors" && humanChoice === "paper")){
      computerScore++;
        console.log("YOU LOSE");
    }
     else if((humanChoice === "rock" && computerChoice === "scissors") || 
     (humanChoice === "paper" && computerChoice === "rock") ||
     (humanChoice === "scissors" && computerChoice === "paper")){
     humanScore++;
        console.log("YOU WIN");
     }
    else{
        console.log("DRAW");
    };
    console.log(`Current Score -> Human: ${humanScore}, Computer: ${computerScore}`);
}



function playGame(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice().toUpperCase();
    playRound(humanSelection, computerSelection);
};
console.log(`Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("YOU WIN THE GAME!");
} else if (computerScore > humanScore) {
    console.log("YOU LOSE THE GAME!");
} else {
    console.log("THE GAME IS A DRAW!");
}
};
playGame();