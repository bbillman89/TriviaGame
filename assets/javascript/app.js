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
        answers: {
            a: "Great Australian",
            b: "Arabian",
            c: "Sahara"
        },
        correctAnswer: "c"
    },
]

let currentQuestion = "";
let start = false;

//Loop through trivia object to separate questions and answers. Then store them in new currentQuestion var.
for (let i = 0; i < trivia.length; i++) {
    currentQuestion = trivia[i];
}

//Start Game by clicking button
//$("#startBTN").on("click", function(){
$(document).ready(function(){

    // start = true;

    $("#question").text(currentQuestion.question);
    $("#question").append("<button></button>");

});

console.log(currentQuestion);
console.log(currentQuestion.answers);

