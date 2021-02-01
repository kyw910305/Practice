var x = 1;
function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1 함수를 어디에 호출햇는지에 따라 함수의 상위스코프를 결정한다.(동적 스코프)
bar(); // 1 함수를 어디에서 정의헀는지에 따라 함수의 상위 스코프를 결정한다.(정적 스코프)