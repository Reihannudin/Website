const person ={
    firstName: "Andrian",
    lastName: "Raihannudin",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const array = value.split(" ")
        this.firstName = array[0]
        this.lastName = array[1]
    }
}

console.log(person.fullName)


console.log(person.firstName)
console.log(person.lastName)


