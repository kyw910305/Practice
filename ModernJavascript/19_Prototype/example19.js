// foo 함수는 Function 생성자로 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성했다.
function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수다.
console.log(foo.constructor === Function); // true

// 프로토타입과 생성자 함수를 단독으로 존재 할 수 없고 언제나 쌍pair으로 존재한다.