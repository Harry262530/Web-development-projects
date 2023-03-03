"use strict";
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const opens = document.querySelectorAll(".show-model");

const openmodel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closebutton = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < opens.length; i++) {
  opens[i].addEventListener("click", openmodel);
}

close.addEventListener("click", closebutton);
overlay.addEventListener("click", closebutton);

document.addEventListener("keydown", function (e) {
  console.log("button pressed");
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closebutton();
  }
});
