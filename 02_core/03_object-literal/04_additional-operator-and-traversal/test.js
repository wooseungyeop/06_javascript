function fetchDate(callback){           // 함수 정의 (매개변수)
    setTimeout(() => {                  // 익명 함수 코드 블록이 아니기 때문에 ; 붙임
        const name = { value : "우승엽"}; // 변수 선언 + 객체 할당
        callback(null, name);            // 콜백 함수 정의와 변수 값
    }, 3000);                            // 3초뒤 실행
}


fetchDate((error, name) => {             // 콜백 함수의 인수를 전달 받는다.
    if(error){                           // 조건문으로 에러가 났을 때와 안났을 때의 출력
        console.log("Error : ", error);
    } else {
        console.log("Data received : ", name);
    }
});


function fetchData() {                          // 함수 정의 
    return new Promise((resolve, reject) => {   // 객체 생성 + 생성자 함수(매개변수)
      setTimeout(() => {                        // 익명함수 
        const success = false;                  // 실패를 위한 Promise 변수 
  
        if (success) {                          // 조건에 만족할 때 data 보냄
          const data = { value: "some data" };
          resolve(data);
        } else {                                // 조건에 만족하지 못할 때 error
          reject(new Error("Something went wrong"));
        }
      }, 1000);                                 // 1초뒤 실행
    });
  }
  
  fetchData()                                   // 함수 정의
    .then((data) => {                           // Promise 함수가 성공 했을 때 data
      console.log("Data received:", data);
    })
    .catch((error) => {                         // Promise 함수가 실패 했을 때 error
      console.error("Error:", error.message);
    });
  