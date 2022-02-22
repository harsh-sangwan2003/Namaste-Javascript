/* 
A function which takes in another function as an argument or return a function is called as a higher order function
*/

//CallBack Function
function x() {

    console.log("Namaste");
}

//Higher Order Function
function y(fn) {

    fn();
}

y(x);