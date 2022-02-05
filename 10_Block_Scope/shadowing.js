//Block scope means what all variables and functions we can access inside the block
//variables a, b and c are being shadowed

var a = 100;
let b = 100;
const c = 300;
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);