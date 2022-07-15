function sayHello(name){
    console.log(`Hello ${name}`)
}

let say = sayHello

sayHello("Reihan")
say("Andrian")

function giveName(callback){
    callback("Udin")
}

giveName(sayHello)
giveName(say)