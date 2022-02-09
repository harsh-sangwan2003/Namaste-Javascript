//Function statements are hoisted but in case of function expression it will result in a error as the varaible will be initialised with undefined

//Function Statement aka Function declaration
function a() {

    console.log("a called");
}

//Function expression - When a function is assigned to  a variable
var b = function () {

    console.log("b called");
}

// Anonymous Function  - A function without a name. It does not have it's own identity
let fn = function () {

}

// Named Function Expression
var b = function xyz() {

    console.log("b called");
}

//xyz is under the scope of b and not in global scope
xyz(); //Reference error

//First Class Functions - The functions which are passed as an argument to another function or returned from other functions
//First Class Cititzens - The functions which are passed as an argument to another function or returned from other functions