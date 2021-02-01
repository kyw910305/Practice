/* 안티패턴으로 가독성, 성능 유지보수 등에 부정적인 영향을 줄 수 있어 지양해야하는 패턴 */

// 동등 비교, 결과를 예측하기 어렵다.
'0' == ''; // false
0 == ''; // true
0 == '0'  // true
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false