let arr = [1, 2, 3, 4, 5];

// let temp = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1]
// }
// arr[arr.length - 1] = temp
// console.log(arr)

let k = 2
let temp = []
for (let i = arr.length -1- k; i >= 0; i--) {
    temp.push(arr[i])
}
console.log(temp)
let  temp2=[]
for (let i =0 ; i <= arr.length -1- k; i++) {
    temp2.push(arr[i])
}
console.log(temp2)

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1]
// }
// arr[arr.length - 1] = temp
// console.log(arr)