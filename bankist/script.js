'use strict';

// const { use } = require("react");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Riks Jain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Rakshansh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Shuchi Jain',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Rhythm Pareek',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const createusername = function (accs) {
  accs.forEach(act => {
    act.username = act.owner.toLowerCase().split(" ").map(name => name.at(0)).join("")
  })
}
createusername(accounts)



// login
let currUser;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currUser = accounts.find((acc) => acc.username === inputLoginUsername.value);

  if (currUser?.pin === Number(inputLoginPin.value)) {
    console.log(currUser);
    labelWelcome.textContent = `Welcome back, ${currUser.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1

    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur()


    displaymov(currUser.movements)

    displayBalance(currUser.movements)

    displaySummary(currUser)
  }
})



const displaymov = function (movements) {
  containerMovements.innerHTML = ''
  movements.forEach(function (mov, i) {
    // console.log(mov)
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}₹</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html)

  });
}


const displayBalance = function (mov) {
  const balance = mov.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance} ₹`
}



const displaySummary = function (acc) {
  let deposit = acc.movements.filter((mov) => mov > 0).reduce((acc, val) => acc + val)
  labelSumIn.textContent = `${deposit}₹`

  let withdrawl = acc.movements.filter((mov) => mov < 0).reduce((acc, val) => acc + val)
  labelSumOut.textContent = `${Math.abs(withdrawl)}₹`

  let interest = acc.movements.filter(mov => mov > 0).map((deposit) => deposit * acc.interestRate / 100).filter((val) => val >= 1).reduce((acc, val) => acc + val)
  labelSumInterest.textContent = `${interest}₹`
}

























/////////////////////////////////////////////////////////////

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const maxx = movements.reduce((acc, mov) => mov < acc ? acc : mov)
// console.log(maxx)


// const deposits = movements.filter(function (mov) {
//   return mov > 0
// })
// console.log(movements)
// console.log(deposits)

// const withdrawls = movements.filter(mov => mov < 0)
// console.log(withdrawls)


// const balance = movements.reduce(function (acc, mov, i) {
//   console.log(`iteration ${i}: ${acc}`)
//   return acc + mov
// }, 0)

// console.log(balance)

//////////////////////////////////////////////////////////

// let julia = [3, 5, 2, 12, 7]
// const julia1 = [9, 16, 6, 8, 3]
// let kate = [4, 1, 15, 8, 3]
// const kate1 = [10, 5, 6, 1, 4]

// const checkdogs = function (julia, kate) {
//   const new_julia = julia.slice(1, -2)
//   console.log(new_julia)
//   const all = new_julia.concat(kate)
//   console.log(all)

//   all.forEach(function (dog, i) {

//     const type = dog < 3 ? "still a puppy" : "an adult";
//     console.log(`Dog number ${i + 1} is ${type}, and is ${dog} years old`)
//   })
// }

// checkdogs(julia, kate)
// checkdogs(julia1,kate1)


// const calAvgHumanAge1 = (dogarr) => {
//   let humanage = dogarr.map((dog) =>
//     dog <= 2 ? 2 * dog : 16 + (dog * 4));
//   console.log(humanage)

//   let adult = humanage.filter((a) => a >= 18)
//   console.log(adult)

//   let avg = adult.reduce((acc, val) => acc + val) / adult.length
//   console.log(avg)
// }

// const calAvgHumanAge2 = (dogarr) => {
//   let humanage = dogarr.map((dog) =>
//     dog <= 2 ? 2 * dog : 16 + (dog * 4)).filter((dog) => dog >= 18).reduce((acc, val, i, a) => acc + val / a.length, 0)
// }
// calAvgHumanAge1([5, 2, 4, 1, 15, 8, 3])

// calAvgHumanAge2([5, 2, 4, 1, 15, 8, 3])

////////////////////////////////////////////////////////////
// const inrTOusd = 0.011
// let totalDepositInUSD = movements.filter((mov) => mov > 0).map((mov) => mov * inrTOusd).reduce((acc, val) => acc + val)


// console.log(totalDepositInUSD)


// const act = accounts.find((mov) => mov.username === "rj")
// console.log(act)

// for (let a of accounts) {
//   if (a.username === "r")
//     console.log(a)
// }
// ///////////////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd']
// console.log(arr.slice(2))