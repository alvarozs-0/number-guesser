let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()* 10);

const compareGuesses = (humanGuess,computerGuess,targetNum) =>{
    if(humanGuess < 0 || humanGuess > 9){
        alert("Your guess is out of range");
    }
    const computerDiff = Math.abs(computerGuess-targetNum);
    const humanDiff = Math.abs(humanGuess-targetNum);

    if(computerDiff === humanDiff || (humanDiff < computerDiff) ){
        return true;
    }
    else{
        return false;
    }
}

const updateScore = winner => {
    winner === 'human'? humanScore++ : computerScore++;
}

const advanceRound = () => {
    currentRoundNumber++;
}

console.log(currentRoundNumber);