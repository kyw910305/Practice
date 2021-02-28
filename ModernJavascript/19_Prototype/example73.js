// ES8에서 도입된 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.
const person = {
  name: 'Kim',
  address: 'Seoul',
  __proto__: { age: 20 }
};

console.log(Object.values(person)); // [ 'Kim', 'Seoul' ]