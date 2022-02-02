/* 
let & const declarations are hoisted
These declarations are also hoisted but stored in a seperate memory space than global space
Cannot access this memory space before their initialisation

TDZ - It is the time since when the let variable is hoisted and till it is initialised with some value

let & const declarations are not attached to the global window object
let & const declarations cannot be re-declared

const cannot be re-assigned

To avoid TDZ we can put all let and const declarations at the top level of our function
*/

//uncaught ReferenceError cannot access 'a' before initialisation
console.log(a);

let a = 10;
var b = 100;