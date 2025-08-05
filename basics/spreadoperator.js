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
  },


  pasta: function ({ ing2, ing1, ing3 }) {
    console.log(`here is the pasta recipe with ${ing1},${ing2} and ${ing3}`)
  },

  pizza: function (ing2, ing1, ing3) {
    console.log(`here is the pizza recipe with ${ing1},${ing2} and ${ing3}`)
  }
}

rest.pasta({
  ing1: 'mushroom',
  ing2: 'patsa',
  ing3: 'cheese'
})


// const ingre = [prompt('lets make pizza ! ingr1?'), prompt('ingre2?'), prompt('ingre3?')]
// console.log(ingre)
// rest.pizza(...ingre)



const newrest = {
  ...rest, founder: "riks", year: 2006
}
newrest.namee = "rik\'s"
console.log(rest)
console.log(newrest)
