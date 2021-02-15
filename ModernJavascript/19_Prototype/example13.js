// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Kim');

// 결국 Person.prototype과 me.__proto__는 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__); // true