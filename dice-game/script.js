'use strict';

let score0el = document.querySelector('#score--0')
let score1el = document.getElementById('score--1')
let player0 = document.querySelector('.player--0')
let player1 = document.querySelector('.player--1')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const neww = document.querySelector('.btn--new')
const diceel = document.querySelector('.dice')
const curr0 = document.querySelector('#current--0')
const curr1 = document.querySelector('#current--1')
let currrentscore = 0
let activePlayer = 0
let scores = [0, 0]


score0el.textContent = 0
score1el.textContent = 0
// console.log(score0el.textContent, score1el.textContent)

diceel.classList.add("hidden")

roll.addEventListener('click', function () {
  const randomdice = Math.trunc(Math.random() * 6) + 1
  diceel.classList.remove("hidden")
  console.log(randomdice)
  diceel.src = `dice-${randomdice}.png`

  // let active = document.getElementsByName(`player--${activePlayer}`)

  // doubt?????

  if (randomdice !== 1) {
    currrentscore += randomdice
    document.getElementById(`current--${activePlayer}`).textContent = currrentscore
  }

  else {

    document.getElementById(`current--${activePlayer}`).textContent = 0
    currrentscore = 0
    activePlayer = activePlayer === 0 ? 1 : 0

    // why cant we do like this, rendering active palyer by class name and then similarly the way we updataed the current score, befroe chnaging the activestate, remove class active from previous active and then add the class to new active???????

    // active.classList.add('player--active')
    // active.classList.remove('player--active')


    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')

  }
})


hold.addEventListener('click', function () {

})