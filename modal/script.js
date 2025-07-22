'use strict';


const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnclose = document.querySelector('.close-modal')
const btnopen = document.querySelectorAll('.show-modal')
console.log(btnopen)

const openmodal = function () {
  console.log("modal opened")
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

for (let i = 0; i < btnopen.length; i++) {
  btnopen[i].addEventListener('click', openmodal);

};
const closemodal = function () {
  console.log("modal closed")
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}
btnclose.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)


const keyy = function (e) {
  console.log("key press", e.code)
  if (e.code === "Escape" && !modal.classList.contains("hidden")) {
    closemodal()

  }
}
document.addEventListener('keydown', keyy)