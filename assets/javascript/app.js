/*

Geography Trivia App
Brett Billman November 2018

*/


//Trivia Object
const trivia = [
    { //#1
        question: "Is Iceland covered in ice?",
        answers: [
            "Yes",
            "No"
        ],
        correctAnswer: "No"
    },
    { //#2
        question: "Which ocean lies on the east coast of the United States?",
        answers: [
            "Eastern",
            "Atlantic",
            "Indian",
            "Pacific"
        ],
        correctAnswer: "Atlantic"
    },
    { //#3
        question: "Which is the world's highest mountain?",
        answers: [
            "Mount Everest",
            "Makalu",
            "Kilimanjaro",
            "K2"
        ],
        correctAnswer: "Mount Everest"
    },
    { //#4
        question: "How many Great Lakes are there?",
        answers: [
            "Three",
            "Five",
            "Six"
        ],
        correctAnswer: "Five"
    },
    { //#5
        question: "Which is the longest river in the U.S.?",
        answers: [
            "Colorado River",
            "Missouri River",
            "Yukon River"
        ],
        correctAnswer: "Missouri River"
    },
    { //#6
        question: "The biggest desert in the world is...?",
        answers: [
            "Great Australian",
            "Arabian",
            "Sahara"
        ],
        correctAnswer: "Sahara"
    },
]

//Global Variable
var selectedAnswer;
let time = 30;
let intervalTime;
var index = 0;

$(document).ready(function() {


    function displayQuestion() {

        $("#display-question").text(trivia[0].question);
        
        $().bind("click", function(){
            checkAnswer();
            trivia.question++;
        });
    }


    function displayAnswers() {
        
        for (let a = 0; a < trivia[index].answers.length; a++) {
            
            let answerBtn = $("<h3>");
            answerBtn.addClass("answer-button");
            answerBtn.text(currentAnswers[a]);
            $("#display-question").append(answerBtn);
            
            $(answerBtn).bind("click",function(){
                selectedAnswer = $(this).html();
                console.log(selectedAnswer);
            });
        }
    
    }



    function checkAnswer () {
       
        if (selectedAnswer === theAnswer) {
            displayQuestion();
        }
    }



    //------- Timer Functions Start -------//
    function runTimer() {
        clearInterval(intervalTime);
        intervalTime = setInterval(decrementTime, 1000);
    }

    function decrementTime() {
        time--;
        $("#display-time").text("Time remaining " + time);
        
        if (time === 0) {
            stopTimer();
        }
    }

    function stopTimer () {
        clearInterval(intervalTime);
    }
    //------- Timer Functions End -------//



    //This starts the game
    $("#start-btn").on("click", function(){
        $("#start-btn").hide();
        $("#display-time").text("Time remaining " + time);
        runTimer();
        displayQuestion();
        displayAnswers();
    });

});






















