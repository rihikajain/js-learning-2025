'use strict'

const x = '23'
if (x === 23) console.log(23)
const calAge = birth => 2037 - birth
console.log()




const ob = {
  name: "hello",
  birth: 2003,
  friend: "me",
  location: "ji",
  driver: true,
  calc: function () {
    this.age = 2025 - this.birth
    return this.age
  }
}
// const namee = prompt('whats name')
// console.log(namee)
// const agee = prompt('what you need')
// console.log(agee)
// const friendd = prompt('what you need')
// console.log(friendd)
// console.log(`${ob[namee]} has ${ob[agee]} freinds, but ${ob[friendd]} being the best}`)

console.log(`${ob.name} is ${ob.calc()} years old, and he ${(ob.driver === true) ? "has a" : "doesnt have a"} driving licesne}`)