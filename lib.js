function avg(numbers){
    let s = numbers.reduce((prev,curr)=>prev + curr,0);
    return s/numbers.length;
}

function prime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){//소수 판별법 알고리즘을 이용
        if(num%i===0) return false;//나누어떨어지는 순간 소수가 아님.
    }
    return true;
}
function factorial(num){
    if(num===0) return 1;
    if(num>15) return -1;//16이상의 수가 오면 안된다.
    return factorial(num-1)*num;
}
module.exports = {
    avg,
    prime,
    factorial
}