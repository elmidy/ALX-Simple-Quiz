function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector("input[name='quiz']:checked").value;
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").innerText = "Correct! Well done.";
  } else {
    document.getElementById("feedback").innerText =
      "That's incorrect. Try again!";
  }
  document.getElementById("submit-answer").disabled = true;
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
