let foo = 1; // 지역변수

{
  let foo = 2; // 지역변수
  let bar = 3; // 지역변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined