function getMaxLessThanK(n, k) {
  let bitWise = [];
  let arrIndex = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 2; j <= n; j++) {
      bitWise[arrIndex] = i & j;
      arrIndex++;
    }
    bitWise = bitWise.filter(x => x < k);
  }
  return Math.max(...bitWise);
}

  console.log(getMaxLessThanK(5, 2));