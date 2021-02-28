// 객체 자신의 고유 프로퍼티만 열거하기 위해서는 Object.keys/values/entries 메서드를 사용하는 것을 권장한다.
// Object.key 메서드는 개체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.
const person = {
  name: 'Kim',
  address: 'Seoul',
  __proto__: { age: 20 }
};

console.log(Object.keys(person)); // [ 'name', 'address' ]