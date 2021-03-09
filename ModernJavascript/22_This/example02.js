// 자기 자신이 속한 객체를 재귀적으로 참조하는 방직은 일반적이지 않으며 바람직 하지도 않다.
function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 카르키는 식별자를 알 수 없다.
  // ???.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 이시점에는 생성자 함수 자신이 생성할 인스턴스를 카르키는 식별자를 알 수 없다.
  // return 2 * ???.radius;
};

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의해야한다.
const circle = new Circle(5);