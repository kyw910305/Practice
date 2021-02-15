// ES6
const obj = {
  name: 'Kim',
  //메서드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Kim