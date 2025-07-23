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
let currrentscore, activePlayer, scores, playing

function init() {
  currrentscore = 0
  activePlayer = 0
  scores = [0, 0]
  playing = true

  score0el.textContent = 0
  score1el.textContent = 0

  curr0.textContent = 0
  curr1.textContent = 0

  diceel.classList.add("hidden")
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  document.querySelector(`.player--0`).classList.add('player--active')

}
init()
const switchh = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currrentscore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
}

roll.addEventListener('click', function () {
  if (playing === true) {
    const randomdice = Math.trunc(Math.random() * 6) + 1
    diceel.classList.remove("hidden")
    console.log(randomdice)
    diceel.src = `dice-${randomdice}.png`

    if (randomdice !== 1) {
      currrentscore += randomdice
      document.getElementById(`current--${activePlayer}`).textContent = currrentscore
    }

    else {
      switchh()
      // doubt?????
      // let active = document.getElementsByName(`player--${activePlayer}`)

      // why cant we do like this, rendering active palyer by class name and then similarly the way we updataed the current score, befroe chnaging the activestate, remove class active from previous active and then add the class to new active???????

      // active.classList.add('player--active')
      // active.classList.remove('player--active')

    }
  }
})

hold.addEventListener('click', function () {
  if (playing === true) {

    scores[activePlayer] += currrentscore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    console.log(`Player ${activePlayer} updated score :`, scores[activePlayer])
    if (scores[activePlayer] >= 20) {
      console.log(`Player ${activePlayer} is the winner with a score of`, scores[activePlayer])

      diceel.classList.add("hidden")
      playing = false
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
    else { switchh() }

  }
})

neww.addEventListener('click', init)