const card = require("./card.js");
const controller = require("./cliController.js");
const inquirer = require("inquirer");
// Deck Compiler


module.exports = deckModule = {
    currentDeck: [],
    cardNum: 0,

    printProgrammingDeck: function() {
        console.log("There are 3 Cards in this Deck");
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nTopic: Programming") {
                deckModule.currentDeck.push(card.allCards[i]);
            }
        }
        console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
        controller.cardMovement();
    },

    printMediaDeck: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nTopic: Media") {
                deckModule.currentDeck.push(card.allCards[i]);
            }
        }
        console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
        controller.cardMovement();
    },

    printPhilosophyDeck: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nTopic: Philosophy") {
                deckModule.currentDeck.push(card.allCards[i]);
            }
        }
        console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
        controller.cardMovement();
    },

    printAnswer: function() {
        inquirer.prompt([{
            name: "guess",
            message: "Please Guess: "
        }]).then(function(userChoice) {
            var userChoice = userChoice.guess.toLowerCase();
            if (userChoice == deckModule.currentDeck[deckModule.cardNum].answer.toLowerCase()) {
                console.log("\nCorrect!");
                controller.cardMovement();
            } else {
                console.log("\nIncorrect. Please guess again or 'Flip' to see answer.");
                controller.cardMovement();
            }
        })
    },

    flipCard: function() {
        console.log("\n\nAnswer: ");
        console.log(deckModule.currentDeck[deckModule.cardNum].printAnswerInfo());
        controller.cardMovement();
    },

    nextCard: function() {
        if (deckModule.cardNum < deckModule.currentDeck.length-1) {
            deckModule.cardNum += 1;
            console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
            controller.cardMovement();
        } else {
            console.log("End of Deck");
        }
    },
};