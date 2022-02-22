const arr = [5, 1, 3, 2, 6];

//Sum of elements
const sum = arr.reduce((acc, ele) => acc + ele, acc = 0);
console.log(sum);

//Max of elements
const ans = arr.reduce((max, ele) => Math.max(max, ele), max = Number.MIN_SAFE_INTEGER);
console.log(ans);