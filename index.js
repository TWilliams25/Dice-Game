var randomNumber1 = Math.floor((Math.random() * 6) + 1); // Random number 1-6
var randomNumber2 = Math.floor((Math.random() * 6) + 1); // Random number 1-6
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); // Image source changes based on random number
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); // Image source changes based on random number

// If Player 1 Wins...
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
// But if Player 2 wins...
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
// But what if NOBODY wins...
else if (randomNumber1 = randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
