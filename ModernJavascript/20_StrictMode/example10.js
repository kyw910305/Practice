// 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
(function () {
  'use strict';

  // SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
}());