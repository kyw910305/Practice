// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
const person = {
  name: 'Kim'
}

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크럽터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Kim', writable: true, enumerable: true, configurable: true }