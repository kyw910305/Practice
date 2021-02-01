// 재귀 함수 표현식
var factorial = function foo(n) {
  // 탈출 조건: n이 1이하일때 재귀호출을 멈춘다.
  if (n <= 1) return 1;
  // 함수를 가르키는 식별자로 자기 자신을 재귀 호출
  return n * factorial(n -1);

  // 함수 이름으로 자기 자신을 재귀 호출할 수도 있다.
  // console.log(factorial === foo); // true
  // return n
}

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 반복문을 사용하는것보다 재귀 함수를 사용하는 편이 더 직권적으로 이해하기 쉬울때만 한정적으로 사용한다.