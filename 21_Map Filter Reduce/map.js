// Map function is used for transformation

const arr = [5, 1, 3, 2, 6];

//Double
const double = arr.map(ele => ele * 2);
console.log(double);

//Triple
const triple = arr.map(ele => ele * 3);
console.log(triple);

//Binary
const binary = arr.map(ele => ele.toString(2));
console.log(binary);