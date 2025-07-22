'use strict';
// console.log(document.querySelector('.message').textContent)
function msg(input) {
  document.querySelector('.message').textContent = input
}
let random = Math.trunc(Math.random() * 10) + 1

let score = 10
let highscore = 0



document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    msg("⛔ Input the Number!")
  }
  // else if (guess > 11 && guess < 0) {
  //   document.querySelector('.message').textContent = "‼️Invalid Number! Range is from 1 to 10"
  // }
  else if (guess === random) {
    msg("✅ Correct!  You Won")
    if (score > highscore) {
      highscore = score
    }
    document.querySelector('.number').textContent = random
    document.querySelector('.highscore').textContent = highscore
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
  }


  else if (guess !== random) {
    if (score > 1) {
      msg((guess < random) ? "📉 Low, Try Again!" : "📈 High, Try Again!")
      score--
      document.querySelector('.score').textContent = score
    }
    else {
      document.querySelector('.message').textContent = "😶 You Lost the Game! Play Again!"
      document.querySelector('.score').textContent = 0
      // document.querySelector('.number').textContent = random
      document.querySelector('body').style.backgroundColor = '#b7554cff'
      document.querySelector('.number').style.width = '30rem'


    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  msg("Start guessing...")
  score = 10
  document.querySelector('.score').textContent = score
  random = Math.trunc(Math.random() * 10) + 1
  document.querySelector('.number').textContent = "?"
  document.querySelector('.guess').value = ""

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
}) 