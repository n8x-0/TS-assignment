let max = 10;
let randomNum = Math.floor(Math.random() * max);
let userGuess = false;
let trackGuess = []

let guesses = [4,6,7,9,5];
let ind = 0;
while(ind < guesses.length){
    if(guesses[ind] === randomNum){
        userGuess = true;
        console.log("you guess right it's", randomNum);
        trackGuess.push(userGuess)
        break;
    }else if(guesses[ind] > randomNum){
        userGuess = false;  
        console.log('your guess is too high');
    }else{
        userGuess = false;
        console.log("your guess is too low")
    }
    ind++;
    trackGuess.push(userGuess)
}
if(!userGuess){
    console.log("Game loss");
}
console.log(trackGuess);
