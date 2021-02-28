function Person(name) {
  this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function() {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Kim');
const you = new Person('Lee')

me.sayHello();  // Hi! My name is Kim
you.sayHello(); // Hi! My name is Lee