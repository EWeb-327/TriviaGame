var time = 30;
var timer;
var count = 0;
var score = 0;
var showQ;
var intervalId;
var trivia = [
    { question: "1. In S1E1 'Pilot' Who started their first day at Dunder Mifflin Scranton?",
    answers: ["Jim Halpert",
     "Ryan Howard", 
     "Michael Scott", 
     "Erin Hannon"],
    correct: "Ryan Howard"},

    { question: "2. In S2E12 'The Injury' What is Michael's injury?",
    answers: ["He gets his head stuck in a stair railing", 
     "He crashes his car into a telephone pole", 
     "He's run over by a co-worker", 
     "He burns his foot on a George Foreman Grill"],
    correct: "He burns his foot on a George Foreman Grill"},

    { question: "3. In S3E4 'Grief Counseling' Whose death is Michael grieving? ",
    answers: ["Michael Jackson's",
     "Ed Truck's",
     "Bob Vance's",
     "Whitney Houston's"],
    correct: "Ed Truck's"},

    { question: "4. In S3E9 'The Convict' Which of these things does Prison Mike NOT claim to have been busted for?",
    answers: ["I stole",
     "I robbed",
     "I killed Dumbledore",
     "I kidnapped the President's son"],
    correct: "I killed Dumbledore"},

    { question: "5. In S4E1 'Fun Run' Dwight mercy kills Angela's cat. What is the name of the cat?",
    answers: ["Sprinkles",
     "Bandit",
     "Garbage",
     "Fluffy"],
    correct: "Sprinkles"},

    { question: "6. In S4E9 'Dinner Party' How many vasectomies does Michael claim to have had?",
    answers: ["One",
     "Two",
     "Three",
     "Four"],
    correct: "Three"},

    { question: "7. In S5E11 'The Duel' Why is there a new speed radar gun on the pole outside The Office?",
    answers: ["Creed installed it",
     "Angela called 911 too many times complaining about cars driving too fast",
     "It was put up following Michael's accident when he ran over Meredith with his car",
     "No reason, it's just there"],
    correct: "Angela called 911 too many times complaining about cars driving too fast"},
    
    { question: "8. In S6E11 'Scott's Tots' How many years have passed since Michael promised to pay for the Scott's Tots college educations?",
    answers: ["5",
     "15",
     "10",
     "25"],
    correct: "10"},

    { question: "9. In S6E16 'The Delivery' What do Jim and Pam name their baby girl?",
    answers: ["Cecelia Marie",
     "Cynthia Janine",
     "Sylvia Meemaw",
     "Sissy Amanda"],
    correct: "Cecelia Marie"},

    { question: "10. In S7E16 'Threat Level Midnight' Who is Michael Scarn's late wife?",
    answers: ["Eva Longoria",
     "Pam",
     "Catherine Zeta Jones",
     "Teri Hatcher"],
    correct: "Catherine Zeta Jones"}
]
var correct = ["./assets/images/correct/Ryan1.gif", "./assets/images/correct/Michael1.gif", "./assets/images/correct/Michael1.1.gif", "./assets/images/correct/prison1.gif", "./assets/images/correct/angela1.gif", "./assets/images/correct/dinner1.gif", "./assets/images/correct/creed1.gif", "./assets/images/correct/tots1.gif", "./assets/images/correct/baby1.gif", "./assets/images/correct/midnight1.gif"]
var incorrect = ["./assets/images/incorrect/Ryan2.gif", "./assets/images/incorrect/Michael2.gif", "./assets/images/incorrect/Michael1.2.gif", "./assets/images/incorrect/prison2.gif", "./assets/images/incorrect/angela2.gif", "./assets/images/incorrect/dinner2.gif", "./assets/images/incorrect/creed2.gif", "./assets/images/incorrect/tots2.gif", "./assets/images/incorrect/baby2.gif", "./assets/images/incorrect/midnight2.gif"]

$("#start").click(startGame);

function endGame(){
    $("#question-answer").text("");
    $("#question-answer").text("You scored " + score + "/" + trivia.length + "\n Press start to play again!");
    $("#start").show()
    score = 0
   
}
function stop() {
    clearInterval(timer);
    loadImage('wrong')
    setTimeout(nextQuestion, 4000);
}
function timerCount(){
    time --;
    $("#timer").html(time);

    if (time === 0){
       stop();
    }
}
function displayQuestion(){
    time = 30
    timer = setInterval(timerCount, 1000);

    $("#timer").html(time)
    $("#question-answer").text(trivia[count].question)
    var newDiv = $("<div>");
    for (var i = 0; i < trivia[count].answers.length; i++){
        var buttons = $("<button>").text(trivia[count].answers[i]).attr("data-value", trivia[count].answers[i]);
        buttons.addClass("answers")
    $(newDiv).append(buttons)}
    $("#question-answer").append(newDiv)
    $(".answers").on("click", function(){
        clearInterval(timer);
        if($(this).attr("data-value") == (trivia[count].correct)){
            score++
            loadImage('win')
            setTimeout(nextQuestion, 4000);
        }else {
            loadImage('wrong')
            setTimeout(nextQuestion, 4000);
        }
    })
}
function nextQuestion(){  
    var lastQuestion = (trivia.length -1) === count
    if (lastQuestion) {
       endGame()
    } else {
        count++;
        displayQuestion()
    }
}
function startGame(){
    $("#start").hide()
    displayQuestion()
}
function loadImage(result){
    var rightAnswer = trivia[count].correct;

    if(result === 'win'){
        $("#question-answer").html(`
        <p class="image">Hooray!! That's right, the answer is <b>${rightAnswer}</b></p>
        <img src="${correct[count]}"/>
        `)
    }else {
        $("#question-answer").html(`
        <p class="image">You picked the wrong answer! The answer is <b>${rightAnswer}</b></p>
        <img src="${incorrect[count]}"/>
        `)
    }

}