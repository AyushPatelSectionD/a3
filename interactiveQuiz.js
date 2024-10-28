
let score = 0;
const password = "ap123"; 
let currentQuestion = 1;
const totalQuestions = document.querySelectorAll(".question").length;

document.getElementById("login-btn").addEventListener("click", authenticate);
document.getElementById("submit-btn").addEventListener("click", submitQuiz);

function authenticate() {
  const enteredPassword = document.getElementById("password").value;
  const authFeedback = document.getElementById("auth-feedback");
  if (enteredPassword === password) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("quiz-form").style.display = "block";
    updateProgress();
  } else {
    authFeedback.style.display = "block";
  }
}

function updateProgress() {
  document.getElementById("progress").innerText = `Question ${currentQuestion} of ${totalQuestions}`;
}

function submitQuiz() {
  score = 0;
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    const answer = question.querySelector("input[type='radio']:checked");
    if (answer) {
      if (answer.value === "correct") {
        score++;
        answer.parentElement.classList.add("correct");
      } else {
        answer.parentElement.classList.add("incorrect");
      }
    }
  });
  displayResult();
}

function displayResult() {
  document.getElementById("result").innerText = `Your score: ${score}/${totalQuestions}`;
}
