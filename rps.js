const resultDiv = document.getElementById("result");
const humanScoreSpan = document.getElementById("human-score");
const computerScoreSpan = document.getElementById("computer-score");
const buttons = document.querySelectorAll(".button");
humanChoice = buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanSelection = button.id;
        playRound(humanSelection,getComputerChoice());
    });
});
function getComputerChoice(){
   const randomNum = Math.random()
    if(randomNum < 0.33){
        return "rock";
    }
    else if(randomNum < 0.66){
        return "paper";
    }
    else {
        return "scissors";
    };
};
  
function updateResult(result) {
    humanScoreSpan.textContent = result;
    computerScoreSpan.textContent = result;
}
function computerResult(result){
    computerScoreSpan.textContent = result;
}

let  humanScore = 0;
  let  computerScore = 0;
function playRound(humanChoice,computerChoice){
   getComputerChoice();
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
    updateResult(humanScore);
    computerResult(computerScore);
}