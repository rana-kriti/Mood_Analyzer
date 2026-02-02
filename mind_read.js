function startMindGame() {
  const games = [md1, md2, md3];
  const game = games[Math.floor(Math.random() * games.length)];
  game();
}

function md1() {
  alert("Think a number");
  alert("Multiply it by 2");
  alert("Add 10");
  alert("Divide by 2");
  alert("Subtract the original number");
  alert("Your answer is 5 😎");
}

function md2() {
  alert("Think a number");
  alert("Add 4");
  alert("Multiply by 2");
  alert("Subtract 6");
  alert("Divide by 2");
  alert("Your answer is 3 😎");
}

function md3() {
  alert("Think a number");
  alert("Multiply by 3");
  alert("Add 9");
  alert("Divide by 3");
  alert("Subtract original number");
  alert("Your answer is 3 😎");
}