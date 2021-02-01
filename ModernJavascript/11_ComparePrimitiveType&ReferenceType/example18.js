var person1 = {
  name: "Kim"
}

var person2 = {
  name: 'Kim'
}

console.log(person1 === person2); // false
console.log(person1.name === person2.name); // true