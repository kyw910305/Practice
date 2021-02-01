// 세미콜론 자동 삽입 기능에 인해 중괄호 뒤에 ;이 암묵적으로 추가 되기 때문에 오류
function foo() { // SyntaxError: Unexpected token ')'
  // ....
}();