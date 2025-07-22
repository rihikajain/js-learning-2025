'use strict';
console.log(document.querySelector('.message').textContent)

let random = Math.trunc(Math.random() * 10) + 1

let score = 10
let highscore = 0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess)

  if (!guess) {
    document.querySelector('.message').textContent = "⛔ Input the Number!"
  }
  else if (guess > random) {
    if (score > 0) {
      document.querySelector('.message').textContent = "📈 High, Try Again!"
      score--
      document.querySelector('.score').textContent = score
    }
    else {
      document.querySelector('.message').textContent = "😶 You Lost the Game! Play Again!"
    }
  }

  else if (guess < random && guess > 0) {
    if (score > 0) {
      document.querySelector('.message').textContent = "📉 Low, Try Again!"
      score--
      document.querySelector('.score').textContent = score

    }
    else {
      document.querySelector('.message').textContent = `😶 You Lost the Game! 
      Play Again!`
    }
  }

  else if (guess === random) {
    document.querySelector('.message').textContent = "✅ Correct!"
    if (score > highscore) {
      highscore = score
    }
    document.querySelector('.number').textContent = random
    document.querySelector('.highscore').textContent = highscore
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'

  }
})

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = "Start guessing..."
  score = 10
  document.querySelector('.score').textContent = score
  random = Math.trunc(Math.random() * 10) + 1
  document.querySelector('.number').textContent = "?"
  document.querySelector('.guess').value = ""

  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
}) 