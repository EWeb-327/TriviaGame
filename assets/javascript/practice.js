var time = 30;
var showQ;
var intervalId;
var trivia = [
    { question: "In S1E1 'Pilot' Who started their first day at Dunder Mifflin Scranton?",
    answers: ["Jim Halpert",
     "Ryan Howard", 
     "Michael Scott", 
     "Erin Hannon"],
    correct: "Ryan Howard"},

    { question: "In S2E12 'The Injury' What is Michael's injury?",
    answers: ["He gets his head stuck in a stair railing", 
     "He crashes his car into a telephone pole", 
     "He's run over by a co-worker", 
     "He burns his foot on a George Foreman Grill"],
    correct: "He burns his foot on a George Foreman Grill"},

    { question: "In S3E4 'Grief Counseling' Whose death is Michael grieving? ",
    answers: ["Michael Jackson's",
     "Ed Truck's",
     "Bob Vance's",
     "Whitney Houston's"],
    correct: "Ed Truck's"},

    { question: "In S3E9 'The Convict' Which of these things does Prison Mike NOT claim to have been busted for?",
    answers: ["I stole",
     "I robbed",
     "I killed Dumbledore",
     "I kidnapped the President's son"],
    correct: "I killed Dumbledore"},

    { question: "In S4E1 'Fun Run' Dwight mercy kills Angela's cat. What is the name of the cat?",
    answers: ["Sprinkles",
     "Bandit",
     "Garbage",
     "Fluffy"],
    correct: "Sprinkles"},

    { question: "In S4E9 'Dinner Party' How many vasectomies does Michael claim to have had?",
    answers: ["One",
     "Two",
     "Three",
     "Four"],
    correct: "Three"},

    { question: "In S5E11 'The Duel' Why is there a new speed radar gun on the pole outside The Office?",
    answers: ["Creed installed it",
     "Angela called 911 too many times complaining about cars driving too fast",
     "It was put up following Michael's accident when he ran over Meredith with his car",
     "No reason, it's just there"],
    correct: "Angela called 911 too many times complaining about cars driving too fast"},
    
    { question: "In S6E11 'Scott's Tots' How many years have passed since Michael promised to pay for the Scott's Tots college educations?",
    answers: ["5",
     "15",
     "10",
     "25"],
    correct: "10"},

    { question: "In S6E16 'The Delivery' What do Jim and Pam name their baby girl?",
    answers: ["Cecelia Marie",
     "Cynthia Janine",
     "Sylvia Meemaw",
     "Sissy Amanda"],
    correct: "Cecelia Marie"},

    { question1: "In S7E16 'Threat Level Midnight' Who is Michael Scarn's late wife?",
    answers: ["Eva Longoria",
     "Pam",
     "Catherine Zeta Jones",
     "Teri Hatcher"],
    correct: "Catherine Zeta Jones"}
]
for (var i=0; i <trivia.length; i++){
    
function reset (){
    $("#timer").text(30)
}
function count(){
    time --;
    $("#timer").text(time)
}
function nextQuestion(){
    alert("The correct answer is " + trivia[i].correct)
    clearInterval(intervalId)
    $("#question-answer").text("")
    reset()
}
function showQuestion(question){
    count()
    $("#question-answer").text(question)
    intervalId = setInterval(count, 1000)
    setTimeout(nextQuestion, 30000)
}
function showAnswers(input){
    for (var i = 0; i < input.length; i++){
        var newDiv = $("<div>");
        var buttons = $("<button>").text(input).attr("data-value", input);
        buttons.addClass("answers")
        $(newDiv).append(buttons)
    }
    $("#question-answer").append(newDiv)
    $("button").on("click", function(){
        if($(this).attr("data-value") == (trivia[i].correct)){
            alert("Hooray!")
            clearInterval(intervalId)
            reset()
        }else {
            alert("The correct answer is " + (trivia[i].correct))
        }
    })
}
showQuestion(trivia[i].question)
showAnswers((trivia[i].answers))

}

// function question1(){
//     showQuestion(trivia.question1)
//     showAnswers(trivia.answers1)
//     $("button").on("click", function(){
//         if($(this).attr("data-value") === trivia.correct1){
//             alert("Hooray!")
//             clearInterval(intervalId)
//             reset()
//             question2() 
//         }else {
//             alert("The correct answer is " + trivia.correct1)
//             question2() 
//         }
//     })
// }
// function question2(){
//     showQuestion(trivia.question2)
//     showAnswers(trivia.answers2)
//     $("button").on("click", function(){
//         if($(this).attr("data-value") === trivia.correct2){
//             alert("Hooray!")
//             clearInterval(intervalId)
//             reset()
//         }else {
//             alert("The correct answer is " + trivia.correct2)
//         }
//     })
// } 
// question1() 

// function startGame(){
//     showQ = setInterval(nextQuestion, 3000)
// }
// function stopGame(){
//     clearInterval(showQ)
// }

// $("#start").click(startGame);
// $("#stop").click(stopGame);

