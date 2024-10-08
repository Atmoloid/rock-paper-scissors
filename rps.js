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
