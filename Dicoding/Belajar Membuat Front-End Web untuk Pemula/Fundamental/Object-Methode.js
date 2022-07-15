const person={
    name : " Reihan",
    sayHello: function(name){
        console.log(`Hello ${name}`)
    }
}

person.sayHello("Reihan")

with(person){
    sayHello("Andrian")
}

// add methode to object
person.sayGoodBye = function (name){
    console.log(`Good Bye ${name}`)
}

person.sayGoodBye("Reihan")