// 배개변수 primitive는 원시값을 전달받고, 매개변수, ovj는 객체를 전달 받는다.
function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'Kim';
}

// 외부상태
var num = 100;
var person = { name: 'Lee' };

console.log(num); // 100
console.log(person); // { name: 'Lee' }

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 객체는 원본이 훼손된다.
console.log(person); // { name: 'Kim' }