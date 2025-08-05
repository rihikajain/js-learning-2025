const rest = {
  namee: 'jain\'s',
  location: 'jaipur',
  categories: ['italian', 'indian', 'chinese'],
  starterMenu: ['pizza', 'bruscheta'],
  mainMenu: ['sabzi', 'roti', 'bread'],
  orderinghrs: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    }
  },

  order: function (starterInd, mainInd) {
    return [this.starterMenu[starterInd], this.mainMenu[mainInd]]
  }
}

const { namee, orderinghrs, location: loc } = rest;
console.log(namee, orderinghrs, loc)


let a = 99
let b = 70
const objecttt = {
  a: 23,
  b: 45,
  c: 87
};

({ a, b } = objecttt)
console.log(a, b)