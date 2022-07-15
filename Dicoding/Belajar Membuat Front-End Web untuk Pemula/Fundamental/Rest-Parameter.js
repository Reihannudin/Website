//  rest function define item more than one
function sum(name, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    console.log(`Total ${name} is ${total}`);
}

sum("Orange", 4,3,3,7,5,5,6)
sum("Apple", 4,3,3,2,5,6,5,6)
sum("Melon", 4,2,5,4,7,5,6)

// Spread Syntax if terlanjur have array
sum("Banana", ...[4,5,3,6,3,7])