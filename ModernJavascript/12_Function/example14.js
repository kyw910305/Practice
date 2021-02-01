var add1 = (function () {
  var a = 10;
  return function (x, y) {
    return x + y + a;
  }
}());

console.log(add1(1, 2)); // 13

var add2 = (function () {
  var a = 10;
  return new Function('x', 'y', 'return x + y + a');
}());

console.log(add2(1, 2)); // ReferenceError: a is not defined

// Function 생성자 함수로 함수를 생성하는 방식은 일반적이지 않으며 바람직하지도 않다.