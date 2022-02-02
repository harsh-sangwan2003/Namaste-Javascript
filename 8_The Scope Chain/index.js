/*Scope - Where you can access a avariable or function in the code 
Scope is directly related to the lexical environment
Lexical environment - local memory + lexical environment of it's environment
lexical means in hirearchy
c is lexically inside a 
along with the memory space a function has a reference to it's parent's lexical environment
Scope chain - chain of lexical environments
*/
function a() {

    var b = 10;
    c();

    function c() {
        console.log(b);
    }
}

// console.log(b); Reference error
a();