// String, Number, Boolean 생성자 함수는 new연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다.

const str = String(123);
console.log(str, typeof str); // 123 string

const num = Number(123);
console.log(num, typeof num); // 123 number

const bool = Boolean('true');
console.log(bool, typeof bool); // true boolean