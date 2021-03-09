/** parseFloat
 * 전달받은 문자열 인수를 실수로 해석하여 반환한다.
 * @param {string} string - 반환 대상 값
 * @returns {number} 반환 결과
 * parseFloat(string)
 */

// 문자열을 실수로 해석하여 반환한다.
console.log(parseFloat('3.14')); // 3.14
console.log(parseFloat('10.00')); // 10

// 공백으로 구분한 문자열은 첫번째 문자열만 반환한다.
console.log(parseFloat('34 45 66')); // 34
console.log(parseFloat('40 years')); // 40

// 첫번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
console.log(parseFloat('He was 40')); // NaN

// 앞뒤 공백을 무시된다.
console.log(parseFloat('60')); // 60