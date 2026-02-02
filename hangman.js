const words = [
  "UMBRELLA","COMPUTER","TELESCOPE","SMARTPHONE",
  "PHOTOGRAPH","TRIP","MAILMAN","MUSIC","CROWD","LIFE"
];

let word = "";
let guessedWord = "";
let chances = 7;

function startGame() {
  word = words[Math.floor(Math.random() * words.length)];
  guessedWord = "-".repeat(word.length);
  chances = 7;

  document.getElementById("wordDisplay").textContent = guessedWord;
  document.getElementById("chances").textContent = "Chances Left: " + chances;
  document.getElementById("message").textContent = "";
  document.getElementById("letterInput").value = "";
}

function guessLetter() {
  const input = document.getElementById("letterInput");
  const letter = input.value.toUpperCase();
  input.value = "";

  if (!letter) return;

  if (word.includes(letter)) {
    let updated = guessedWord.split("");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        updated[i] = letter;
      }
    }
    guessedWord = updated.join("");
    document.getElementById("wordDisplay").textContent = guessedWord;

    if (guessedWord === word) {
      document.getElementById("message").textContent =
        "🎉 Congratulations! You won!";
    }
  } else {
    chances--;
    document.getElementById("chances").textContent =
      "Chances Left: " + chances;
    document.getElementById("message").textContent =
      "❌ Incorrect guess";

    if (chances === 0) {
      document.getElementById("message").textContent =
        "💀 Game Over! Word was " + word;
    }
  }
}

startGame();