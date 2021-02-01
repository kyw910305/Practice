var person = {
  name: 'Kim',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

console.log(typeof person); // object
console.log(person); // {name: "Kim, sayHello: f"}