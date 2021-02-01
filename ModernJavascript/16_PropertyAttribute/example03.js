const person = {
  name : 'Kim'
}

// 프로퍼티 동적 생성
person.age = 20;

// 모든 프로퍼티의 프로퍼티 어트리뷰터 정보를 제공하는 프로퍼티 디스크럽터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(person));
/*
  {
    name: {
      value: 'Kim',
      writable: true,
      enumerable: true,
      configurable: true
    },
    age: { value: 20, writable: true, enumerable: true, configurable: true }
  }
*/