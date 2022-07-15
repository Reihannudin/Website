// Function
function sayHello() {console.log("Hello")}

sayHello()

// function parameter 
function sayName(firstName , lastName){
    console.log(`Hello ${firstName} ${lastName}`)
}

sayName("Andrian","Raihannudin")

// return function parameter
function sum(num1 , num2){
    let total = num1 + num2;
    return total 
}

const total = sum(5,9)
console.log(total)

// return function more than one parameter
function getScoreValue(value){
    if(value > 90){
        return "A";
    } else if (value >82){
        return "B";
    } else if (value > 78){
        return "C";
    } else if (value >= 60){
        return "D";
    } else {
        return "Please Try Exam Again"
    }
}
const myScore = getScoreValue(83)
console.log(myScore)

// stop execute with return
function isContains(array, searchValue){
    for (const element of array){
        if (element === searchValue){
            return true;
        }
    }
    return false;
}

console.log(isContains([2,4,1,3,5,5,3,3,6,3,8,9,9,], 5))