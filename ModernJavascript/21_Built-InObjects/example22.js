/** isNaN
 * 주어진 숫자가 NaN인지 확인하고 그 결과를 반환한다.
 * @param {number} testValue - 검사 대상값
 * @returns {boolean} NaN 여부 확인 결과
 isNaN(testValue)
 */
// 숫자
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false

// 문자열
console.log(isNaN('blabla')); // true: 'blabla' -> NaN
console.log(isNaN('10')); // false: '10' -> 10
console.log(isNaN('10.12')); // false: '10.12' -> 10.12
console.log(isNaN('')); // false '' -> 0
console.log(isNaN(' ')); // false ' ' -> 0

// 불리언
console.log(isNaN(true)); // false: true -> 1
console.log(isNaN(null)); // false: null -> 0

// undefined
console.log(isNaN(undefined)); // true: undefined -> NaN

// 객체
console.log(isNaN({})); // true: {} -> NaN

// date
console.log(isNaN(new Date())); // false: new Date() -> Number
console.log(isNaN(new Date().toString)); // true: String -> NaN
