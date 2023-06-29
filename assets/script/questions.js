
// Quiz questions data
var quizData = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if/ else statement is enclosed within __________.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

// // Function to save the score
// function saveScore(event) {
//     event.preventDefault();
//     var initials = initialsInput.value.trim();
//     if (initials !== '') {
//         var scoreData = {
//             initials: initials,
//             score: score
//         };
//         storedScores.push(scoreData);
//         localStorage.setItem('scores', JSON.stringify(storedScores));
//         window.location.href = 'scores.html';
//     }
// }
