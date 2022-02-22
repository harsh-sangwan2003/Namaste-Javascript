const arr = [5, 1, 3, 2, 6];

//Filter odd values
const odd = arr.filter(x => x % 2 != 0);
console.log(odd);

//Filer even values
const even = arr.filter(x => x % 2 == 0);
console.log(even);

//Greater than 4
const output = arr.filter(x => x > 4);
console.log(output);
