
// let name = "Reihan"

// function userName(name){
//     console.log(`Hi ${name}, my name is ${this.name}`)
// }

// userName("Nadia")


const person ={
    name : "Reihan",
    sayHello: function(name){
        console.log(`Hi ${name}, my name is ${this.name}`)
    }
}

person.sayHello("Budi")