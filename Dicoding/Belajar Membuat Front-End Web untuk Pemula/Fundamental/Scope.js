// global scope
let counter = 0;

function hitMe(){
    counter++
}

hitMe();
hitMe();

console.log(counter)

// Local Scope 
function first(){
    let firstVariable = "First"
}

function second(){
    let secondVariable = "Second"
}

first();
second();

// console.log(firstVariable)  // can not acsees local scope
// console.log(secondVariable)  // can not acsees local scope


// Nested scope
function firstNested(){
    let firstVariable = "First"

    function secondNested(){
        console.log(firstVariable) // can not acsees local scope
    }

    secondNested();
}

firstNested()