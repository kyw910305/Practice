// 공백으로 구분된 문자열은 첫번째 문자열만 변환한다.
console.log(parseInt('34 55 66')); // 45
console.log(parseInt('40 years')); // 50
// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환한다.
console.log(parseInt('He was 40')); // NaN
// 앞뒤 공백은 무시된다.
console.log(parseInt(' 60 ')); // 60