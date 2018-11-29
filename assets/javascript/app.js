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
let selectedAnswer;
let test;
let time = 30;
let intervalTime;
let index = 0;

$(document).ready(function() {

    function displayQuestion() {
        $("#display-question").text(trivia[index].question);
    }
    
    function theAnswerIs() {
        test = trivia[index].correctAnswer;
        console.log(test);
        /*let displayCorrect = $("<h3>");
        displayCorrect.text(test);
        displayCorrect.addClass("correct-answer");
        $("#display-question").append(displayCorrect);*/
    }

    function displayAnswers() {
        
        for (let a = 0; a < trivia[index].answers.length; a++) {
            
            let answerBtn = $("<h3>");
            answerBtn.addClass("answer-button");
            answerBtn.text(trivia[index].answers[a]);
            $("#display-question").append(answerBtn);
            
            $(answerBtn).bind("click",function(){
                selectedAnswer = $(this).html();
                //console.log(selectedAnswer);
                checkAnswer();
                displayQuestion();
                displayAnswers();
                theAnswerIs();
                time = 31;
            });
        }
        
    }



    function checkAnswer () {
       
        if (selectedAnswer === test) {
            $(".correct-answer").css({"background-color": "green", "color": "white"});
            alert("Correct!");
        } else {
            alert("Wrong Ding Dong!");
            $(".answer-button").css({"background-color": "red", "color": "white"});
        }
        if (time === 0) {
            alert("The time has run out!");
        }
        index++;
    }



    //------- Timer Functions Start -------//
    function runTimer() {
        $("#display-time").text("Time remaining " + time);
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
        runTimer();
        displayQuestion();
        displayAnswers();
        theAnswerIs();
    });

});






















