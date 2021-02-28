// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.
(function() {
  'use strict';
  var x = 1;
  delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.

  function foo(a) {
    delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  delete foo; // SyntaxError: Delete of an unqualified identifier in strict mode.
}());