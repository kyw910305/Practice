// 10진수는 해석할 수 없는 'A' 이후의 문자는 모두 무시된다.
console.log(parseInt('1A0'));
// 2진수는 해석할 수 없는 '2' 이후의 문자는 모두 무시된다.
console.log(parseInt('102', 2));
// 8진수는 해석할 수 없는 '8' 이후의 문자는 모두 무시된다.
console.log(parseInt('58', 8));
// 16진수는 해석할 수 없는 'G' 이후의 문자는 모두 무시된다.
console.log(parseInt('FG', 16));