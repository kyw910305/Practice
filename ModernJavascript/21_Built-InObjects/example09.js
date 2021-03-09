/*
  전역 객체의 특징
  * 전역 객체는 개발자가 의도적으로 생성할 수 없다. 즉, 전역 객체를 생성할 수 있는 생성자 함수가 제공되지 않는다.
  * 전역 객체의 프로퍼티를 참조할 때 window(또는 global)를 생략할 수 있다.
*/

// 문자열 'F'를 16진수로 해석하여 10진수로 변환하여 반환 한다.
global.parseInt('F', 16); // 15
// global.parseInt는 parseInt로 호출할 수 있다.
parseInt('F', 16); // 15

global.parseInt === parseInt; // true