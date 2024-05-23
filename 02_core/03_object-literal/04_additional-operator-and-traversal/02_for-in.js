// for in 반복문
// 객체의 모든 키 순회
var student = {
    name : '유관순',
    age : 16,
    getInfo : function(){
        return `${this.name}(은)는 ${this.age}세입니다.`;
    }
};
  
for (var key in student) {
    console.log(`key : ${key}`);                    // 키
    console.log(`student[key] : ${student[key]}`);  // 키에 해당하는 값
}



var sy = {
    name1 : "우승엽",
    age1 : 27,
    getInfo : function(){
        return `${this.name1}는 ${this.age1}세`;
    } 
};

for(var key1 in sy){
    console.log(`key1 : ${key1}`);
    console.log(`sy[key1] : ${sy[key1]}`);
}