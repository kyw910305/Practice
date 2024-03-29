/** isFinite
 * 전달받은 인수가 유한수인지 확인하고 그 결과를 반환한다.
 * @param {number} testValue - 검사 대상 값
 * @returns {boolean} 유한수 여부 확인 결과
 isFinite(testValue)
 */
// 인수가 유한수이면 true를 반환한다.
console.log(isFinite(0)); // true
console.log(isFinite(2e64)); // true
console.log(isFinite('10')); // true: '10' -> 10
console.log(isFinite(null)); // true: null -> 0

// 인수가 무한수 또는 NaN으로 평가되는 값이라면 false를 반환한다.
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false

// 인수가 NaN으로 평가되는 값이라면 false를 반환한다.
console.log(isFinite(NaN)); // false
console.log(isFinite('Hello')); // false
console.log(isFinite('2005/12/12')); // false