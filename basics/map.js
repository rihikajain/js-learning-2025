const q = new Map([
  ['question', 'what is the best language?'],
  [1, 'C'],
  [2, 'Javascript'],
  [3, 'Java'],
  ['correct', 3],
  [true, "Correct!✔️"],
  [false, "Incorrect!❌"]
])

console.log(q.get('question'))
for (let [key, value] of q) {
  if (typeof (key) === 'number') {
    console.log(`answer ${key}: ${value}`)
  }
}
let userans = 3;
// userans= Number(prompt("what is the choice"))
console.log(userans)


console.log(q.get(q.get("correct") === userans))
console.log([...q])
console.log([...q.keys()])
console.log([...q.values()])


