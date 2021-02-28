// 객체의 모든 프로퍼티를 순회하며 열거 하려면 for...in 문을 사용한다.
/*
for (변수선언문 in 객체) {...}
*/

const person = {
  name: 'Kim',
  address: 'Seoul'
};

// for... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당된다.
for (const key in person) {
  console.log(key + ': ' + person[key]);
}
// name: Kim
// address: Seoul