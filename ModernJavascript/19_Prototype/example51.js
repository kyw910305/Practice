// 프로토타입이 null인 객체를 생성한다. 생성된 색체는 프로토타입 체인의 종점에 위치한다.
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null); // true
// Object.prototype을 상속받지 못한다.
// console.log(obj.toString()); // TypeError: obj.toString is not a function

// obj -> Object.prototype -> null
// obj = {};와 동일하다.
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// obj -> Object.prototype -> null
// obj = { x: 1 };와 동일하다.
obj = Object.create(Object.prototype, {
  x : { value: 1, writable: true, enumerable: true, configurable: true }
});
// 위코드는 아래와 동일하다.
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

const myProto = { x: 10 };
// 임의의 객체를 직접 상속받는다.
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x); // 10
console.log(Object.getPrototypeOf(obj) === myProto); // true

// 생성자 함수
function Person(name) {
  this.name = name;
}

// obj -> Person.prototype -> Object.prototype -> null
// obj = new Person('Kim')와 동일하다.
obj = Object.create(Person.prototype);
obj.name = 'Kim';
console.log(obj.name); // Kim
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true

/*
Object.create 메서드의 장점
1. new 연산자가 없어도 객체를 생성할 수 있다.
2. 프로토타입을 지정하면서 객체를 생성할수 있다.
3. 객체 리터럴에 의해 생성된 객체도 상속 받을 수 있다.
*/