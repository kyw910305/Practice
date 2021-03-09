// 레퍼 객체(Wrapper object) : 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는 임시 객체
 const str = 'hi';

 // 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변한된다.
 console.log(str.length); // 2
 console.log(str.toUpperCase()); // HI

 // 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한후, 다시 원시 값으로 되돌린다.
 console.log(typeof str); // String