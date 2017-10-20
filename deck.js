const card = require("./card.js");
const controller = require("./cliController.js");
// Deck Compiler


module.exports = deckModule = {

    currentDeck: [],
    cardNum: 0,

    printProgrammingDeck: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nTopic: Programming") {
                deckModule.currentDeck.push(card.allCards[i]);
            }
        }
        console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
        controller.cardMovement();
        deckModule.cardNum += 1
    },

    printMediaDeck: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nTopic: Media") {
                deckModule.currentDeck.push(card.allCards[i]);
            }
        }
        console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
        controller.cardMovement();
        deckModule.cardNum += 1
    },

    printPhilosophyDeck: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nTopic: Philosophy") {
                deckModule.currentDeck.push(card.allCards[i]);
            }
        }
        console.log(this.currentDeck[deckModule.cardNum].printQuestionInfo());
        controller.cardMovement();
        deckModule.cardNum += 1
    },

    printProgrammingAnswer: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nProgramming") {
                console.log(card.allCards[i].printAnswerInfo());
            }
        }
    },

    printMediaAnswer: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nMedia") {
                console.log(card.allCards[i].printAnswerInfo());
            }
        }
    },

    printPhilosophyAnswer: function() {
        for (i in card.allCards) {
            if (card.allCards[i].topic == "\nPhilosophy") {
                console.log(card.allCards[i].printAnswerInfo());
            }
        }
    }
};