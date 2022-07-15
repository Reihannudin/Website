let user = {
    name : "Andrian Raihannudin",
    age : 16,
    address : "Citra raya, Kab.Tangerang, Indonesia"
}

console.table(user);

// add object 
user["work"] = "Student";
user["Gender"] = "Male";
console.table(user);

// delete object
delete user["work"];
console.table(user)

// get specifict object
let name = user.name
console.log("")