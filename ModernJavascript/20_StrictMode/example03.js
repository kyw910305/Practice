// 함수 몸체의 ㅅ너두에 추가함녀 해당 함수와 중첩함수에 strict mode가 적용된다.
function foo() {
  'use strict';

  x = 10; // ReferenceError: x is not defined
};
foo();