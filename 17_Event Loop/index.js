/* 
All JS Code is executed inside the call stack
It has one call stack and can  do only one thing at a time
Call Stack quickly executes whatever is inside it immediately

Event loop monitors the callback queue and call stack
If the call stack is empty the fn inside the callback queue will be pushed inside the call stack

Microtask queue is given higher priority than the callback queue
All the callback functions that are resolved through promises and mutations goes inside the microtask queue

Dom API's, event listeners callback fn goes inside the callback queue
Callback queue is also known as task queue
*/


function a() {

    console.log("a");
}

a();
console.log("End");