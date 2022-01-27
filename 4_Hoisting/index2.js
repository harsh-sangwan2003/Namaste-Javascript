// Hoisting is a phenomenon in JS by which we can access variables and functions even before their initialisation

getName();
console.log(x); //undefined
console.log(getName);

var x = 7;

function getName() {

    console.log("Namaste Javascript");
}