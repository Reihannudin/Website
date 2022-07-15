function createAdder(value){
    const owner = "Reihan";
    function add(param){
        console.log(owner)
        return value + param
    }
    return add
}

const addTwo = createAdder(2)
console.log(addTwo(10))
console.log(addTwo(20))
