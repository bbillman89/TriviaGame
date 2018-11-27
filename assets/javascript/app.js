/*

Geography Trivia App
Brett Billman November 2018

*/


//Global Variables

const trivia = [
    { //#1
        question: "Iceland is covered in ice",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: "False"
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

let currentQuestion;
let currentAnswers;
let theAnswer;
//let start = false;
let time = 30;
let intervalTime;

$(document).ready(function() {

    //Breakup the questions and answers
    trivia.forEach(function (q) {
        currentQuestion = q.question
        //console.log(currentQuestion);
        currentAnswers = q.answers
        console.log(currentAnswers);
        theAnswer = q.correctAnswer
        //console.log(theAnswer);
    });



    function displayAnswers() {
        
        for (var a = 0; a < currentAnswers.length; a++) {
            answerBtn = $("<h3>");
            answerBtn.addClass("answer-button");
            answerBtn.text(currentAnswers[a]);
            $("#display-question").append(answerBtn);
        }
    
    }



    $(".answer-button").on("click", function() {
        var selectedAnswer =
        checkAnswer();
    });



    function checkAnswer () {
        if (currentAnswers === theAnswer) {

        }
    }



    //------- Timer Functions Start -------//
    //Sets the pace of the timer. 1 second in this case.
    function runTimer() {
        clearInterval(intervalTime);
        intervalTime = setInterval(decrementTime, 1000);
    }
    //Tells the time variable to decrease and sets the display on the html.
    function decrementTime() {
        time--;
        $("#display-time").text("Time remaining " + time);
        //Stops the timer.
        if (time === 0) {
            stopTimer();
        }
    }
    //Tells the interval to stop.
    function stopTimer () {
        clearInterval(intervalTime);
    }
    //------- Timer Functions End -------//



    //This starts the game
    $("#start-btn").on("click", function(){

        $("#start-btn").hide();

        $("#display-question").text(currentQuestion);

        //console.log(currentQuestion);

        $("#display-time").text("Time remaining " + time);

        runTimer();

        displayAnswers();

    });

});






















