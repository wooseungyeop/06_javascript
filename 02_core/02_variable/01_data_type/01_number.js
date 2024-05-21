/**
* 자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다.
하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리하다.*/
var integer = 10;
// 변수 변수명 대입 값
var double = 5.5;
var negative = -10;
console.log(10 === 10.0);
// 10과 10.0이 값 + 자료형이 같은지 비교

console.log(10/4);

/*
infinity : 양의 무한대
-infinity : 음의 무한대
NaN : 산술 연산 불가
*/

console.log(10/0);
console.log(10/-10);
console.log(1*'문자열');
