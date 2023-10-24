//array
const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["spiderman", "naagraj", "krish"]

// console.log(myHeros[0])

//  shallow copy => same refrence
//  deep copy => different refrence

//Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr)

// console.log(myArr.includes(2))
// console.log(myArr.indexOf(2))

// const newArr = myArr.join(); //join() converts array to string
// console.log(myArr)
// console.log(newArr)

//slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3)  //do not includes 3rd element and do not modifies the original array.
console.log(myn1)

console.log("B", myArr)
const myn2 = myArr.splice(1,3); //includes 3rd element too and modifies the original array
console.log(myn2)

console.log("C", myArr)
console.log(myn2)
