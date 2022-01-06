const prompt = require("prompt-sync")();

class Level {

    chances = 10;
    word;
    letterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    currentLetter = '';


    constructor (w) {
        this.word = w;
    }

    displayChances(){
        console.log(`You currently have ${this.chances} chances left to guess the word.`)
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
        if (this.word.letters === this.word.dashes) {
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

/* const example = new Level (animals[1]);
example.displayLetterBank();
example.word.displayDashes();
const test = example.promptLetter();
example.promptCheck(test);
console.log(test);
console.log(example.currentLetter);
console.log(example.letterBank); */
