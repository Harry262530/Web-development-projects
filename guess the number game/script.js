"use strict";
let num = Math.trunc(Math.random() * 100) + 1;
let count = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const temp = +document.querySelector(".guess").value;

  if (!temp) {
    document.querySelector(".message").textContent = "Please enter some number";
  } else if (temp === num) {
    document.querySelector(".message").textContent = "Congrats! correct guess";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = temp;
    if (count > highscore) {
      highscore = count;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (temp !== num) {
    if (count > 1) {
      document.querySelector(".message").textContent =
        temp > num ? "Too High!" : "Too Low!";
      count--;
      document.querySelector(".score").textContent = count;
    } else {
      count--;
      document.querySelector(".message").textContent =
        "Ohh!.. You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  count = 20;
  num = Math.trunc(Math.random() * 100) + 1;
  document.querySelector(".message").textContent = "Please enter some number";
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#111210";
  document.querySelector(".number").style.width = "20rem";
  document.querySelector(".number").textContent = "??";
  document.querySelector(".guess").value = "";
});
