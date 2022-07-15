// Anonymous
let say = function(name){
    console.log(`Hello ${name}`);
}

say("Reihan")

// Anonymous function
function giveMeName(callbacks){
    callbacks("Andrian")
}

giveMeName(function(name){
    console.log(`Hello ${name}`);
})