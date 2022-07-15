// Arrow function
const sayHello = (name) =>{
    const say = `Hello ${name}`;
    console.log(say)
}
sayHello("Reihan")


// Arrow non block function
const greating = (name) => console.log(`Hello ${name}`)
greating("Andrian")

// Array Function return
const sum = (first, second) => first + second
console.log(sum(10,5))

// arrow function without without () parameter
const greatingHello = (name) => console.log(`Hello ${name}`)
greatingHello("Ziyaad") 


// arrow function as parameter
function giveName(callback) {
    callback("Naruto")
}

giveName((name) => console.log(`Hello ${name}`))

// arraw function in objext
const person = {
    name : "Reihan",
    sayHello : (name) => {
        console.log(this)
        console.log(`Hello ${name}, my name is ${this.name}`)
    }
}

person.sayHello("Nadia")