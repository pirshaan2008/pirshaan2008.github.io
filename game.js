function mixUpQuiz() {
  var score = 0;
  const totalQuestions = 5;
  if (prompt("How did Herobrine die?") === "Steve killed him") {
    alert("CORRECT!!!!!");
    score++;
  } else {
    alert("WRONG!!!!!");
  }
  if (prompt("What was pikachu's name when he was young?") === "Pichu") {
    alert("CORRECT!!!!!");
    score++;
  } else {
    alert("WRONG!!!!!");
  }
  if (confirm("Is Deadpool a skeleton or not?")) {
    alert("CORRECT!!!!!");
    score++;
  } else {
    alert("WRONG!!!!!");
  }
  if (prompt("What is Ben 10's strongest alien when he was big?") === "Ultimate Humungosaur") {
    alert("CORRECT!!!!!");
    score++;
  } else {
    alert("WRONG!!!!!");
  }
  if (prompt("What is the fox's name in \"Zootopia\"?") === "Nick wild") {
    alert("CORRECT!!!!!");
    score++;
  } else {
    alert("WRONG!!!!!");
  }
  alert("Your score was: " + score + " out of " + totalQuestions);
}

mixUpQuiz();