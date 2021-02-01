var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // global
}

foo();

console.log(x); // local