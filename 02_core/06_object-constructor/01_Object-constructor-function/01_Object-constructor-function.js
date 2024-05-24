/* 01_Object-constructor-function (Object 생성자 함수)
new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
빈 객체 생성 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다. 
*/

// 빈 객체 생성
// const student = new Object();

// // 프로퍼티 추가
// student.name = '유관순';
// student.age = 16;

// console.log(student);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         console.log("Hello, my name is " + this.name);
//     };
// }

// 생성자 함수 정의
function Person(name, age) {
    this.name = name; // name 속성
    this.age = age;   // age 속성
}

// 프로토타입에 메서드 추가
Person.prototype.sayHello = function() {
    console.log("Hello, my name is " +  " " + this.name + this.age);
};

// 새로운 Person 객체 생성
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);

// Person 객체 사용
person1.sayHello(); // "Hello, my name is Alice"
person2.sayHello(); // "Hello, my name is Bob"


/* 반드시 Object 생성자 함수를 사용해 객체를 생성할 필요는 없다. 객체 리터럴을 사용하는 것이 더 간편하다.
자바스크립트에는 Object 생성자 함수 이외에도 
String, Number, Boolean, Function, Array, Date, RegExp 
등의 빌트인 생성자 함수를 제공한다. */