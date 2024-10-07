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
}
console.log(getComputerChoice());