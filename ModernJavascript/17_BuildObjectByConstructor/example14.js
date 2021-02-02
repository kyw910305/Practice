function foo () {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo();

// 생성자 ㅎ마수로서 호출: [[Construct]]가 호출된다.
new foo();