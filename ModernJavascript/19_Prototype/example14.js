// 모든 프로토타입은 constructor 프로퍼티를 갖는다.
// 이 constructor 프로퍼티는 prototype 프로퍼티로 자신을 참조하고 있는 생성자 함수를 가리킨다.
// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Kim');

// me 객체의 생성자 함수는 Person이다.
console.log(me.constructor === Person); // true