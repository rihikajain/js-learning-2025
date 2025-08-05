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
document.body.addEventListener('click', high)
