// const 키워디로 선언된 벼수에 객체를 할당한 경우 값을 변경 할 수 있다.
const person = {
  name: 'Kim'
}

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';

console.log(person); // { name: 'Kim' }

// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지 않는다.