
// Individual Card Constructor
var cardModule = {
    Card: function(topic, question, answer) {
        this.topic = topic;
        this.question = question;
        this.answer = answer;
    }
};

cardModule.Card.prototype.printQuestionInfo = function() {
    console.log(this.topic, this.question);
};

cardModule.Card.prototype.printAnswerInfo = function() {
    console.log(this.answer);
};

var Card = cardModule.Card;

var allCards = {
    nodeA: new Card("\nTopic: Programming", "\nQuestion: What run-time environment enables Javascript to be used for server-side scripting? Hint: You're using it now.", "node.js"),
    javascriptA: new Card("\nTopic: Programming", "\nQuestion: All web developers must learn HTML, CSS and ______.", "Javascript"),
    mysqlA: new Card("\nTopic: Programming", "\nQuestion: Which one of these is a an relational database management system (RDBMS)?:mySQL, Javascript, Node.js, Platypus-DB.", "\nmyql"),

    jotaroA: new Card("\nTopic: Media", "\nQuestion: Which JoJo wrote a thesis on a previously undiscovered starfish native to the town of Morioh?", "jotaro"),
    jolyeneA: new Card("\nTopic: Media", "\nQuestion: Which JoJo has served time in prison?", "\njolyne"),
    josephA: new Card("\nTopic: Media", "\nQuestion: Which JoJo has defeated a an ancient Egyptian God?", "joseph"),

    lockeA: new Card("\nTopic: Philosophy", "\nQuestion: Who is considered the Father of Classical Liberalism", "\nJohn Locke"),
    kantA: new Card("\nTopic: Philosophy", "\nQuestion: Who wrote the 'Critique of Pure Reason'?", "\nImannuel Kant"),
    molyneuxA: new Card("\nTopic: Philosophy", "\nQuestion: Who was the founder of 'Freedomain Radio'?", "\nStefan Molyneux")
};

module.exports = {
    cardModule: cardModule,
    allCards: allCards
};

