// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
/* 
{
  get: Function,
  set: Function,
  enumerable: false,
  configurable: true
}
 */

// 함수 객체의 prototyped은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function() {}, 'prototype');
/* 
{
  value: {...},
  writable: true,
  enumerable: false,
  configurable: false
}
 */