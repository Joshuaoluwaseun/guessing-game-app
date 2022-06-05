const prompt = require('prompt-sync')({sigint: true});
let point = 0;
let range = 2
let numberToGuess;

numberToGuess = Math.floor(Math.random() * range) + 1;
console.log(numberToGuess, 'numberToGuess');
let foundCorrectNumber = false;

currentNumberNotFound()

while (foundCorrectNumber) {
    range = range + 1;
    numberToGuess = Math.floor(Math.random() * range) + 1;
    console.log(numberToGuess, 'numberToGuess');
    let guess = prompt(`Guess a number from 1 to ${range}: `);
    guess = Number(guess);
    if (guess === numberToGuess) {
        point++
        console.log(`Congrats, you got it!, your point is ${point}`);
        foundCorrectNumber = true;
    } else {
        console.log('Sorry, guess again!');
        foundCorrectNumber = false;
        currentNumberNotFound()
    }
}

function currentNumberNotFound() {
  while (!foundCorrectNumber) {
    let guess = prompt(`Guess a number from 1 to ${range}: `);
    guess = Number(guess);
    if (guess === numberToGuess) {
        point++
        console.log(`Congrats, you got it!, your point is ${point}`);
        foundCorrectNumber = true;
    } else {
        console.log('Sorry, guess again!');
    }
}
}