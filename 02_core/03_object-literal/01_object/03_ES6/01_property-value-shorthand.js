/* 01_property-value-shorthand(프로퍼티 값 단축 구문) */

// var id="p-0001";
// var price =  30000;


// var product={       
//     id:id,
//     price:price
// }

// console.log(product);

/*
ES6에서 프로퍼티 값으로 변수를 사용하는 경우
변수의 이름으로 프로퍼티 키를 생성하게 되어 key와 값을 생략할 수 있다.
프로퍼티 키는 변수 이름으로 값은 변수의 값으로 할당한다.
*/
// var product2 ={ id, price};
// console.log(product2);


// var name1 = "우승엽";
// var phone = "010-2323-2323";
// var age = 27;

// var seungyeop ={
//     name1:name1,
//     phone:phone,
//     age: age,
//     address: {
//         city : "성남",
//         street : 123
//     }

// }

// const number = {
//     numbers : [0, 1, 2, 3]
// }
// console.log(number.numbers[4]);     // 해당 인덱스에 없는 값을 넣었을 때 undefined
// console.log(seungyeop);


const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    num: function(a,b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3)); // 출력: 8
console.log(calculator.subtract(10, 4)); // 출력: 6
console.log(calculator.num(3,4));

