class Word {

    letters = [];
    dashes = [];


    constructor (l) {
        this.letters = l;
        this.createDashes();
    }

    createDashes() {
        for(let i=0; i<this.letters.length; i++) {
            if (this.letters[i] === " ") {
                this.dashes.push(" ");
            }
            else {
                this.dashes.push("-");
            }
        }
    }

    displayDashes() {
        let displayedDashes = "";

        for(let i=0; i<this.dashes.length; i++) {
            displayedDashes += this.dashes[i];
        }

        console.log(displayedDashes);
    }

    searchWord(letter) {

        let found = false;
        const arr = this.letters;

        for(let i=0; i < arr.length; i++) {
            if (letter === arr[i]) {
                found = true;
                this.dashes[i] = arr[i];
            }
        }

        if (found === true) {
            return true;
        } else {
            return false;
        }
    }

}



module.exports = Word;

/*
 const snakeWord = new Word (["s","n","a","k","e"," ","c","o","b","r","a"]);

console.log(snakeWord.dashes);

snakeWord.displayDashes();

snakeWord.searchWord("a");
snakeWord.displayDashes(); 
console.log(snakeWord.searchWord("a"));
console.log(snakeWord.letters) */
