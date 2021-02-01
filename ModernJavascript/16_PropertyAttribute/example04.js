const person = {
  name : 'Kim'
}

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크럽터 객체를 취득한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Kim', writable: true, enumerable: true, configurable: true }