// 좌항의 피연산자가 null 또는 undefined이면 후아의 피연산자를 반환하고.
// 그렇지 않으면 자황의 피연산자를 반환한다.
var foo = null ?? 'default string';
console.log(foo); // "default string"