getName(); //ReferenceError : getName is not a function
console.log(x);
console.log(getName);

var x = 7;

var getName = () => {

    console.log("Namaste Javascript");
}