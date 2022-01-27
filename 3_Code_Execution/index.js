var n = 2;

function square(num) {

    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

console.log(square2);
console.log(square4);

/*
JavaScript has a call stack to maintain the order of execution contexts.
Initially a GEC(Global Execution Context) is pushed inside the Call Stack
Every function has its own execution context and thus seperate memoty and code area(from other execution contexts).

When everything is executed inside an execution context, it is popped from the call stack and the control goes back to the place
form where the function was invoked
*/
