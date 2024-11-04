#!/usr/bin/env node

console.log(process.argv);

let command = process.argv[2];

let numbers = process.argv
    .slice(3,process.argv.length)
    .map((n)=>parseFloat(n));

if(numbers.some((n)=>isNaN(n))){
    console.log("Some arguments ar not numbers!");
    process.exit(1);
}

function avg(numbers){
    let s=0;
    for(let i = 0;i<numbers.length;i++){
        s+= numbers[i];
    }
    return s/numbers.length;
}

function prime(num){
    return false;
}
function factorial(num){
    if(num===0) return 1;
    return factorial(num-1)*num;
}
exports.avg = avg;
exports.prime = prime;
exports.factorial = factorial;

module.exports = {
    avg,
    prime,
    factorial
}

let result;
switch(command){
    case "avg":
        result =avg(numbers);
        break;
    case "prime":
        result = prime(numbers[0]);
        break;
    case "factorial":
        result = factorial(numbers[0]);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);