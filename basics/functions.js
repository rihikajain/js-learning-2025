"use strict";
const oneword = function (str) {
  return str.replaceAll(' ', '').toLowerCase()
}

console.log(oneword('HELLO World'))


const upperFirst = function (str) {
  const [first, ...others] = str.split(" ")
  return [first.toUpperCase(), ...others].join(' ')
}

upperFirst("javascript is a language")

const trans = function (str, fn) {
  console.log(`original: ${str}`)
  console.log(`transformed: ${fn(str)}`)
  console.log(`function name: ${fn.name}`)
  console.log("\n")

}

trans('jssjs is the best!', upperFirst)
trans('jssjs is the best!', oneword)


const high = () => {
  console.log("🤧")
}
// document.body.addEventListener('click', high)


const greet = (greeting) => (name) => console.log(`${greeting} ${name}`)

greet('hey')('riks')


const aero = {
  airline: 'air india',
  iatacode: 'AIN',
  bookings: [],
  book(flightnum, name) {
    console.log(`${name} booked a seat on ${this.airline.toUpperCase()} flight ${this.iatacode.toUpperCase()}${flightnum}`)
    this.bookings.push({ flight: `${this.iatacode}${flightnum}`, name })
  }

}
aero.book(23, 'riks')
console.log(aero)

const indigo = {
  airline: 'indigo',
  iatacode: 'INDI',
  bookings: [],
}
// call
const book = aero.book
book.call(indigo, 45, "maxmilian")
book.call(aero, 98, "koliju")


// bind
const bookIndigo = book.bind(indigo)
bookIndigo(82, "riks")

aero.planes = 300
aero.buyplane = function () {
  console.log(this)
  this.planes++
  console.log(this.planes)
}

// with event listener
document.querySelector('.buy').addEventListener('click', aero.buyplane.bind(aero))
console.log(aero)

// partial application : pre set paramenters

const addTax = (rate, value) => value + (value * (rate / 100))

// its as if new specific function has been added from addtax
const addVAT = addTax.bind(null, 23)

console.log(addVAT(1000))
console.log(addTax(10, 200))

// const tax = (rate) => {
//   return vat = (value) => value + (value * (rate / 100))
// }
// console.log(tax(23)(1000))





// challenge

const poll1 = {
  question: "what is fav progaramming lang?",
  options: ['0: JS', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0)
}

poll1.registernewans = function () {
  const ans = Number(prompt(`${this.question}\n ${this.options.join('\n')} \n (Write option number)`))
  // console.log(ans)
  if (ans < this.answers.length && typeof (ans) === 'number') {
    this.answers[ans]++
    this.displayresults()
    this.displayresults('str')
  }
  else { console.log(`wrong input`) }
}

poll1.displayresults = function (type = 'arr') {
  if (type === "arr") {
    console.log(this.answers)
  }
  else if (type === "str") {
    console.log(`Poll results are ${this.answers.join(', ')}`)
  }
}

document.querySelector('.poll').addEventListener('click', poll1.registernewans.bind(poll1))

poll1.displayresults.call({ answers: [1, 2, 4] }, 'str')

const runOnce = function () {
  console.log("hey");
}
runOnce();

(function () {
  console.log("hey anony");
})();

(() => console.log("hey arrow"))()




// closure
const securebooking = () => {
  let pascount = 0
  return function () {
    pascount++
    console.log(`${pascount} passengers`)
  }
}
const booker = securebooking()

booker()
booker()


let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
}
g();
f();


const boardpassengers = function (n, wait) {
  const pergroup = n / 3
  setTimeout(function () {
    console.log(`we are boarding all ${n} passengers`)
    console.log(`there are 3 groups, each with ${pergroup} passengers`)
  }, wait * 1000)
  console.log(`will start boarding in ${wait} seconds`)
}
boardpassengers(270, 1);



// challenge

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'white';

  document.querySelector('.blue').addEventListener('click', function () {
    header.style.color = 'blue'
  });

  document.querySelector('.red').addEventListener('click', function () {
    header.style.color = 'red'
  });

})();
