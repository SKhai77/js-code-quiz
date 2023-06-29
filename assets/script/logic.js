// Global variables
var timerElement;
var questionListElement;
var startButton;
var submitButton;
var scoreForm;
var initialsInput;

var timeLeft = 75; // Initial time for the quiz
var timerInterval;
var score = 0;
var currentQuestionIndex = 0;
var isQuizFinished = false;
var storedScores = JSON.parse(localStorage.getItem('scores')) || [];

// Function to start the quiz
function startQuiz() {
    
    // Hide the start button and display the question list
    
  startButton.style.display = 'none';
  questionListElement.style.display = 'block';
 
  var mainContainer = document.getElementById("container");
  mainContainer.style.display = "block";




    // Start the timer
    startTimer();

    // Display the first question
    displayQuestion();
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;

        // Check if time has run out
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

// Function to display a question
function displayQuestion() {
    var currentQuestion = quizData[currentQuestionIndex];
    var listItem = document.createElement('li');
    var questionText = document.createElement('p');
    questionText.textContent = currentQuestion.question;
    listItem.appendChild(questionText);

    var choicesList = document.createElement('ol');
    choicesList.style.listStyle = 'none'; // Set list style to none
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceItem = document.createElement('li');
        var choiceButton = document.createElement('button');
        choiceButton.textContent = (i + 1) + '. ' + currentQuestion.choices[i];
        choiceButton.addEventListener('click', function () {
            checkAnswer(this.textContent.slice(3)); // Remove the order list number from the selected answer
        });
        choiceItem.appendChild(choiceButton);
        choicesList.appendChild(choiceItem);
    }

    listItem.appendChild(choicesList);
    questionListElement.innerHTML = '';
    questionListElement.appendChild(listItem);
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    var currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score += timeLeft;
        showAnswerMessage('Correct answer!');
    } else {
        timeLeft -= 15; // Deduct 15 seconds for a wrong answer
        if (timeLeft < 0) {
            timeLeft = 0; // Ensure the timer does not go
        }
        showAnswerMessage('Wrong answer!');
    }

    // Disable choice buttons during the delay
    disableChoiceButtons();

    // Delay the display of the next question
    setTimeout(function () {
        currentQuestionIndex++;
        if (currentQuestionIndex === quizData.length) {
            finishQuiz();
        } else {
            displayQuestion();
            enableChoiceButtons(); // Enable choice buttons after displaying the next question
        }
    }, 100); // delay
}

// Function to disable choice buttons
function disableChoiceButtons() {
    var choiceButtons = document.querySelectorAll('#question-list button');
    choiceButtons.forEach(function (button) {
        button.disabled = true;
    });
}

// Function to enable choice buttons
function enableChoiceButtons() {
    var choiceButtons = document.querySelectorAll('#question-list button');
    choiceButtons.forEach(function (button) {
        button.disabled = false;
    });
}

// Function to show the answer message
function showAnswerMessage(message) {
    var answerMessage = document.createElement('p');
    answerMessage.textContent = message;
    questionListElement.appendChild(answerMessage);
}

// Function to finish the quiz
function finishQuiz() {
    clearInterval(timerInterval);
    isQuizFinished = true;

    // Hide the question list after a 3-second delay
    setTimeout(function () {
        questionListElement.style.display = 'none';

        // Show the score form and submit button after the question list is hidden
        scoreForm.style.display = 'block';
    }, 100); // delay
}

// Function to save the score
function saveScore(event) {
    event.preventDefault();
    var initials = initialsInput.value.trim();
    if (initials !== '') {
        var scoreData = {
            initials: initials,
            score: score
        };
        storedScores.push(scoreData);
        localStorage.setItem('scores', JSON.stringify(storedScores));
        window.location.href = 'scores.html';
    }
}

// Attach event listeners
window.addEventListener('DOMContentLoaded', function () {
    timerElement = document.getElementById('timer');
    questionListElement = document.getElementById('question-list');
    startButton = document.getElementById('start-btn');
    submitButton = document.getElementById('submit-btn');
    scoreForm = document.getElementById('score-form');
    initialsInput = document.getElementById('initial-input');

    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', saveScore);
});
