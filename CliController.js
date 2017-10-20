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
            switch (userChoice) {
                case "answer":
                deck
                    break;

                case "flip":
                    console.log("Flip");
                    break;

                case "next":
                    console.log("Next");
                    break;

                case "exit":
                    console.log("Exit");
                    break;

                default:
                    console.log("\n\n**You obviously didn't follow the initial instruction.**");
            }
        })
    }
}