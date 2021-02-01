(function() {
  var foo = 10; // 즉시 실행 함수의 지역변수
  // ...
}());

console.log(foo); // ReferenceError: foo is not defined

// 라이브러리등에 자주 사용