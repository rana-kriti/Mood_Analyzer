const words = {
  "Door": [
    "I open and close, but I am not alive.",
    "I can be wooden, metal or glass.",
    "You knock on me before entering."
  ],
  "Table": [
    "You eat meals on me.",
    "I have legs but I cannot walk.",
    "I can be round, square or rectangular."
  ],
  "Cloud": [
    "I am made of tiny water droplets.",
    "I can be white, grey, or even dark black.",
    "I travel without legs and cry without eyes."
  ],
  "India": [
    "Has many different languages.",
    "Birthplace of yoga.",
    "A land of ancient traditions and modern tech."
  ],
  "Octopus": [
    "Very smart animal among sea creatures.",
    "An animal which has three hearts.",
    "An animal which looks like it’s wearing a suit of tentacles."
  ]
};

let word = "";
let hints = [];
let hintIndex = 0;

function startGame() {
  const keys = Object.keys(words);
  word = keys[Math.floor(Math.random() * keys.length)];
  hints = words[word];
  hintIndex = 0;

  document.getElementById("hint").textContent = "Hint: " + hints[hintIndex];
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = document.getElementById("guessInput").value.trim();

  if (!guess) return;

  if (guess.toLowerCase() === word.toLowerCase()) {
    document.getElementById("message").textContent =
      "🎉 Correct! You guessed it!";
  } else {
    hintIndex++;
    if (hintIndex < hints.length) {
      document.getElementById("hint").textContent =
        "Hint: " + hints[hintIndex];
      document.getElementById("message").textContent =
        "❌ Wrong! Try next hint.";
    } else {
      document.getElementById("message").textContent =
        `Game Over! Correct word was "${word}"`;
    }
  }

  document.getElementById("guessInput").value = "";
}