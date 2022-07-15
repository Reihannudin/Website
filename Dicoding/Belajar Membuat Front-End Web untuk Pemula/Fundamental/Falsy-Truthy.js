let dataFasly = {
    falseBoolean : false,
    zeroValue : [0 ,-0],
    emptyString : [" ", ` `, ' '],
    nullValue : null,
    undefineValue : undefined,
    NaNValue : "Not a number"
}

console.table(dataFasly)

let dataTruthy = "Is Data there value in inside like this"
console.log(dataTruthy)

//  OR AND OPERATOR
// or get data non false from left to right
console.log("hello" || "")
console.log(0 || "NOL")
// and get data falsy 
console.log(0 && "Hello")
console.log(false && "Helo")