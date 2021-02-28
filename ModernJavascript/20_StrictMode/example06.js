// strict mode 스크립트와 non-strict mode 스크립트를 혼용하는 것은 오류를 발생시킬 수 있다.
// 즉시 실행 함수로 스크립트 전체를 감싸서 스코프르 ㄹ구분하고 즉시 실행 함수의 선두에 strict mode를 적용한다.
// 즉시 실행 함수의 선두에 strict mode 적용
(function () {
  'use strict';

  // Do something...
}());