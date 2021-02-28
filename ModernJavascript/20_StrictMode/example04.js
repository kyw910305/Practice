// 코드 선두에 'use strict'를 위치시키지 않으면 strict mode가 제대로 동작하지 않는다.;
function foo() {
  x = 10; // 에러를 발생시키지 않는다.
  'use strict';
}
foo();