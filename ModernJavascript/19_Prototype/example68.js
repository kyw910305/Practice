// for...in문은 프로퍼티 키가 심벌인 프로퍼티는 열거하지 않는다.
const sym = Symbol();
const obj = {
  a: 1,
  [sym]: 10
};

for (const key in obj) {
  console.log(key + ': ' + obj[key]);
}

// a: 1