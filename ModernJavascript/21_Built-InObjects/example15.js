// eval
/**
 * 주어진 문자열 코드를 런타임에 평가 또는 실행한다.
 * @param {string} code - 코드를 나타내는 문자열
 * @returns {*} 문자열 코드를 평가/실행한 결과 값
 eval(code)
 */

// 표현식인 문
console.log(eval('1 + 2;')); // 3
// 표현식이 아닌 문
console.log(eval('var x = 5;')); // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언되었다.
console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러싼다.
const o = eval('({ a: 1 })');
console.log(o); // { a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러싼다.
const f = eval('(function() { return 1; })');
console.log(f()); // 1