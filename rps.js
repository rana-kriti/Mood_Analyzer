function playGame(userChoice) {
  const items = ["rock", "paper", "scissor"];
  const compChoice = items[Math.floor(Math.random() * items.length)];

  let resultText = `
    User: ${userChoice}<br>
    Computer: ${compChoice}<br>
  `;

  if (userChoice === compChoice) {
    resultText += "Match Tie 😐";
  }
  else if (userChoice === "rock") {
    resultText += compChoice === "paper"
      ? "Paper covers rock: Computer Wins 😢"
      : "Rock smashes scissor: You Win 🎉";
  }
  else if (userChoice === "paper") {
    resultText += compChoice === "rock"
      ? "Paper covers rock: You Win 🎉"
      : "Scissor cuts paper: Computer Wins 😢";
  }
  else {
    resultText += compChoice === "paper"
      ? "Scissor cuts paper: You Win 🎉"
      : "Rock smashes scissor: Computer Wins 😢";
  }

  const resultDiv = document.getElementById("result");
  resultDiv.style.animation = "none";   // reset animation
  resultDiv.offsetHeight;               // reflow
  resultDiv.style.animation = "pop 0.5s ease forwards";
  resultDiv.innerHTML = resultText;
}