'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getMaxLessThanK(n, k) {
  let maxValue = 0;
  for (let i = n; i > 0; i--) {
    for (let j = i - 1; j > 0; j--) {
      if ((j & i) < k && (j & i) > maxValue) {
        maxValue = (j & i);
      }
    }
  }
  return maxValue;
}

function main() {
  const q = +(readLine());

  for (let i = 0; i < q; i++) {
    const [n, k] = readLine().split(' ').map(Number);

    console.log(getMaxLessThanK(n, k));
  }
}