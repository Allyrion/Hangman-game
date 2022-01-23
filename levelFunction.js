 
    
const levelFunction = function (w) {
    
    // Requirements

    let sample = require('lodash.sample');
    const category = require('./category');
    const levelObj = require('./levelObj');
    
    //Pick a random word from category
    // const test = sample(category[0]);

    //Set the level object with the given word
    const currentLevel = new levelObj(w);

    //Used to determind result of the level and break loop
    let levelResult = undefined;


    
    do {
        //Display for user
        currentLevel.displayHangman()
        currentLevel.displayChances();
        currentLevel.displayLetterBank();
        currentLevel.word.displayDashes();
        // console.log(currentLevel.word.letters);
        // console.log(currentLevel.word.dashes);

        
        //Check win/loss conditions
        if (currentLevel.checkLoss() === true) {
            levelResult = 0;
            break;
        }

        if (currentLevel.checkWin() === true) {
            levelResult = 1;
            break;
        }

        //Check for letter

        let userLetter = currentLevel.promptLetter();


        //Loop to get a valid letter
        if (currentLevel.promptCheck(userLetter) === false) {

            let check = false
            do {
                console.log('Sorry, what you entered was not found within the Letter Bank. Please try again.');
                userLetter = currentLevel.promptLetter();
                check = currentLevel.promptCheck(userLetter);

            } while (check === false);
        }

        //Valid letter received

         

         //Search word for letter and give response
        const check = currentLevel.word.searchWord(currentLevel.currentLetter);

        if (check === true) {
            console.log('You guessed correctly!')
        } else {
            console.log("Sorry, this isn't in the word.")
            currentLevel.chances -= 1;
        }
        

    } while (levelResult === undefined);


    if (levelResult === 0) {
        console.log("Sorry, you ran out of chances. Hang in there till next time! The correct word was -")
        currentLevel.word.displayWord();
        return false;
    } else if (levelResult === 1) {
        return true;
    }
}

module.exports = levelFunction;

    