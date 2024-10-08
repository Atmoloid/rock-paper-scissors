function getComputerChoice(){
   const randomNum = Math.random()
    if(Math.random() < 0.33){
        return "Rock";
    }
    else if(Math.random() < 0.66){
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
}
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice().toUpperCase();



function playGame(){
    playRound(humanSelection, computerSelection);

}