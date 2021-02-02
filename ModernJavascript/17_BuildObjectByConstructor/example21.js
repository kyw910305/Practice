// OBject와 Function 생성자 함수는 new 연산자 없이 호출해도 new 연산자와 함게 호출했을때와 동일하게 동작한다.

let obj = new Object();
console.log(obj); // {}

obj = Object();
console.log(obj); // {}

let f = new Function('x', 'return x ** x');
console.log(f); // [Function: anonymous]

f = Function('x', 'return x ** x');
console.log(f); // [Function: anonymous]