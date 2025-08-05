const game = {
  team1: 'riks',
  team2: 'jains',
  players: [
    ['a', 'b', 'c', 'd'],
    ['e', 'f', 'g', 'h']],
  score: '4:0',
  scored: ['a', 'e', 'h', 'd'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};

// 1
for (let player of game.scored.entries()) {
  console.log(`Goal ${player[0] + 1} : ${player[1]}`)
}

// 2
let avg = 0
let num = Object.values(game.odds).length
for (let odd of Object.values(game.odds)) {
  avg += odd;
}
console.log(avg / num)


// 3
for (let [key, val] of Object.entries(game.odds)) {
  const team = key === 'x' ? `draw` : `victory ${game[key]} `
  console.log(`Odd of ${team}  : ${val}`)
}


// 4
let scorers = {}
for (let [prop, val] of game.scored.entries()) {
  console.log(`scorers[val] = prop + 1`)
}
console.log(scorers)

let objj = {
  a: "hello"
}

let arr = ["j"]

for (let key in objj) {
  console.log(key, objj[key])
}


let namee = "ankit"
test()
function test(namee) {
  console.log(namee)
}


// var nameeee
// nameeee(namee)
// var nameeee = function (namee) {
//   console.log(namee)
// }

var n
console.log(n)
var n = "kit"
console.log(n)


// const test = {
//   name: 'smniy',
//   test11: function () {

//   }
// }

const eve = new Map([
  [17, "goal"],
  [36, "subsitution"],
  [47, "goal"],
  [61, "subsitution"],
  [64, "yellow card"],
  [19, "red card"],
  [70, "subsitution"],
  [72, "subsitution"],
  [76, "goal"],
  [80, "goal"],
  [92, "yellow card"],
])


let events = [...new Set(eve.values())]
console.log(events)

eve.delete(64)
console.log(eve)


let time = [...eve.keys()].pop()
let avgg = time / eve.size
console.log(`An event happened, on average, every ${avgg} minutes`)


for (let [key, val] of eve) {
  let ans = (key <= 45) ? "first half" : "second half";
  console.log(`[${ans}] ${key}: ${val}`)
}