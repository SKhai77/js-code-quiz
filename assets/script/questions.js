

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

var quizIndex = 0;

function loadQuiz() {
    var quizContainer = document.getElementById('container');

    if (quizIndex >= quizData.length) {
        quizContainer.innerHTML = '';
        displayScore();
        return;
    }

    var quizIndex = 0;

    function loadQuiz() {
        var quizContainer = document.getElementById('container');

        // Check if all questions have been answered
        if (quizIndex >= quizData.length) {
            quizContainer.innerHTML = '';
            displayScore();
            return;
        }

        var currentQuestion = quizData[quizIndex];

        // Create and display the question
        var questionElement = document.createElement('h2');
        questionElement.textContent = currentQuestion.question;
        quizContainer.appendChild(questionElement);

        var answerContainer = document.createElement('ol');

        // Iterate through the answers for the current question
        currentQuestion.answer.forEach((answer, _index) => {
            var answerElement = document.createElement('li');
            answerElement.textContent = answer;

            // Event listener for answer selection
            answerElement.addEventListener('click', () => {
                quizIndex++; // Move to the next question
                quizContainer.innerHTML = ''; // Clear the quiz container
                loadQuiz(); // Load the next question
            });

            answerContainer.appendChild(answerElement);
        });

        quizContainer.appendChild(answerContainer);
    }

    function displayScore() {
        var quizContainer = document.getElementById('container');
        var scoreElement = document.createElement('ol');
        var remainingSeconds = Math.max(0, timeLeft); // Ensure score is not negative
        scoreElement.textContent = 'Your score is: ' + remainingSeconds;
        quizContainer.appendChild(scoreElement);
    }
}