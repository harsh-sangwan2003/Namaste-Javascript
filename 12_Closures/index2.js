//Even when the function is returned they still maintain the reference with lexical environment
//Entire closure is returned 

function x() {

    var a = 7;
    function y() {

        //Maintains the reference to the variable instead of value
        console.log(a);
    }

    a = 100;
    return y;
}

// function x() {

//     var a = 7;
//     return function y() {

//         console.log(a);
//     }
// }

var z = x();
console.log(z);

//...
z();