// simple function generator 
function* createNames(){
    yield "Jungkook"
    yield "V"
    yield "Jimin"
}

const names = createNames()
for(const name of names){
    console.log(name)
}

// complex function generator
function* buatGanjil(value){
    for (let i = 1; i<= value; i++){
        if(i % 2 === 1){
            yield i;
        }
    }
}

const angkaGanjil = buatGanjil(100)
for(const angka of angkaGanjil){
    console.log(angka)
}

console.log(angkaGanjil.next().value)
console.log(angkaGanjil.next().value)
console.log(angkaGanjil.next().value)
