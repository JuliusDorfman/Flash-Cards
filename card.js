var Card = function(topic, question, answer, points) {
    this.topic = topic;
    this.question = question;
    this.answer = answer;
    this.points = points;
    this.printQuestionInfo = function() {
        console.log(this.topic + this.question + this.points);
    };
    this.printAnswerInfo = function() {
        console.log(this.answer);
    };
}




var nodeA = new Card("\nProgramming", "\nWhat run-time environment enables Javascript to be used for server-side scripting? Hint: You're using it now.", "Node.js", "\n" + 10)
nodeA.printQuestionInfo()
nodeA.printAnswerInfo()

var javascriptA = new Card("\nProgramming", "\nAll web developers must learn HTML, CSS and ______.", "Javascript", "\n" + 10)
javascriptA.printQuestionInfo();
javascriptA.printAnswerInfo();

var questionC = new Card("\nTopic", "\nQuestion", "\nAnswer", "\n" + 10)
questionC.printQuestionInfo();
questionC.printAnswerInfo();