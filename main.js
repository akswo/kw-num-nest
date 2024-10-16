#!/usr/bin/env node

const lib = require("./lib"); // lib 모듈 임포트

let command = process.argv[2];
let numbers = process.argv.slice(3).map((n) => parseFloat(n));

// NaN 값 체크
if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result; // 결과 저장 변수

// 명령어에 따른 함수 호출
switch (command) {
    case "avg":
        result = lib.avg(numbers); // lib 모듈의 avg 함수 호출
        break;
    case "prime":
        result = lib.prime(numbers[0]); // 첫 번째 숫자로 소수 여부 판단
        break;
    case "factorial":
        result = lib.factorial(numbers[0]); // 첫 번째 숫자로 팩토리얼 계산
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

// 결과 출력
if (result !== undefined) {
    console.log(result);
}
