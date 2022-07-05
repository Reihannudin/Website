let myFirstArray = ["Apple",4,false,4.5];
console.log(myFirstArray);
console.log(myFirstArray[0])

let listName = ["Reihan", "Ziyaad", "Zaidan", "Angga"]
for(i in listName){
    console.log("Hello my name is " + listName[i])
}

let user = {
    name: {
        first: "Harry",
        last: "Potter"
    },
    age: 20, 
    isMuggle: false,
    stuff: ["Magic Wind", "Flying Car", "Owl"]
};

console.log("Hai nama saya " + user.name.first + " " + user.name.last)