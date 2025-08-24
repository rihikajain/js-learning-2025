var ans = new Promise((resolve, reject) => {
  // var n = Math.floor(Math.random() * 10)
  var n = 1
  if (n < 5) {
    return resolve(n)
  }
  else return reject(n)
})

let ans2 = ans.then(function (data) {
  console.log(data)
  return new Promise(function (res, rej) {
    return res("res2")
  })
})

let ans3 = ans2.then(function (data) {
  console.log(data)
  return new Promise((res, rej) => {
    return rej("error")
  })

})

ans3.then((data) => {
  console.log(data)
}).catch((data) => {
  console.log(data)

})

let s = "     the sky is blue     "
var reversewords = function (s) {
  let word = s.split(' ').reverse().join(' ')
  console.log(word)
}
reversewords(s)