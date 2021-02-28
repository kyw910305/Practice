const person = {
  name: 'Kim',
  address: 'Seoul',
  __proto__: { age: 20 }
};

for (const key in person) {
  console.log(key + ': ' + person[key]);
}

// name: Kim
// address: Seoul
// age: 20