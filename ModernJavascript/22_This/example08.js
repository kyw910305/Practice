// 일반함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩된다.
function foo() {
  'user strict';
  console.log("foo's this: ", this); // undefined
  function bar () {
    console.log("bar's this: ", this); // undefined
  }
  bar();
}
foo();