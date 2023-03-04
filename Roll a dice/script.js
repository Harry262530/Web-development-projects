"use strict";
const currentplayer0 = document.querySelector(".player-0");
const currentplayer1 = document.querySelector(".player-1");
const player0element = document.querySelector("#score-0");
const player1element = document.querySelector("#score-1");
const currentscore0 = document.querySelector("#current-0");
const currentscore1 = document.querySelector("#current-1");
const diceel = document.querySelector(".dice");
const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

let scores, currentscore, currentplayer, playing;

const initial = function () {
  currentscore = 0;
  currentplayer = 0;
  scores = [0, 0];
  playing = true;

  player0element.textContent = 0;
  player1element.textContent = 0;
  currentscore0.textContent = 0;
  currentscore1.textContent = 0;

  diceel.classList.add("hidden");
  currentplayer0.classList.remove("player-winner");
  currentplayer1.classList.remove("player-winner");
  currentplayer0.classList.add("player-active");
  currentplayer1.classList.remove("player-active");
};
initial();

const switchPlayer = function () {
  document.getElementById(`current-${currentplayer}`).textContent = 0;
  currentscore = 0;
  currentplayer = currentplayer === 1 ? 0 : 1;
  currentplayer0.classList.toggle("player-active");
  currentplayer1.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dices = Math.trunc(Math.random() * 6) + 1;
    diceel.classList.remove("hidden");
    diceel.src = `dice-${dices}.png`;
    if (dices !== 1) {
      currentscore += dices;
      console.log(currentscore);
      document.getElementById(`current-${currentplayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[currentplayer] += currentscore;
    document.getElementById(`score-${currentplayer}`).textContent =
      scores[currentplayer];
    if (scores[currentplayer] >= 100) {
      playing = false;
      diceel.classList.add("hidden");
      document
        .querySelector(`.player-${currentplayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${currentplayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", initial);
