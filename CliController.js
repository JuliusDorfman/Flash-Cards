const inquirer = require("inquirer");
const fs = require("fs");
const cardJS = require("./card.js");
const deckJS = require("./deck.js");

module.exports = cliController = {
    startFlash: function() {
        console.log("\n\nPlease select one of the following Decks: \n\n-------- \nProgramming \nMedia \nPhilosophy \n-------\n\n");
        inquirer.prompt([{
            name: "deckSelect",
            message: "Your Selection: "
        }]).then(function(userChoice) {
            var userChoice = userChoice.deckSelect.toLowerCase();
            switch (userChoice) {
                case "programming":
                    deckJS.printProgrammingDeck();
                    break;

                case "media":
                    deckJS.printMediaDeck();
                    break;

                case "philosophy":
                    deckJS.printPhilosophyDeck();
                    break;

                default:
                    console.log("\n\n**You obviously didn't follow the initial instruction.**");
                    cliController.startFlash();
            }
        })
    },

    cardMovement: function() {
        console.log("-------- \nAnswer \nFlip \nNext \nExit  \n-------\n");
        inquirer.prompt([{
            name: "movement",
            message: "Your Selection: "
        }]).then(function(userChoice) {
            var userChoice = userChoice.movement.toLowerCase();
            const deckJS = require("./deck.js");
            switch (userChoice) {
                case "answer":
                    deckJS.printAnswer();
                    break;

                case "flip":
                    deckJS.flipCard();
                    break;

                case "next":
                    deckJS.nextCard();
                    break;

                case "exit":
                    console.log("Exit");
                    break;

                default:
                    console.log("\n\n**You obviously didn't follow the initial instruction.**");
                    console.log(deckJS.currentDeck[deckModule.cardNum].printQuestionInfo());
                    cliController.cardMovement();
            }
        })
    }
};