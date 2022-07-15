counter = 1;

while(true){
    console.log(`Loop : ${counter}`)
    counter++;
 
    if(counter > 10){
        break
    }

}


for(let i = 1; i <= 10; i++){
    if(i % 2===0) {
        continue;
    }
    console.log(`Loop : ${i}`)
}