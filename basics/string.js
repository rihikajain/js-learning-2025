const airline = 'TAP Air India'
const plane = 'A320'


const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1)
  let ans = (s === 'B' || s === 'E') ? "yes" : 'no'
  console.log(ans)
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')



const bagcheck = function (items) {
  let baggae = items.toLowerCase();
  console.log((baggae.includes("gun") || baggae.includes("knife") || baggae.includes("kill")) ? "failed" : "passed")
}

bagcheck("i have this, that, and a knife")
bagcheck("nothing there is")
bagcheck("there is a gun!")


const capi = function (name) {
  const n = name.split(' ')
  let final = []
  for (let word of n) {
    // final.push(word[0].toUpperCase() + word.slice(1))
    final.push(word.replace(word[0], word[0].toUpperCase()))
  }
  console.log(final.join(' '))
}

capi('riks jain')

const capital_line = function (line) {
  const final = line[0].toUpperCase() + line.slice(1)
  console.log(final)
}

capital_line("hello ji, how are you?")



const maskcard = function (num) {
  const n = String(num)
  const last = n.slice(-4)
  console.log(last.padStart(n.length, '*'))
}

maskcard(1234567899)
maskcard('87654321888')



// challenge


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value
  const rows = text.split('\n')
  // console.log(rows.entries())

  for (let [i, row] of rows.entries()) {
    // console.log(i, row)
    let word = row.trim().toLowerCase().split('_')
    let final = word[0] + word[1].slice(0, 1).toUpperCase() + word[1].slice(1)
    console.log(`${final.padEnd(20)}${'✅'.repeat(i + 1)}`)
  }
})


const getcode = str => str.trim().slice(0, 3).toUpperCase()

function lay(flights) {
  for (let row of flights.split('+')) {
    let words = row.split(';')
    let output = `${(words[0].startsWith("_Delayed")) ? "⛔" : "✅"}${words[0].replaceAll('_', ' ').trim()} from ${getcode(words[1])} to ${getcode(words[2])} (${words[3].replace(':', "h")})`.padStart(45)
    console.log(output)
  }

}

lay(
  '_Delayed_Departure; fao93766109;txl2133758440;11:25+_Arrival;bru0943384722; fao93766109;11:45+_Delayed_Arrival; hel7439299980; fao93766109;12:05+_Departure; fao93766109; lis2323639855;12:30')


