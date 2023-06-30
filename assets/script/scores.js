var scoreListElement = document.getElementById('score-list');
var storedScores = JSON.parse(localStorage.getItem('scores')) || [];

// Function to display the scores
function displayScores() {
  scoreListElement.innerHTML = '';

  storedScores.forEach(function (scoreData) {
    var listItem = document.createElement('li');
    listItem.textContent = scoreData.initials + ': ' + scoreData.score;
    scoreListElement.appendChild(listItem);
  });
}

// Function to go back to index.html
function goBack() {
  window.location.href = 'index.html';
}

// Function to reset the scores
function resetScores() {
  // Clear the stored scores in local storage
  localStorage.removeItem('scores');

  // Remove all score entries from the scores table
  var scoreListElement = document.getElementById('score-list');
  scoreListElement.innerHTML = '';
}


// Attach event listener to the go back button
document.getElementById('go-back-btn').addEventListener('click', goBack);

// Attach event listener to the reset score button
document.getElementById('reset-score-btn').addEventListener('click', resetScores);

// Display the score on the scores.html page
displayScores();
