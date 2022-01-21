const prompt = require("prompt-sync")();
const isEqual = require('lodash.isequal');
const hangmanimage = require('./hangmanImage');


class Level {

    chances = 6;
    word;
    letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    currentLetter = '';
    hangmanImg = [];


    constructor (w) {
        this.word = w;
        this.hangmanImg = hangmanimage;
    }

    displayChances () {
        console.log(`You currently have ${this.chances} chances left to guess the word.`)
    }

    displayLetterBank () {
        console.log (this.letterBank);
    }

    displayHangman () {
        if (this.chances === 0) {
            console.log(this.hangmanImg[6]);
        }

        console.log(this.hangmanImg[(this.hangmanImg.length - 1) - this.chances]);
    }

    promptLetter () {
        const userLetter = prompt('Please choose one of the letters from the letter bank: ');
        return userLetter;
    }

    promptCheck (l) {
        
        for(const i of this.letterBank) {
            if (i === l) {
                this.currentLetter = i;
                this.letterBank = this.letterBank.filter(letter => letter != i)
                return true;
            } 
        }
        return false;
    }

    confirmLetter() {
        if (this.word.searchWord(this.currentLetter) === false) {
            return false;
        } else {

            return true;
        }
    }

    checkWin() {
        if (isEqual(this.word.letters, this.word.dashes) === true) {
            return true;
        }
    }

    checkLoss() {
        if (this.chances < 1) {
            return true;
        }
    }




}

module.exports = Level;



// TESTING logs - 

/*const category = require('./category');
const animals = category[0];
const example = new Level (animals[1]);
example.displayLetterBank();
example.word.displayDashes();
const test = example.promptLetter();
example.promptCheck(test);
console.log(test);
console.log(example.currentLetter);
console.log(example.letterBank);
console.log(example.hangmanImg[1]); */
