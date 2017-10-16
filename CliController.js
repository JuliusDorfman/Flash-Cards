inquirer = require("inquirer");


var startFlash = function() {
    inquirer.prompt([{
        name: "deckSelect",
        message: "Please select your topic."
    }]).then(function(answers) {
    	if (answers.deckSelect == "Programming") {
    		console.log('', "test");
    	}
    })
}
startFlash();