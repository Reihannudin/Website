let num1 = 8
let num2 = 2

// sum
let sum = (num1 + num2)
// you can do it : num1 += num2
console.log(sum)

// sub
let sub = (num1 - num2)
// you can do it : num1 -= num2
console.log(sub)

// mul 
let mul = (num1 * num2)
// you can do it : num1 *= num2
console.log(mul)

// div
let div = (num1 / num2)
// you can do it : num1 /= num2
console.log(div)

// exp
let exp = (num1 ** num2)
// you can do it : num1 **= num2
console.log(exp)

// mod
let mod = (num1 % num2)
// you can do it : num1 %= num2
console.log(mod)

// incerment & decrement
let num4 = 5
let inc = num4++
let dec = num4--
console.log(inc)
console.log(dec)

// comparison operation
let num5 = 5
let num6 = 5
let num7 = 8
console.log(num5 == num6)
console.log(num5 > num7)


//Logic operator 
let testScores = 83
let absentValue = 98

const requiredScore = testScores > 78
const requiredAbsent = absentValue > 86

const myScore = testScores || absentValue
console.log("My score : " + myScore)