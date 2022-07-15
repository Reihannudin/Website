
// for in object
const person = {
    firstName : "Andrian",
    middleName : "",
    lastName : "Raihannudin"
};

for(const property in person) {
    console.log(`Property ${property} : ${person[property]}`);
}

// for In in Array
const maknaeLine = ["Jungkook","V","Jimin"]
for(const i in maknaeLine) {
    console.log(`Index ${i} : ${maknaeLine[i]}`)
}