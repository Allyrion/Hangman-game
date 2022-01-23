


const main = (()=> {

    const prompt = require("prompt-sync")();
    let sample = require('lodash.sample');
    const category = require('./category');
    const levelObj = require('./levelObj');
    const levelFunction = require('./levelFunction');

    
    const displayMenu = function () {
    
    console.log(
    `Hello! Welcome to our Hangman game. What would you like to do? 
    1. Play the game
    2. View Instructions
    3. Quit`)
    };

    
    //Loop for the whole game
    do {
        //Game only ends when gameEnd is changed
        gameEnd = false; 

        displayMenu();

        let userSelect = ``;

        // Loop for user to pick a valid menu option
        do {
            const userMenuOption = prompt(`Please enter 1, 2 or 3 based on the menu: `);
            
            if ((userMenuOption === `1`) || (userMenuOption === `2`) || (userMenuOption === `3`)) {
                userSelect = userMenuOption;
            } else {
                console.log("Sorry, please choose option 1, 2 or 3");
                
            }
        } while (userSelect == ``);

        // Immediately ends the game
        if (userSelect === `3`) {
            gameEnd = true;
        }

        if (userSelect === `2`) {
            console.log(`Welcome to Hangman! In this game, you'll be give a word based on the category you pick. 
The word will be hidden and you have to guess what letters are in the word.
If you guess correctly, then the location of the letter(s) will be revealed in the word.

However if you guess incorrectly, then the hangman image will be drawn progressively. 
You have 6 chances to guess the letter incorrectly before the hangman is complete. 
Use your chances wisely.

After picking a category, each word you are given is considered a level.
Correctly completing the word will move you on to the next level.
You will win the game if you complete 5 levels!

For every level, you will be given a letter bank which contains the entire alphabet.
You must choose letters in the the letter bank only.
After choosing a letter, it is removed from the bank and you make not choose it again.
Please make consult the bank when deciding which letter you wish to guess.

Goodluck and have fun!`);
        

            do {

                console.log (`Please choose how to proceed:
    1. Return to Main Menu.
    2. Quit Game.`)

                instructionValidation = false;
                const instructionSelect = prompt(`What would you like to do?: `);

                if (instructionSelect === `2`) {
                    instructionValidation = true;
                    gameEnd = true;
                    break;
                } else if (instructionSelect === `1`) {
                    instructionValidation = true;
                    break;
                } else {
                    console.log(`Please choose between option 1 or 2.`)
                }
            } while (instructionValidation === false);
        }

        if (userSelect == `1`) {

            console.log(
                `Let's get going! What category would you like to choose? 
    1. Animals
    2. Countries
    3. Video Games`);

                let categorySelected;

             do {

                categoryValidation = false;

                const userCategory = prompt(`Please choose 1, 2 or 3: `);

                //This stores the user selected category
                if (userCategory === `1`) {
                    categorySelected = category[0];
                    categoryValidation = true;
                    break;
                } else if (userCategory === `2`) {
                    categorySelected = category[1];
                    categoryValidation = true;
                    break;
                } else if (userCategory === `3`) {
                    categorySelected = category[2];
                    categoryValidation = true;
                    break;
                } else {
                    console.log(`Please type 1, 2 or 3 based on the category you wish to pick.`);
                }

            } while (categoryValidation === false);



            for (let i = 0; i < 5; i++) {

                const randomWord = sample(categorySelected);
                categorySelected = categorySelected.filter(word => word != randomWord);

                levelResult = levelFunction(randomWord);

                //If user loses, they may choose to Return to Main Menu or quit the game.
                if (levelResult === false) {
                    const lossDecision = prompt(`Press 1 to return to Main Menu. Press 2 to Quit.`);

                    do {

                        lossValidation = false;

                        if (lossDecision === `1`) {
                            break;
                        } else if (lossDecision === `2`) {
                            gameEnd = true;
                            break;
                        } else {
                            console.log(`Not a valid entry - Press 1 to return to Main Menu. Press 2 to Quit.`);
                        }
                    } while (lossValidation === false);

                    break;
                }

                //User wins and proceeds to next level

                if (levelResult === true && i !== 4) {
                    console.log("Congratulations! Let's move on to the next level!")
                } 

                //User wins the game, they may choose to Return to Main Menu or quit the game.

                if (levelResult === true && i === 4) {
                    console.log("Congratulations! You won the game! Would you like to play again?");

                    const winDecision = prompt(`Press 1 to return to Main Menu. Press 2 to Quit: `);
                    winValidation = false; 

                    do {
                        winValidation = false; 

                        if (winDecision === `1`) {
                            break;
                        } else if (winDecision === `2`) {
                            gameEnd = true;
                            break;
                        } else {
                            console.log(`Not a valid entry - Press 1 to return to Main Menu. Press 2 to Quit.`);
                        }
                    } while (winValidation === false);

                    break;

                }


            }





        }


    } while (gameEnd === false);

    console.log(`Thank you for participating! Hope you play again soon.`);




})();