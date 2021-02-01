const person = {
  name: 'Kim'
}

// 프로퍼티 동적 생성
person.age = 30;

console.log(Object.getOwnPropertyDescriptors(person));

/* {
  name: {
    value: 'Kim',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 30, writable: true, enumerable: true, configurable: true }
}
*/