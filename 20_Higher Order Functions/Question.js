const radius = [3, 1, 2, 4];

const area = (radius) => Math.PI * radius * radius;

const circumference = (radius) => 2 * Math.PI * radius;

const diameter = (radius) => 2 * radius;

Array.prototype.calculate = function (logic) {

    const output = this.map(radius => logic(radius));

    return output;
}

let arr = [];

arr = radius.calculate(diameter);
console.log(arr);

arr = radius.calculate(circumference);
console.log(arr);

arr = radius.calculate(area);
console.log(arr);