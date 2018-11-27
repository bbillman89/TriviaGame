/*

Geography Trivia App
Brett Billman November 2018

*/


//Global Variables

const trivia = [
    { //#1
        question: "Iceland is covered in ice",
        answers: {
            a: "True",
            b: "False"
        },
        correctAnswer: "b"
    },
    { //#2
        question: "Which ocean lies on the east coast of the United States?",
        answers: {
            a: "Eastern",
            b: "Atlantic",
            c: "Indian",
            d: "Pacific"
        },
        correctAnswer: "b"
    },
    { //#3
        question: "Which is the world's highest mountain?",
        answers: {
            a: "Mount Everest",
            b: "Makalu",
            c: "Kilimanjaro",
            d: "K2"
        },
        correctAnswer: "a"
    },
    { //#4
        question: "How many Great Lakes are there?",
        answers: {
            a: "Three",
            b: "Five",
            c: "Six"
        },
        correctAnswer: "b"
    },
    { //#5
        question: "Which is the longest river in the U.S.?",
        answers: {
            a: "Colorado River",
            b: "Missouri River",
            c: "Yukon River"
        },
        correctAnswer: "b"
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
let start = false;
let time = 30;
let intervalTime;

$(document).ready(function() {

    trivia.forEach(function (q) {
        currentQuestion = q.question
        console.log(currentQuestion);
        currentAnswers = q.answers
        console.log(currentAnswers);
    });




    $("#start-btn").on("click", function(){

        $("#start-btn").hide();

        $("#display-question").text(currentQuestion);

        $("#display-time").text("Time remaining " + time);

        runTimer();

    });

    // console.log(currentQuestion);

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


});






















