const number = Math.floor(Math.random() * 50) + 1;
let chances = 10;
let guessCount = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (!guess) {
    result.innerHTML = "Please enter a number!";
    animateResult(result);
    return;
  }

  guessCount++;

  if (guess === number) {
    result.innerHTML = `Correct! Number was ${number}<br>You guessed it in ${guessCount} attempts.`;
    disableGame();
  }
  else if (guessCount >= chances) {
    result.innerHTML = `Game Over!<br>The number was ${number}`;
    disableGame();
  }
  else if (guess > number) {
    result.innerHTML = `Too high! Chances left: ${chances - guessCount}`;
  }
  else {
    result.innerHTML = `Too low! Chances left: ${chances - guessCount}`;
  }

  animateResult(result);
}

function animateResult(el) {
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = "pop 0.5s ease forwards";
}

function disableGame() {
  document.getElementById("guessInput").disabled = true;
}