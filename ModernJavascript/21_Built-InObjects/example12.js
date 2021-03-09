// Infinity 무한대를 나타내는 숫자값
// 전역 프로퍼티는 window/global를 생략하고 잠소 할 수 있다.
console.log(global.Infinity === Infinity); // true

// 양의 무한대
console.log(3/0); // Infinity
// 음의 무한대
console.log(-3/0); // -Infinity
// Infinity는 숫자값이다.
console.log(typeof Infinity); // number