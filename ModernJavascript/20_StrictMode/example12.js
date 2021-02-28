// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 
// 생성자 함수가 아니니 일반 함수 내부에서는 this를 사용할 필요가 없기 때문
// 이때 에러는 발생하지 않는다.
(function () {
  'use strict';
  
  function foo() {
    console.log(this); // undefined
  }
  foo();

  function Foo() {
    console.log(this); // Foo {}
  }
  new Foo();
}())