var a = 10;
function b() {

    var x = 10;
    console.log(x);
}

console.log(a);
console.log(window.a);
console.log(this.a);
/* 
Even though there is nothing to execute but still JS Engine sets up the call stack and creates GEC
Creates a window object(injected by the JS Engine)
This functionality is provided by JS Engine
this keyword points to the window
window is a global object created along with this and GEC
Every global object or variable gets attached to the window object
*/