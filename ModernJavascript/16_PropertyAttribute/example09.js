const person = {};

Object.defineProperties(person, {
  // 데이터 프로퍼티 정의
  firstName: {
    value: 'Youngwoong',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Kim',
    writable: true,
    enumerable: true,
    configurable: true
  },
  // 접근자 프로퍼티 정의
  fullName: {
    // getter 함수
    get() {
      return `${this.firstName} ${this.lastName}`
    },
    set(name) {
      [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
  }
});

person.fullName = 'YoungGook Kim';
console.log(person); // { firstName: 'YoungGook', lastName: 'Kim', fullName: [Getter/Setter] }