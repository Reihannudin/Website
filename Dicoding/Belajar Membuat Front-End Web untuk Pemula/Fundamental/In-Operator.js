// in Operator for checking if there data or not but this  is always check even data is null or undefined
const person = {
    firstName : "Andrian",
    lastName : "Raihannudin"
}

const result = "firstName" in person ; 
console.log(result)

const user ={
    name : "Reihan",
    bio : null,
    status : undefined,
}

const resultUser = "bio" in user ;
console.log(resultUser)