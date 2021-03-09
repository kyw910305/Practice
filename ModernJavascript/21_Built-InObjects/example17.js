// eval 함수를 자신이 호출된 위치에 해당하는 기존의 스코프를 런타임에 동적으로 수정한다.
const x = 1;

function foo() {
  // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정한다.
  eval('var x = 2;');
  console.log(x);
}

foo(); // 2
console.log(x); // 1