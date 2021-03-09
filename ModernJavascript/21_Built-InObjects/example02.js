// 생성자 함수인 표준 빌트인 객체가 생성한 인스턴스의 프로토타입은 표준 빌트인 객체의 prototype 프로퍼티에 바인딩된 객체다.
// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Kim');

// String 생성자 함수를 통해 생성한 strObj 객체의 프로포타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); // true