const animals = require('./category');
const prompt = require("prompt-sync")();

class Level {

    chances = 10;
    word;
    letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    currentLetter = '';

    constructor (w) {
        this.word = w;
    }

    displayLetterBank () {
        console.log (this.letterBank);
    }

    promptLetter () {
        const userLetter = prompt('Please choose one of the letters from the letter bank: ');
        return userLetter;
    }

    promptCheck (l) {
        
        for(const i of this.letterBank) {
            if (l === l) {
                this.currentLetter = l;
                console.log('found');
            } else {
                console.log('not found');
                return false;
            }
        }
    }
}

const example = new Level (animals[1]);
example.displayLetterBank();
example.word.displayDashes();
const test = example.promptLetter();
example.promptCheck(test);
console.log(test);
console.log(example.currentLetter);
