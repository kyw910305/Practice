// 클래스 기반 언어와 달리 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 값, 즉 this 바인딩이 동적으로 결정된다.
// this는 어디서든지 참조 가능하다.
// 전역에서 this는 전역 객체 window를 가르킨다.(브라우저)
console.log(this); // window

function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가르킨다.(브라우저)
  console.log(this); // window
  return number * number;
}
square(2);

const person = {
  name: 'Kim',
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가르킨다.
    console.log(this); // {name: "Kim", getName: ƒ}
    return this.name;
  }
};
console.log(person.getName()); // Kim

function Person(name) {
  this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가르킨다.
  console.log(this); // Person {name: "Kim"}
}
const me = new Person('Kim');