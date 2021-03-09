/* 
  * 전역객체는 Object, String, Boolean, Function, Array, RegExp, Date, Math, Promise 같은 모든 표준 빌트인 객체를 프로퍼티로 가지고 있다.
  * 자바스크립트 실행환경(브라우저 환경 또는 Node.js 환경)에 따라 추가적으로 프로퍼티와 메서드를 갖는다. 브라우저 환경에서는 DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web Component, Web Worker 같은 클라이언트 사이드 Web API를 호스트 객체로 제공하고 Node.js 환경에서는 Node.js 고유의 API를 호스트 객체로 제공한다.
  * var 키워드로 선언한 전역변수와 선언하지 않은 변수에 값을 할당한 함묵적 전역, 그리고 전역 함수를 전역 객체의 프로퍼티가 된다.
*/

// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(global.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역, bar는 전역 변수가 아니라 전역 객체의 프로퍼티다.
bar = 2; // global.bar = 2
console.log(global.bar); // 2

// 전역 함수
function baz() { return 3; }
console.log(window.baz()); // 3